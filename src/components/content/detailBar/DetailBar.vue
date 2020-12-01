<template>
  <div class="detail-bar">
    <div id="tabbarItem">
      <TabBarItem>
        <template v-slot:slot-img>
          <img src="@/assets/img/detailbar/service.svg" alt="">
        </template>
        <template v-slot:slot-active-img>
          <img src="@/assets/img/detailbar/service2.svg" alt="">
        </template>
        <template v-slot:slot-text>
          <div>服务</div>
        </template>
      </TabBarItem>
      <TabBarItem>
        <template v-slot:slot-img>
          <img src="@/assets/img/detailbar/shop.svg" alt="">
        </template>
        <template v-slot:slot-active-img>
          <img src="@/assets/img/detailbar/shop2.svg" alt="">
        </template>
        <template v-slot:slot-text>
          <div>店铺</div>
        </template>
      </TabBarItem>
      <TabBarItem>
        <template v-slot:slot-img>
          <img src="@/assets/img/detailbar/collect.svg" alt="">
        </template>
        <template v-slot:slot-active-img>
          <img src="@/assets/img/detailbar/collect2.svg" alt="">
        </template>
        <template v-slot:slot-text>
          <div>收藏</div>
        </template>
      </TabBarItem>
    </div>

    <div class="btn">
      <div id="addCart">加入购物车</div>
      <div id="buy">购买</div>
    </div>
  </div>
</template>

<script>
  import TabBarItem from '../../common/tabbar/Tab-bar-item'

  export default {
    name: "DetailBar",
    components: {
      TabBarItem
    }
  }
</script>

<style scoped>
  .detail-bar {
    width: 100vw;
    position: fixed;
    bottom: 0;
    display: flex;
    z-index: 10;
    justify-content: flex-end;
    background: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
  }

  #tabbarItem {
    width: 88vw;
    display: flex;
    justify-content: space-around;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px
  }

  .btn {
    display: flex;
    justify-content: left;
    /*position: relative;*/

  }

  #addCart {
    background-color: #FCEA0D;
    color: #000;
  }

  #buy {
    background-color: #F977A4;
    color: #fff;
  }

  #addCart, #buy {
    width: 22vw;
    text-align: center;
    line-height: 48px;

  }
</style>
