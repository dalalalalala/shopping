<template>
  <div class="category">
    <NavBar class="home-nav">
      <template v-slot:center>
        分类
      </template>
    </NavBar>
    <CategoryType class="category-style" :categorymess="categoryMess"></CategoryType>
  </div>
</template>

<script>
  import {getcCategorydata} from "../../network/category";
  import CategoryType from "../../components/common/categoryType/CategoryType";
  import NavBar from "../../components/common/navBar/NavBar";
  export default {
    name: "Category",
    components: {
      CategoryType,
      NavBar
    },
    data(){
      return{
        categoryMess:null
      }
    },
    created() {
      getcCategorydata().then(res => {
        this.categoryMess = res.data.category.list
        // console.log(res.data.category.list)
      })


    }
  }
</script>

<style scoped>
  .home-nav {
    color: #fff;
    background: var(--color-tint);
  }
  .category-style{
    margin-top: 44px;
  }
</style>
