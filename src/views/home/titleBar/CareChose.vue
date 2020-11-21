<template>
  <div class="careChose">
    <MenuList :menulists="menuList"></MenuList>
  </div>
</template>

<script>
  import {getHomeTabdata} from "../../../network/home";
  import MenuList from "../../../components/common/menuList/MenuList";


  export default {
    name: "CareChose",
    components: {
      MenuList
    },
    data() {
      return {
        menuList: []
      }
    },
    created() {
      getHomeTabdata().then(res => {

        this.menuList = res.data.list
        console.log(res.data.list)
      })
    }
  }
</script>

<style scoped>

</style>
