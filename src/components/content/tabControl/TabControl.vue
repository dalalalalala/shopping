<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         class="tab-control-item"
         :class="{active:index===currentIndex}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data() {
      return {
        // titles: [],
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick',index)
// 发射自定义事件
      }
    },
    props: {
      titles: {
        type: Array,
        // default: []
      }
    },
    created() {
      // console.log(this.titles)
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    background: white;
    position: sticky;
    top: 44px;
  }
  .tab-control {

  }

  .tab-control-item {
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }

  .tab-control-item span {
    padding-bottom: 5px;
  }
  .active{color: var(--high-light)}
  .active span{ border-bottom: 2px solid var(--high-light);}
</style>
