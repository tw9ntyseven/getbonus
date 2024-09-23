<template>
  <div id="ads" class="h-24 mt-18 lg:mt-36"></div>
  <section class="double-ellipse-bg">
    <div class="cont">
      <div class="text-center title text-main">{{ $t("ads.title") }}</div>
      <div class="mt-10 sm:mt-20 flex flex-wrap lg:flex-nowrap gap-6">
        <div class="flex flex-col flex-wrap lg:flex-nowrap gap-6">
          <div
            class="ads-gradient-1 flex flex-wrap md:flex-nowrap gap-3 h-auto xl:h-[143px] py-6 px-8 bg-dark-900 rounded-[32px]"
          >
            <div class="w-full md:w-2/5 text-xl font-bold">
              {{ $t("ads.card1.title") }}
            </div>
            <div class="w-full md:w-3/5 text-base font-medium">
              {{ $t("ads.card1.subtitle") }}
            </div>
          </div>
          <div
            class="ads-gradient-2 flex flex-wrap md:flex-nowrap gap-3 h-auto xl:h-[143px] py-6 px-8 bg-dark-900 rounded-[32px]"
          >
            <div class="w-full md:w-2/5 text-xl font-bold">
              {{ $t("ads.card2.title") }}
            </div>
            <div class="w-full md:w-3/5 text-base font-medium">
              {{ $t("ads.card2.subtitle") }}
            </div>
          </div>
          <div
            class="ads-gradient-3 flex flex-wrap md:flex-nowrap gap-3 h-auto xl:h-[143px] py-6 px-8 bg-dark-900 rounded-[32px]"
          >
            <div class="w-full md:w-2/5 text-xl font-bold">
              {{ $t("ads.card3.title") }}
            </div>
            <div class="w-full md:w-3/5 text-base font-medium">
              {{ $t("ads.card3.subtitle") }}
            </div>
          </div>
        </div>
        <form
          class="form-ellipse w-full lg:w-auto h-max-content rounded-[32px] py-6 px-8"
        >
          <div class="text-xl font-bold">{{ $t("ads.form.title") }}</div>
          <div class="text-sm font-medium opacity-50 mt-1.5 mb-6">
            {{ $t("ads.form.subtitle") }}
          </div>
          <input
            v-model="form.name"
            :placeholder="$t('ads.form.input1')"
            class="textfield mb-4"
          />
          <input
            v-model="form.email"
            :placeholder="$t('ads.form.input2')"
            class="textfield mb-4"
          />
          <textarea
            v-model="form.question"
            :placeholder="$t('ads.form.textarea')"
            class="textfield pt-3.5 resize-none !rounded-[24px] !h-24 mb-5"
          />
          <button
            @click.prevent="sendEmail"
            type="submit"
            class="w-full h-11 rounded-full flex items-center justify-center bg-main"
          >
            {{ $t("ads.form.button") }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
// const { smtpPass } = useRuntimeConfig().smtpPass;
// console.log(useRuntimeConfig().smtpPass);
// console.log(process.env.PASS_SMTP);

const { locale } = useI18n();
declare const Email: any;

const form = reactive({
  name: "",
  email: "",
  question: "",
});

const sendEmail = async () => {
  if (!form.name || !form.email || !form.question) {
    if (locale.value === "ru") {
      alert("Пожалуйста, заполните все поля формы.");
    } else {
      alert("Please fill out all fields on the form.");
    }
    return;
  }

  if (form.email && !/^[\w-+.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
    if (locale.value === "ru") {
      alert("Неверный адрес почты");
    } else {
      alert("Invalid mail format");
    }
    return;
  }

  const response = await $fetch("/api/send-email", {
    method: "POST",
    body: {
      name: form.name,
      email: form.email,
      question: form.question,
    },
  });

  if (response) {
    if (locale.value === "ru") {
      alert("Письмо успешно отправлено!");
    } else {
      alert("Mail sent successfully!");
    }
  }
  form.name = "";
  form.email = "";
  form.question = "";
};
</script>
<style scoped>
.ads-gradient-1 {
  background-image: url("/img/dots-ads.png"), url("/img/ads-gradient-1.png");
  background-size: 100%, auto 100%;
  background-repeat: no-repeat, no-repeat;
}
.ads-gradient-2 {
  background-image: url("/img/dots-ads.png"), url("/img/ads-gradient-2.png");
  background-size: 100%, auto 100%;
  background-repeat: no-repeat, no-repeat;
}
.ads-gradient-3 {
  background-image: url("/img/dots-ads.png"), url("/img/ads-gradient-3.png");
  background-size: 100%, auto 100%;
  background-repeat: no-repeat, no-repeat;
}
.form-ellipse {
  background-image: url("/img/form-ellipse.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top right;
}
</style>
