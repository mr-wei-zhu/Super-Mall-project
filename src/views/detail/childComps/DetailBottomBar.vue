<template>
  <div class="flex bot-bar-wrap">
    <div class="bot-bar-item">
      <i><img src="~assets/img/detail/icon01.png" alt="" /></i>
      <p>客服</p>
    </div>
    <div class="bot-bar-item">
      <i><img src="~assets/img/detail/icon02.png" alt="" /></i>
      <p>店铺</p>
    </div>
    <div class="bot-bar-item">
      <i><img src="~assets/img/detail/icon03.png" alt="" /></i>
      <p>收藏</p>
    </div>
    <div class="btn cart-btn" @click="addToCart">加入购物车</div>
    <div class="btn buy-btn" @click="buyclick">购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods:{
    addToCart() {
      // console.log('点击当天即');
      this.$emit('addcart')
    },
    buyclick() {
      console.log('11111');
      this.$emit('buyclick')
    }
  }
};
</script>
<style scoped>
.bot-bar-wrap {
  /* height: 49px; */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
}
.bot-bar-item {
  width: 16%;
  font-size: 12px;
  color: #333;
  text-align: center;
}
.bot-bar-item img {
  width: 22px;
  height: 22px;
  margin: 4px 0;
  vertical-align: middle;
}
.btn {
  width: 26%;
  font-size: 13px;
  line-height: 49px;
  text-align: center;
}
.cart-btn {
  background-color: #f9cd0b;
  line-height: 49px;
}
.buy-btn {
  color: #fff;
  background-color: var(--color-high-text);
}
</style>>

