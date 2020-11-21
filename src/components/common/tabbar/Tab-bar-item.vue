<template>
    <div class="tab-bar-item" @click="itemClick">
        <slot v-if="!isActived" name="slot-img"></slot>
        <slot v-else name="slot-active-img"></slot>

        <!--方法一：子组件中直接设置颜色-->
<!--        <div :class="{active:isActived}">-->
<!--            <slot name="slot-text"></slot>-->
<!--        </div>-->
        <!--方法二：在父组件App中修改设置颜色        -->
        <div :style="activeStyle">
            <slot name="slot-text"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "tab-bar-item",
        computed:{
            isActived(){
                return (this.$route.path==this.path)
            },
            activeStyle(){
                return this.isActived?{color:this.activeColor}:{}
            }
        },
        props:{
            path:String,
            activeColor:{
                type:String,
                default:'#BF2371'
            }
        },
        methods:{
            itemClick(){
                console.log(this.$route)
                console.log(this.path)
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
    /*@import "../../assets/css/base.css";*/
    .tab-bar-item{
        text-align: center;
        height: 49px;   /*移动端底部导航的固定像素，一般都是49px*/
    }
    /*.active{*/
    /*    color: dodgerblue;*/
    /*}*/

</style>
