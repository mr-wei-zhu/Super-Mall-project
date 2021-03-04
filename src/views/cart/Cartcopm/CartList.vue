<template>
  <div class="cart-list">
    <!-- <cart-list-item :cartList="cartList" /> -->
    <scroll class="content" ref="scroll">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :product="item"
      />
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/scroll.vue";
import CartListItem from "./CartListItem";

// import CartListItem from "./CartListItem.vue";
export default {
  name: "CartList",

  components: {
    Scroll,
    CartListItem,
  },
  props:{
    cartList:{
      type:Array,
      default() {
        return {}
      }
    }
  },
  
  activated() {
    console.log("11111");
    this.$refs.scroll.refresh();
  },
  methods: {},
};
</script>
<style scoped>
.cart-list {
  background-color: #fff;
  height: calc(100vh - 44px - 49px - 40px);
  overflow: hidden;
}
.content {
  /* overflow: hidden; */
  height: 100%;
}
</style>