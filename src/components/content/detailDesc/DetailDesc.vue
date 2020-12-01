<template>
  <div class="detail-desc">
    <p>{{itemTitle}}</p>
    <div id="price">
      <span id="nowPrice">￥{{itemLowNowPrice}}</span>
      <span id="oldPrice">{{itemOldPrice}}</span>
      <span id="priceIcon">活动价</span>
    </div>
    <div id="columns">
      <p v-for="item in columns">{{item}}</p>
    </div>
    <div id="service">
      <p v-for="item in services">
        <img :src="item.icon" alt="">{{item.name}}
      </p>
    </div>

    <div class="shopMess" id="1">
      <div id="shopLogo">
        <div id="logoImg">
          <img :src="shopLogo" alt="">
        </div>
        <span>{{shopName}}</span>
      </div>
      <div class="shop-assess">
        <div id="allSell">
          <p>{{cSells}}</p>
          <p>总销量</p>
        </div>
        <div id="allGoods">
          <p>{{cGoods}}</p>
          <p>全部宝贝</p>
        </div>
        <div id="shopScore">
          <p v-for="item in score">
            <span>{{item.name}}</span>
            <span class="score" :class="{'scoreColor':item.isBetter}">{{item.score}}</span>
            <span id="topScore" v-if="item.isBetter">高</span>
            <span id="lowScore" v-else>低</span>
          </p>
        </div>
      </div>
      <div id="shopUrl">
        <a :href="shopUrl">进店逛逛</a>
      </div>
    </div>

    <div id="sellActive">
      <span v-for="item in promotions">【{{item}}】</span>
    </div>

    <div id="2" class="detail-image">
      <p>穿着效果</p>
      <div v-for="item in detailImagelist">
        <img :src="item" alt="">
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "DetailDesc",
    props: {
      itemTitle: {
        type: Object,
        defalut: {}
      },
      itemLowNowPrice: {
        type: Object,
        defalut: {}
      },
      itemOldPrice: {
        type: Object,
        defalut: {}
      },
      columns: {
        type: Array,
      },
      services: {
        type: Array
      },
      shopName:{
        type:String
      },
      shopLogo:{
        type:String
      },
      cSells:{
        type:String
      },
      cGoods:{
        type:String
      },
      score:{
        type:Array
      },
      shopUrl:{
        type:String
      },
      promotions:{
        type:Array
      },
      detailImagelist:{
        type:Array
      }
    }
  }
</script>

<style scoped>
  .detail-desc {
    margin: 10px;
  }

  .detail-desc > p {
    font-size: 20px;
    color: #000;
    font-weight: bold;
  }

  #price {
    margin: 10px 0
  }

  #nowPrice {
    font-size: 26px;
    font-weight: bold;
    color: #ff5777;
    padding-right: 10px;
  }

  #oldPrice {
    text-decoration: line-through;
  }

  #priceIcon {
    background-color: #ff5777;
    color: #fff;
    padding: 2px 4px;
    border-radius: 10px;
    position: absolute;
  }

  #columns {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-top: 30px;
  }

  #service {
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    padding-bottom: 20px;
    margin-top: 10px;
    border-bottom: 3px solid #dbdada;
  }
  #service>p{
    margin-top: 10px;
    padding-right: 35px;
  }
  #service img{
    width: 20px;
  }
  .shopMess{
    border-bottom: 2px solid #e3e2e2;
  }
  #shopLogo{
    margin: 20px 0;
    display: flex;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
  }
  #logoImg{
    border: 1px solid #ccc;
    border-radius: 50%;
    padding: 10px;
    margin-right: 10px;
  }
  #shopLogo img{
    width: 60px;
  }

  .shop-assess{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  #allGoods>p,#allSell>p{
    text-align: center;
    padding-top: 5px;
    font-weight: bold;
  }
  #allGoods{
    padding-right: 20px;
    border-right: 2px solid #ccc;
  }
  #shopScore p{
    margin-top: 5px;
  }
  #shopScore span{
    margin-right: 6px;
  }
  #topScore,#lowScore{
    position: absolute;
    right: 0;
    color: #fff;
  }
  #topScore{
    background-color: #c41010;
  }
  #lowScore{
    background-color: #096d09;
  }
  .score{
    color: #096d09;
  }
  .scoreColor{
    color: #c41010;
  }
  #shopUrl{
    background-color: #F4F6FC;
    width: 120px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    margin: 30px auto 20px;
  }
  #shopUrl>a{
    line-height: 26px;
  }

  #sellActive{
    margin-top: 20px;
  }
  .detail-image{
    padding:20px 0 80px;
  }
  .detail-image>p{
    margin-bottom: 20px;
  }
  .detail-image img{
    width: 100%;
  }
</style>
