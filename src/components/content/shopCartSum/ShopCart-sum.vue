<template>
    <div class="ShopCart-sum">
      <input type="checkbox">全选
      <span>合计：￥</span>
      <button>去计算(0)</button>
    </div>
</template>

<script>
    export default {
        name: "ShopCart-sum",

    }
</script>

<style scoped>
  .ShopCart-sum{
    position: fixed;
    bottom: 44px;
    left: 0;
    right: 0;
    width: 100vw;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #EEEDEF;
    border-top: 2px solid #666;
  }
  .ShopCart-sum>span{
    margin-left: 10px;
  }
  .ShopCart-sum>button{
    position: absolute;
    right: 0;
   background-color: #FF5401;
    text-align: center;
    border: none;
    height: 48px;
    padding: 0 6px;
    color: #fff;
  }


  .ShopCart-sum>input:checked {
	background:#ff5777;
}

.ShopCart-sum>input {
	width:25px;
	height:25px;
	background-color:#ffffff;
	border:solid 1px #dddddd;
	-webkit-border-radius:50%;
	border-radius:50%;
	font-size:0.8rem;
	margin:0 4px 0 10px;
	position:relative;
	display:inline-block;
	vertical-align:top;
	cursor:default;
	-webkit-appearance:none;
	-webkit-user-select:none;
	user-select:none;
	-webkit-transition:background-color ease 0.1s;
	transition:background-color ease 0.1s;
}
  .ShopCart-sum>input:checked::after {
	content:'';
	top:8px;
	left:5px;
	position:absolute;
	background:transparent;
	border:#fff solid 2px;
	border-top:none;
	border-right:none;
	height:6px;
	width:14px;
	-moz-transform:rotate(-45deg);
	-ms-transform:rotate(-45deg);
	-webkit-transform:rotate(-45deg);
	transform:rotate(-45deg);
}
</style>
