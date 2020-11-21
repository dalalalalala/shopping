<template>
  <div class="cascade-page" :style="'width: '+pageWidth+';'">
    <div class="cascade-bar" :style="'width:'+barWidth+';'" v-for="(val,i) in barNumber">
      <div class="cascade-bar-content">
        <div class="img-block" v-for="(item,index) in typelists" v-if="index%barNumber==i">
          <img :src="item.show.image" width="100%"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TypeList",
    props: {
      pageWidth: { //
        type: String,
        default: "80%"
      },
      barNumber: {
        type: Number,
        default: 4,
        validator: function (value) {
          return 1 < value && value < 11;
        }
      },
      typelists: {
        type: Array,
      }
    },
    data() {
      return {
        barWidth: 0,
        ownBarNumber: 0 //计算后得到的列的数量
      }
    },
    mounted() {
      let _this = this;
      _this.setBarWidth();
    },
    methods: {
      setBarWidth() {
        let _this = this;

        let widthProp = this.barNumber;

        _this.barWidth = 100 / widthProp + "%";
      }
    }

  }
</script>

<style scoped>
  * {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    width: 100%;
  }

  .cascade-page {
    margin: 0 auto;
    background-color: #ddd;
    overflow: hidden;
  }

  .cascade-bar {
    padding: 0px 5px;
    padding-bottom: 0px;
    float: left;
  }

  .cascade-bar-content {
    width: 100%;
  }

  .img-block {
    width: 100%;
    margin: 5px 0px;
  }
</style>

