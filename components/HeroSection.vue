<template>
  <div id="hero"></div>
  <section
    class="mt-20 sm:mt-24 lg:mt-36 cont flex flex-wrap gap-8 lg:gap-8 xl:gap-0 items-center justify-between"
  >
    <div>
      <div
        class="font-bold text-3xl sm:text-4xl lg:text-5xl mb-3 lg:!leading-[60px]"
      >
        {{ $t("hero.title1") }}<br />
        {{ $t("hero.title2") }}<br />
        {{ $t("hero.title3") }}
      </div>
      <div class="font-medium text-base lg:text-xl !leading-6">
        {{ $t("hero.subtitle1") }}<br />
        {{ $t("hero.subtitle2") }}
      </div>
      <div class="mt-8 lg:mt-11 flex items-center gap-4">
        <button
          class="relative overflow-hidden rounded-full px-6 py-4 flex gap-2 items-center transition duration-300"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
          @mousedown="isPressed = true"
          @mouseup="isPressed = false"
        >
          <span
            class="absolute inset-0 bg-gradient-to-r from-shadow-color to-linear-color-100 transition-opacity duration-300"
            :class="{ 'opacity-0': isHovered, 'opacity-100': !isHovered }"
          ></span>

          <span
            class="absolute inset-0 transition-opacity duration-300"
            :class="{
              'opacity-100': isHovered,
              'opacity-0': !isHovered,
              'bg-gradient-to-r from-gradient-start to-gradient-end':
                !isPressed,
              'bg-[#AB203B]': isPressed,
            }"
          ></span>

          <span class="select-none relative z-10 flex items-center gap-2">
            {{ $t("hero.try") }}
            <NuxtImg src="/icons/arrow-up-right.svg" class="w-6 h-6" />
          </span>
        </button>
        <a
          href="#how-work"
          class="select-none border-[#e02046] border hover:bg-[#e02046] active:bg-[#AB203B] active:border-[#AB203B] transition duration-300 rounded-full px-6 py-4 flex gap-2 items-center"
        >
          {{ $t("hero.exc") }}
        </a>
      </div>
    </div>
    <div
      class="relative flex flex-col justify-center xl:justify-start w-full xl:w-auto items-center"
    >
      <div
        class="custom-gradient-square w-[274px] h-[402px] lg:w-[342px] lg:h-[502px] rounded-t-[48px]"
      ></div>
      <div
        class="absolute bottom-[4px] w-[254px] h-[393px] lg:w-[317px] lg:h-[491px] rounded-t-[40px] overflow-hidden"
      >
        <video autoplay loop muted playsinline width="640" height="360">
          <source src="/video/present.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="w-[370px] lg:w-[495px] h-[4px] shadow-line" />
    </div>
  </section>
</template>
<script setup lang="ts">
const isHovered = ref(false);
const isPressed = ref(false);
</script>
<style scoped>
.button-primary-hover {
  background: linear-gradient(90deg, #e02046 0%, #8c1a31 100%);
}
.button-linear {
  background: linear-gradient(
    90deg,
    var(--shadow-color) 0%,
    var(--linear-color-100) 100%
  );
}

.custom-border-color {
  border-color: var(--shadow-color);
}

.custom-gradient-square {
  background: linear-gradient(
    180deg,
    rgba(224, 32, 73, 0.32) 0%,
    rgba(224, 32, 73, 0) 100%
  );
}

.shadow-line {
  background: radial-gradient(
    45% 1537.5% at 50% 50%,
    #e02049 0%,
    rgba(224, 32, 73, 0) 100%
  );
}
</style>
