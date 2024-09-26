<template>
  <div class="wrapper h-screen">
    <div class="pt-24">
      <HeroSection />
      <HowWorkSection />
      <ForAdvertisers />
      <Roadmap />
      <TheFooter />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
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
