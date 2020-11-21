<template>
  <div class="menu-list">
    <div v-for="item in menulists" class="menu">
      <a :href="item.link">
        <img :src="item.show.img" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>


  export default {
    name: "MenuList",
    data() {
      return {
        col: 5
      }
    },
    props: {
      menulists: {
        type: Array
      }
    }
  }
</script>

<style scoped>
  .menu-list {
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
  }

  .menu {
    margin-top: 5px;
    border-radius: 5px;
  }

  .menu img, .menu p {
    width: 48vw;
  }

  .menu p {
    color: #666;
  }


</style>
