<template>
  <div class="shopcart">
    <NavBar class="home-nav">
      <template v-slot:center>
        购物车
      </template>
    </NavBar>
    <ShopCartSum></ShopCartSum>
  </div>
</template>

<script>


  import NavBar from "../../components/common/navBar/NavBar";
  import ShopCartSum from "../../components/content/shopCartSum/ShopCart-sum";

  export default {
    name: "ShopCart",
    components: {
      NavBar,
      ShopCartSum
    }
  }
</script>

<style scoped>
  .home-nav {
    color: #fff;
    background: var(--color-tint);
  }
</style>
