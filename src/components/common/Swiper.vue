<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot name="swiperItem"></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    props: {
      banner: {
        type: Array
      }
    },
    updated() {
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: 1000,
        loop:true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    computed: {}

  }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    /*height:300px*/
    margin-top: 44px;
  }

  .swiper-container img {
    width: 100%
  }

</style>
