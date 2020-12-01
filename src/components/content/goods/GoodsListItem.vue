<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.show.img" alt="">
    <div>
      <p>{{goodsItem.title}}</p>
      价格：￥{{goodsItem.price}}
      <br>
      收藏：{{goodsItem.cfav}}
    </div>
  </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
      props:{
          goodsItem:{
            type:Object,
            defalut:{}
          }
      },
      methods:{
          itemClick(){
            this.$router.push('/detail/'+this.goodsItem.iid)
          }
      }
    }
</script>

<style scoped>
  .goods-item{
    width: 50vw;
    display: inline-block;
    padding: 5px;
  }
  .goods-item>img{
    width: 100%;
  }
</style>
