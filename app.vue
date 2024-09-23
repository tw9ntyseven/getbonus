<template>
  <TheHeader @onShowModal="onShowMenu" />
  <main ref="main">
    <div class="wrapper h-screen">
      <div class="pt-24">
        <HeroSection />
        <HowWorkSection />
        <ForAdvertisers />
        <Roadmap />
        <TheFooter />
      </div>
    </div>
  </main>
  <TheMenu
    :isModalVisible="isMenuVisible"
    @onShowModal="onShowMenu"
    @onShowFormModal="onShowForm"
  />
  <TheModalForm :isModalVisible="isFormVisible" @onShowModal="onShowForm" />
</template>
<script setup lang="ts">
const isMenuVisible = ref(false);
const isFormVisible = ref(false);
const localeCookie = useCookie("locale");
const { locale, setLocale } = useI18n();
const route = useRoute();

const onShowMenu = (value: boolean) => {
  isMenuVisible.value = value;
};

const onShowForm = (value: boolean) => {
  isFormVisible.value = value;
};

useHead({
  titleTemplate: (titleChunk: any) => {
    return titleChunk || "Getbonus";
  },
});

onMounted(() => {
  if (route.path === "/en") {
    setLocale("en");
    localeCookie.value = "en";
    return;
  }

  if (!localeCookie.value) {
    setLocale("ru");
    localeCookie.value = "ru";
  } else {
    setLocale(localeCookie.value);
  }
});
</script>
<style scoped>
.wrapper {
  background-image: url("/img/bg-texture-2.png"), url("/img/sharp.png"),
    url("/img/ellipse-1.png");
  background-repeat: repeat, repeat, no-repeat;
  background-size: 100%, 100%;
}
.ellipse {
  background: #e02049cc;
}
</style>
