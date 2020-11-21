<template>
    <div class="nav-bar">
      <div class="left">
          <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
.nav-bar{
  line-height: 44px;
  display: flex;
  /*background: lightpink;*/
  position: fixed;
  top: 0;left: 0;right: 0;
  z-index: 10;

}
  .left,.right{
    width: 60px;
    background: #ff8198;
  }
  .center{
    flex: 1;
    /*background: #ff5777;*/
    color: #fff;
    text-align: center;
  }
</style>
