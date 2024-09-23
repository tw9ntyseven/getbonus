<template>
  <header
    class="fixed flex items-center justify-between px-5 md:px-3 lg:px-5 md:justify-center gap-3.5 top-0 z-50 h-14 mt-8 w-full"
  >
    <div class="bg-[#28282ACC] w-auto rounded-full px-5 h-full">
      <div class="flex h-full gap-2 lg:gap-5 items-center justify-between">
        <a href="#hero">
          <NuxtImg src="/img/logo.svg" class="w-[124px]" />
        </a>
        <a
          href="#how-work"
          class="hidden hover:text-main hover:opacity-100 transition duration-200 text-sm md:block opacity-60 whitespace-nowrap"
          >{{ $t("header.howWork") }}</a
        >
        <a
          href="#roadmap"
          class="hidden hover:text-main hover:opacity-100 transition duration-200 text-sm md:block opacity-60 whitespace-nowrap"
          >Roadmap</a
        >
        <a
          href="#ads"
          class="hidden hover:text-main hover:opacity-100 transition duration-200 text-sm md:block opacity-60 whitespace-nowrap"
          >{{ $t("header.ads") }}</a
        >
      </div>
    </div>
    <div
      class="select-none hidden md:flex hover:border hover:border-main active:bg-main active:text-white border-transparent transition duration-300 cursor-pointer items-center justify-center w-52 bg-[#28282ACC] rounded-full px-5 h-full"
      @mousedown="isActive = true"
      @mouseup="isActive = false"
      @mouseleave="isActive = false"
    >
      <NuxtImg
        :src="isActive ? '/icons/sms-edit-white.svg' : '/icons/sms-edit.svg'"
        class="w-8 h-8"
      />
      <a
        href="#ads"
        class="whitespace-nowrap text-sm"
        :class="[isActive ? 'text-white' : 'shine-text']"
      >
        {{ $t("header.connect") }}
      </a>
    </div>
    <div
      class="select-none hidden md:flex cursor-pointer transition-bg duration-300 items-center justify-center w-[60px] h-[60px] rounded-full"
      :class="isActiveTranslate ? 'bg-main' : 'bg-[#28282ACC]'"
      @click="changeLocale"
      @mousedown="isActiveTranslate = true"
      @mouseup="isActiveTranslate = false"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <NuxtImg
        src="/icons/translate.svg"
        class="w-6 h-6 absolute transition-opacity duration-300"
        :class="{ 'opacity-0': isHovered, 'opacity-100': !isHovered }"
      />
      <NuxtImg
        :src="
          isHovered && !isActiveTranslate
            ? '/icons/translate-red.svg'
            : '/icons/translate.svg'
        "
        class="w-6 h-6 absolute transition-opacity duration-300"
        :class="{
          'opacity-100': isHovered,
          'opacity-0': !isHovered,
        }"
      />
    </div>
    <div
      @click="openMenu"
      class="flex md:hidden cursor-pointer items-center justify-center bg-[#28282ACC] min-w-[60px] w-[60px] h-[60px] rounded-full"
    >
      <NuxtImg src="/icons/menu.svg" class="w-8 h-8" />
    </div>
  </header>
</template>
<script setup lang="ts">
const emit = defineEmits<{
  onShowModal: [any];
}>();

const { setLocale } = useI18n();
const localeCookie = useCookie("locale");
const isActive = ref(false);
const isActiveTranslate = ref(false);
const isHovered = ref(false);

const openMenu = () => {
  emit("onShowModal", true);
};

const changeLocale = () => {
  setLocale(localeCookie.value === "ru" ? "en" : "ru");
  localeCookie.value = localeCookie.value === "ru" ? "en" : "ru";
};
</script>
<style scoped>
.shine-text {
  background: linear-gradient(
    90deg,
    var(--primary-color) 0%,
    var(--linear-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 0px 8px var(--shadow-color);
}
</style>
