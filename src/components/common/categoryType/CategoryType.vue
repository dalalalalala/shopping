<template>
  <div class="category-type">

    <ul class="type-ul">
      <li class="type-list" v-for="(item,index) in categorymess" :class="{ active:index==isActive }"
          @click="itemChange(index),itemValue(item.maitKey)">
        <router-link :to="'/category/subcategory'">{{item.title}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>


  export default {
    name: "CategoryType",
    components: {},
    props: {
      categorymess: {
        type: Array
      }
    },
    data() {
      return {
        isActive: false,
        maitKey: null,
        path: null
      }
    },
    methods: {
      itemChange(index) {
        this.isActive = index
      },
       itemValue(maitKey){
        this.maitKey=maitKey
        this.path='/category/subcategory'
        this.$router.push({path:this.path})
        console.log(this.$route)
      }

    },
  }
</script>

<style scoped>

  .type-ul {
    float: left;
    width: 25vw;
    background-color: #F7F5F7;
  }

  .type-list {
    height: 45px;
    line-height: 45px;
    text-align: center;

  }

  .active {
    background-color: #fff;
    color: #BF2371;
    border-left: 3px solid #ff5777;
  }
</style>
