<template>
  <transition name="menu-fade">
    <div
      class="menu-ellipse fixed top-0 left-0 w-screen flex items-center justify-center px-5 md:px-10 h-screen bg-[#161618] z-50"
      v-show="isModalVisible"
    >
      <form
        class="form-ellipse relative w-[343px] h-[477px] rounded-[32px] py-6 px-8"
      >
        <NuxtImg
          @click="closeModal"
          src="/icons/close-form.svg"
          class="absolute mt-3 mr-3 top-0 right-0 w-6 h-6"
        />
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
  </transition>
</template>
<script setup lang="ts">
const { smtpPass } = useRuntimeConfig();
// console.log(smtpPass);

const { locale } = useI18n();
declare const Email: any;

const props = defineProps<{
  isModalVisible: boolean;
}>();

const emit = defineEmits<{
  onShowModal: [any];
}>();

const body = ref<HTMLElement | null>(null);
const isBodyLocked = useScrollLock(body);
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

const closeModal = () => {
  isBodyLocked.value = false;
  emit("onShowModal", false);
};

watch(
  () => props.isModalVisible,
  (value) => {
    if (value === true) {
      isBodyLocked.value = true;
    }
  }
);
</script>
<style scoped>
.form-ellipse {
  background-image: url("/img/form-ellipse.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top right;
}
.menu-ellipse {
  background-image: url("/img/menu-ellipse.png");
  background-repeat: no-repeat;
  background-size: 100%;
}
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.menu-fade-enter-to,
.menu-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
