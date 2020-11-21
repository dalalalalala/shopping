<template>
  <div class="category-list">
    <ul>
      <li v-for="item in lists">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>
<script>


  import {getcCategorySubcategorydata} from "../../network/category";

  export default {
    name: "CategoryList",
    data() {
      return {
        lists: null,

      }
    },
    created() {
      getcCategorySubcategorydata().then(res => {
        console.log('safq')
        this.lists = res.data.list
        console.log(res.data.list)
      })
    }

  }
</script>

<style scoped>
  ul{
    list-style: none;
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
  }
  li{
    margin-top: 10px;
    margin-left: 10px;

  }

  li>img{
    width: 23vw;
  }
  li>p{
    text-align: center;
    line-height: 30px;
  }

</style>
