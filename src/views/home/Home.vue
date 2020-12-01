<template>
  <div>
    <NavBar class="home-nav">
      <template v-slot:center>
        购物街
      </template>
    </NavBar>
    <Swiper>
      <template v-slot:swiperItem>
        <div class="swiper-slide" v-for="item in bannerList">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </div>
      </template>
    </Swiper>
    <!--    <推荐></推荐>-->
    <TabControl :titles="titles" @tabClick="tabClick"></TabControl>
    <GoodsList :goods="goods[currentType].list"></GoodsList>

  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import Swiper from "components/common/Swiper";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";

  import {getHomeMultidata, getHomeGoods} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      Swiper,
      TabControl,
      GoodsList
    },
    data() {
      return {
        // result: null,
        bannerList: null,
        titles: ['流行', '新款', '精选'],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop'
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
      // console.log(this.goods)
    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // this.result = res
          this.bannerList = res.data.banner.list
          // console.log(res)
        })
      },
      getHomeGoods(type) {
        // goods[type] 为ES6语法与 goods.type一样意思
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          // this.goods[type].list=res.data.list 两句话一样ES6
          this.goods[type].list.push(...res.data.list)
          // console.log(res.data.list)
        })
      },
      tabClick(index) {
        // console.log(index)
        this.currentType = ['pop', 'new', 'sell'][index]
        /* 上面这句不是二维数组，上面相当于下面两句
        js的二维数组表示方式：[[],[]]
        let arr=['pop','new','sell']
        this.currentType=arr[index]
        */
      }
    }
  }
</script>

<style scoped>
  .home-nav {
    background: var(--color-tint);
    color: #fff;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }
  .swiper-slide{
    text-align: center;
  }
  .swiper-slide img{
    width: 100vw;
  }
</style>
