<template>
  <div>
    <NavBar class="home-nav">
      <template v-slot:center>
        购物街
      </template>
    </NavBar>
    <SwiperA :simg="imgList"></SwiperA>
    <TypeList :typelists="typeList"></TypeList>
    <Titlebar></Titlebar>
  </div>
</template>

<script>

  import NavBar from "../../components/common/navBar/NavBar";
  import {getHomeMultidata} from "../../network/home";
  import SwiperA from "../../components/common/SwiperA";
  import TypeList from "../../components/common/typeList/TypeList";
  import Titlebar from "../../components/common/tabbar/Titlebar";



  export default {
    name: "Home",
    components: {
      NavBar,
      SwiperA,
      TypeList,
      Titlebar,

    },
    data() {
      return {
        result: null,
        imgList: null,
        typeList: null,
        contentBar: [
          {title: '流行'},
          {title: '新款'},
          {title: '精选'},
        ]
      }
    },
    methods: {},
    created() {
      getHomeMultidata().then(res => {
        this.result = res
        this.imgList = res.data.banner.list
        this.typeList = res.data.recommend.list
        // console.log(res)
      })


    }
  }
</script>

<style scoped>
  .home-nav {
    color: #fff;
    background: var(--color-tint);
  }
</style>
