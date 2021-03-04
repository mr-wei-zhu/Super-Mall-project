<template>
  <div class="cart">
    <!-- 导航 -->
    <navbar class="navbar">
      <div slot="center">购物车({{ cartCount }})</div>
    </navbar>
    <!-- 商品列表 -->
      <cart-list :cart-list="cartList"/>
    <!-- 底部汇总 -->
    <cartt-list-bottom :cart-list="cartList"/>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/Navbar.vue";
import CartList from "./Cartcopm/CartList.vue";
import { mapGetters } from "vuex";
import CarttListBottom from "./Cartcopm/CarttListBottom.vue";
import Scroll from "components/common/scroll/scroll.vue";

export default {
  components: { Navbar, CartList, CarttListBottom, Scroll },
  name: "Cart",
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    // ...mapGetters([
    //   "cattLenght",
    //   "cartList",
    //   // ...
    // ]),
    cartList() {
      return this.$store.state.cartList
    },
    cartCount() {
      return this.$store.state.cartList.length
    }

  },
};
</script>

<style scoped>
.navbar {
  background-color: var(--color-text);
  color: #fff;
  font-weight: 700;
  /* position: relative; */
  /* top: 0px; */
}
.cart {
  /* height: calc(100vh - 44px - 44px - 49px ); */

  /* background-color: red; */
  /* overflow: hidden; */
/* top:0; */
}
.content {
  height: 100vh;

  /* overflow: hidden; */
  /* top: 44px;
  bottom: 49px; */
}
</style>