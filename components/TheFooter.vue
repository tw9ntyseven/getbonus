<template>
  <div class="mt-36 cont pb-[92px]">
    <footer
      class="bg-[#1B1B1D] rounded-[34px] py-8 px-9 flex flex-col lg:flex-row flex-wrap lg:items-center justify-between gap-3.5 h-auto w-full"
    >
      <a href="/#hero">
        <NuxtImg src="/img/logo-footer.svg" class="w-28" />
      </a>
      <div class="my-5 lg:my-0 flex flex-col lg:flex-row gap-2 md:gap-3.5">
        <a
          v-for="(link, i) in links"
          :key="i"
          :href="link.to"
          class="opacity-60 hover:text-main hover:opacity-100 transition duration-200"
          >{{ link.name }}</a
        >
        <a
          href="/#how-work"
          class="opacity-60 hover:text-main hover:opacity-100 transition duration-200"
          >{{ $t("header.howWork") }}</a
        >
        <a
          href="/#roadmap"
          class="opacity-60 hover:text-main hover:opacity-100 transition duration-200"
          >Roadmap</a
        >
        <a
          href="/#ads"
          class="opacity-60 hover:text-main hover:opacity-100 transition duration-200"
          >{{ $t("header.ads") }}</a
        >
        <NuxtLink
          to="/terms"
          class="opacity-60 hover:text-main hover:opacity-100 transition duration-200"
          >{{ $t("header.conditions") }}</NuxtLink
        >
        <NuxtLink
          to="/privacy-policy"
          class="opacity-60 hover:text-main hover:opacity-100 transition duration-200"
          >{{ $t("header.privacyPolicy") }}</NuxtLink
        >
      </div>
      <div class="flex items-center gap-3.5">
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
    </footer>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped></style>
