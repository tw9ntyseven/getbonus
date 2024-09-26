<template>
  <transition name="menu-fade">
    <div
      class="menu-ellipse fixed top-0 left-0 w-screen px-5 md:px-10 h-screen bg-[#161618] z-50"
      v-show="isModalVisible"
    >
      <div class="flex w-full items-center justify-between gap-3.5 h-14 mt-8">
        <div class="bg-[#28282ACC] w-auto rounded-full px-5 h-full">
          <div class="flex h-full gap-5 items-center justify-between">
            <a href="/#hero" @click="closeModal">
              <NuxtImg src="/img/logo.svg" class="w-28" />
            </a>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div
            @click="changeLocale"
            class="flex cursor-pointer items-center justify-center bg-[#28282ACC] w-[60px] h-[60px] rounded-full"
          >
            <NuxtImg src="/icons/translate.svg" class="w-6 h-6" />
          </div>
          <div
            @click="closeModal"
            class="flex cursor-pointer items-center justify-center bg-[#28282ACC] w-[60px] h-[60px] rounded-full"
          >
            <NuxtImg src="/icons/close.svg" class="w-8 h-8" />
          </div>
        </div>
      </div>
      <div
        @click="openFormModal"
        class="mt-8 mb-11 flex cursor-pointer justify-between items-center w-full bg-main rounded-full px-6 py-3.5"
      >
        <div class="">{{ $t("header.connect") }}</div>
        <NuxtImg src="/icons/sms-edit-white.svg" class="h-8" />
      </div>
      <div class="flex flex-col gap-4">
        <a href="/#how-work" @click="closeModal" class="font-medium text-2xl">{{
          $t("header.howWork")
        }}</a>
        <a href="/#roadmap" @click="closeModal" class="font-medium text-2xl"
          >Roadmap</a
        >
        <a href="/#ads" @click="closeModal" class="font-medium text-2xl">{{
          $t("header.ads")
        }}</a>
      </div>
      <div class="mt-11 flex items-center gap-3.5">
        <a
          href="https://x.com/getbonusglobal"
          target="_blank"
          class="bg-[#252527] px-6 py-3 rounded-full"
        >
          <NuxtImg src="/icons/x.svg" class="w-6 h-6" />
        </a>
        <a
          href="https://t.me/getbonuseng"
          target="_blank"
          class="bg-[#252527] px-6 py-3 rounded-full"
        >
          <NuxtImg src="/icons/tg-red.svg" class="w-6 h-6" />
        </a>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
const props = defineProps<{
  isModalVisible: boolean;
}>();

const emit = defineEmits<{
  onShowModal: [any];
  onShowFormModal: [any];
}>();

const { setLocale } = useI18n();
const localeCookie = useCookie("locale");
const body = ref<HTMLElement | null>(null);
const isBodyLocked = useScrollLock(body);

const changeLocale = () => {
  setLocale(localeCookie.value === "ru" ? "en" : "ru");
  localeCookie.value = localeCookie.value === "ru" ? "en" : "ru";
};

const closeModal = () => {
  isBodyLocked.value = false;
  emit("onShowModal", false);
};

const openFormModal = () => {
  emit("onShowFormModal", true);
  closeModal();
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
