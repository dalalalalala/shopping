<template>
  <div class="gooddList">
    <GoodsListItem v-for="item in goods" :goods-item="item"></GoodsListItem>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";

  export default {
    name: "GoodsList",
    components:{
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
      }
    }
  }
</script>

<style scoped>

</style>
