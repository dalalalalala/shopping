<template>
  <div class="content-bar">
    <div v-for="item in titles" class="title">
      <a href="#">{{item.title}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ContentBar",
    props: {
      titles: {
        type: String
      }
    }
  }
</script>

<style scoped>
  .content-bar{
    width: 100vw;
    margin: 20px 10px 0 10px;
    display: flex;
    justify-content: space-around;
  }
  .title{

  }

</style>
