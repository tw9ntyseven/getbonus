<template>
  <div id="roadmap" class="h-24 mt-18 lg:mt-36"></div>
  <section>
    <div class="cont">
      <div
        class="gradient relative py-8 px-10 sm:py-12 sm:px-14 w-full h-[570px] overflow-x-scroll rounded-[32px]"
      >
        <div class="sticky md:static top-0 left-0">
          <div class="title text-main">Roadmap GETBONUS</div>
          <div class="text-xl sm:text-2xl font-normal mt-[2px]">
            {{ $t("roadmap.subtitle") }}
          </div>
        </div>
        <Timeline
          v-if="locale === 'ru'"
          :value="eventsRu"
          align="top"
          layout="horizontal"
          class="mt-20 w-max md:w-auto"
        >
          <template #opposite="slotProps">
            <div class="text-gray800 font-bold text-2xl mb-5">
              {{ slotProps.item.date }}
            </div>
          </template>
          <template #content="slotProps">
            <div class="mt-9 flex flex-col gap-3.5">
              <div
                v-for="(item, i) in slotProps.item.content"
                :key="i"
                class="flex gap-2"
              >
                <div class="mt-2 w-[23px] h-[9px] rounded-full bg-main" />
                <div class="text-xl font-medium">{{ item.title }}</div>
              </div>
            </div>
          </template>
        </Timeline>
        <Timeline
          v-else
          :value="eventsEn"
          align="top"
          layout="horizontal"
          class="mt-20 w-max md:w-auto"
        >
          <template #opposite="slotProps">
            <div class="text-gray800 font-bold text-2xl mb-5">
              {{ slotProps.item.date }}
            </div>
          </template>
          <template #content="slotProps">
            <div class="mt-9 flex flex-col gap-3.5">
              <div
                v-for="(item, i) in slotProps.item.content"
                :key="i"
                class="flex gap-2"
              >
                <div class="mt-2 w-[23px] h-[9px] rounded-full bg-main" />
                <div class="text-xl font-medium">{{ item.title }}</div>
              </div>
            </div>
          </template>
        </Timeline>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const { locale } = useI18n();

const eventsRu = ref([
  {
    date: "Сентябрь",
    content: [
      { title: "Запуск комьюнити" },
      { title: "Разработка квест-бота" },
      { title: "Выпуск квест-бота" },
      { title: "Разработка платформы GetBonus" },
    ],
  },
  {
    date: "Октябрь",
    content: [
      { title: "Выпуск MVP платформы GetBonus" },
      { title: "Закрытое тестирование платформы" },
    ],
  },
  {
    date: "Ноябрь",
    content: [
      { title: "Выпуск платформы GetBonus в открытый доступ" },
      { title: "Рекламная кампания, анонс партнеров" },
      { title: "Запуск криптотокена платформы" },
    ],
  },
]);

const eventsEn = ref([
  {
    date: "September",
    content: [
      { title: "Community Launch" },
      { title: "Quest bot development" },
      { title: "Questbot Release" },
      { title: "GetBonus Platform Development" },
    ],
  },
  {
    date: "October",
    content: [
      { title: "GetBonus Platform MVP Release" },
      { title: "Closed Platform Testing" },
    ],
  },
  {
    date: "November",
    content: [
      { title: "GetBonus platform release to the public" },
      { title: "Advertising Campaign, Partner Announcement" },
      { title: "GetBonus platform crypto-token launch" },
    ],
  },
]);
</script>
<style scoped>
.gradient {
  background-image: url("/img/roadmap-ellipse.png"),
    linear-gradient(180deg, #3f3ff2 0%, #e02049 45%);
  background-size: cover;
  background-position: center;
}
</style>
