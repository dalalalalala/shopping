<template>
  <div class="title-bar">
    <div class="title-bar-link">
      <router-link :to="{name:'popular'}">
        <div>流行</div>
      </router-link>
      <router-link :to="{name:'new'}">
        <div>新款</div>
      </router-link>
      <router-link :to="{name:'careChose'}">
        <div>精选</div>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: "Titlebar",
  }
</script>

<style scoped>
  .title-bar-link {
    margin: 20px 0;
    display: flex;
    justify-content: space-around;
  }
  .router-link-active{
    color: #ff8198;
  }
</style>
