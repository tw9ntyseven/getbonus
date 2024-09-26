<template>
  <div id="how-work" class="h-24 mt-18 lg:mt-36"></div>
  <section class="double-ellipse-bg">
    <div class="cont">
      <div class="text-center title text-main">{{ $t("howWork.title") }}</div>
      <div
        class="mt-10 sm:mt-20 flex flex-col lg:flex-row gap-3 xl:gap-6 items-center h-full lg:h-[500px] xl:h-[560px]"
      >
        <div class="card">
          <div class="num">01</div>
          <div class="card-title">
            {{ $t("howWork.card1.title1") }}<br />
            {{ $t("howWork.card1.title2") }}
          </div>
          <button
            @click="openLink"
            class="mt-6 flex items-center gap-1 py-2 px-3 hover:bg-[#00B0F266] active:bg-[#00B0F2] transition duration-300 xl:py-3 xl:px-4 rounded-full bg-blue-200"
            @mousedown="isActive = true"
            @mouseup="isActive = false"
          >
            <NuxtImg
              :src="
                isActive ? '/icons/telegram-white.svg' : '/icons/tg-logo.svg'
              "
              class="xl:w-6 xl:h-6"
            />
            <div
              class="select-none text-xs xl:text-sm font-bold"
              :class="isActive ? 'text-white' : 'text-blue-900'"
            >
              {{ $t("howWork.card1.telegram") }}
            </div>
          </button>
          <NuxtImg
            src="/img/how-work-phone-1.png"
            class="absolute w-[254px] -bottom-[200px] left-1/2 transform -translate-x-1/2"
          />
        </div>
        <div class="card">
          <div class="num">02</div>
          <div class="card-title">
            {{ $t("howWork.card2.title1") }}<br />
            {{ $t("howWork.card2.title2") }}<br />
            {{ $t("howWork.card2.title3") }}
          </div>
          <NuxtImg
            src="/img/+15.svg"
            class="absolute h-9 left-[20px] top-[46%] z-10"
          />
          <NuxtImg
            src="/img/+32.svg"
            class="absolute h-9 right-[10px] top-[60%] z-10"
          />
          <NuxtImg
            src="/img/+32.svg"
            class="absolute h-9 left-[10px] top-[73%] z-10"
          />
          <NuxtImg
            src="/img/+100.svg"
            class="absolute h-9 right-[5px] top-[83%] z-10"
          />
          <NuxtImg
            src="/img/how-work-phone-2.png"
            class="absolute w-[254px] -bottom-[200px] left-1/2 transform -translate-x-1/2"
          />
        </div>
        <div class="card">
          <div class="num">03</div>
          <div class="card-title">
            {{ $t("howWork.card3.title1") }}<br />
            {{ $t("howWork.card3.title2") }}<br />
            {{ $t("howWork.card3.title3") }}
          </div>
          <NuxtImg
            src="/img/how-work-phone-3.png"
            class="absolute w-[254px] -bottom-[200px] left-1/2 transform -translate-x-1/2"
          />
        </div>
        <div class="card">
          <div class="num">04</div>
          <div class="card-title">
            {{ $t("howWork.card4.title1") }}<br />
            {{ $t("howWork.card4.title2") }}<br />
            {{ $t("howWork.card4.title3") }}<br />
            {{ $t("howWork.card4.title4") }}
          </div>
          <NuxtImg
            src="/img/nuts.png"
            class="absolute -bottom-[130px] inset-0 m-auto z-10"
          />
          <NuxtImg
            src="/img/how-work-phone-4.png"
            class="absolute w-[254px] -bottom-[200px] left-1/2 transform -translate-x-1/2"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const isActive = ref(false);

const openLink = () => {
  window.open("https://t.me/GetBonusGlobal_bot", "_blank");
};
</script>
<style scoped>
.double-ellipse-bg {
  background-image: url("/img/ellipse-left.png"), url("/img/ellipse-right.png");
  background-repeat: no-repeat;
  background-position: left center, right center;
  background-size: auto 100%, auto 100%;
}
.card {
  @apply relative w-[342px] h-[561px] lg:w-full lg:h-full px-6 py-4 card-bg rounded-[32px] overflow-hidden;
}
.num {
  @apply leading-[89px] text-[70px] lg:text-[65px] xl:text-[70px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-main to-primary-0;
}
.card-title {
  @apply font-bold text-xl lg:text-sm xl:text-xl overflow-hidden text-ellipsis whitespace-nowrap;
}
.card-bg {
  background: linear-gradient(
    180deg,
    rgba(28, 28, 30, 0.8) 14.11%,
    #b91f40 100%
  );
}
</style>
