<template>
  <div>
    <NavBar id="navBar">
      <template v-slot:left>
        <span @click="goback">&lt;</span>
      </template>
      <template v-slot:center>
        <di class="title">
          <div v-for="(title,index) in titles"
               :class="{active:index==currentIndex}"
               @click="itemClick(index)">
            <span><a :href="'#'+index">{{title}}</a></span>
          </div>
        </di>
      </template>
    </NavBar>
    <Swiper id="0">
      <template v-slot:swiperItem>
        <div class="swiper-slide" v-for="item in bannerList">
          <img :src="item" alt="">
        </div>
      </template>
    </Swiper>
    <DetailDesc :itemTitle="itemTitle"
                :itemLowNowPrice="itemLowNowPrice"
                :itemOldPrice="itemOldPrice"
                :columns="columns"
                :services="services"
                :shopName="shopName"
                :shopLogo="shopLogo"
                :cSells="cSells"
                :cGoods="cGoods"
                :score="score"
                :shopUrl="shopUrl"
                :promotions="promotions"
                :detailImagelist="detailImagelist"
    ></DetailDesc>
    <DetailBar></DetailBar>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  import {getDetailMessage} from "network/detail";
  import Swiper from "../../components/common/Swiper";
  import DetailDesc from "../../components/content/detailDesc/DetailDesc";
  import DetailBar from "../../components/content/detailBar/DetailBar";

  export default {
    name: "Detail",
    components: {
      NavBar,
      Swiper,
      DetailDesc,
      DetailBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        iid: null,
        currentIndex: 0,
        bannerList: null,
        itemTitle: null,
        itemLowNowPrice: null,
        itemOldPrice: null,
        columns: null,
        services: null,
        shopName: null,
        shopLogo: null,
        cSells: null,
        cGoods: null,
        score: null,
        shopUrl: null,
        promotions: null,
        detailImagelist: null,
        iid:null

      }
    },
    created() {
      this.iid = this.$route.params.iid
      this.getDetailMessage(this.iid)
    },
    methods: {
      goback() {
        this.$router.back()
      },
      itemClick(index) {
        this.currentIndex = index
      },
      getDetailMessage(iid) {
        getDetailMessage(iid).then(res => {
          // console.log(res)
          this.bannerList = res.result.itemInfo.topImages
          this.itemTitle = res.result.itemInfo.title
          this.itemLowNowPrice = res.result.itemInfo.lowNowPrice
          this.itemOldPrice = res.result.itemInfo.oldPrice
          this.columns = res.result.columns
          this.services = res.result.shopInfo.services
          this.shopName = res.result.shopInfo.name
          this.shopLogo = res.result.shopInfo.shopLogo
          this.cSells = res.result.shopInfo.cSells
          this.cGoods = res.result.shopInfo.cGoods
          this.score = res.result.shopInfo.score
          this.shopUrl = res.result.shopInfo.shopUrl
          this.promotions = res.result.promotions.list
          this.detailImagelist = res.result.detailInfo.detailImage[0].list

          console.log(res.result.itemInfo.iid)
        })
      }
    }

  }
</script>

<style scoped>
  #navBar {
    background-color: #fff;
  }

  .swiper-slide {
    text-align: center;
    height: 380px;
    overflow: hidden;
  }

  .swiper-slide img {
    width: 100vw;
    text-align: center;
  }

  .title {
    display: flex;
  }

  .title > div {
    flex: 1;
  }

  .active span {
    border-bottom: 3px solid var(--high-light);
    color: var(--high-light);
  }

</style>
