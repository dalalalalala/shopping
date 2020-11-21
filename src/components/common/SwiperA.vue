<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="item in simg" class="swiper-slide">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper"
  import 'swiper/dist/css/swiper.css'

  export default {
    name: "SwiperA",
    props: ['simg'],
    updated() {
      let mySwiper = new Swiper('.swiper-container', {
        autoplay: 3000,
        loop: true
      });
    }

  }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    /*height: 300px;*/
    margin-top: 44px;
  }

  .swiper-slide img {
    width: 100%;
  }

</style>
