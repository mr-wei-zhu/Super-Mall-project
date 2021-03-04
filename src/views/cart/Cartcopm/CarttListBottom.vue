<template>
  <div class="bottom">
    <div class="checkbox-d">
      <cart-check-bar
        class="checked"
        :is-checked="isSelectAll"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>
    <span class="total-price">合计: ¥{{ isTotal }}</span>
    <span class="buy-product">结算({{ endCount }})</span>
  </div>
</template>

<script>
import CartCheckBar from "../../../components/common/Checkbuttom/cartCheckBar.vue";
import { mapGetters } from "vuex";
export default {
  name: "CarttListBottom",
  props: {},

  components: { CartCheckBar },

  computed: {
    ...mapGetters(["cartList"]),
    isSelectAll() {
      // return  !(this.cartList.filter(item => !item.checked).length)
      // return !this.cartList.find(item => !item.checked)
      if (this.cartList.length === 0) return false;
      //   return !this.cartList.some(item => !item.checked)
      // }
      return this.cartList.every((item) => item.checked);
    },
    isTotal() {
      return this.cartList
        .filter((item) => {
          if (item.checked) {
            return item.checked;
          }
        })
        .reduce((preValue, item) => {
          return preValue + item.count * item.price;
        }, 0)
        .toFixed(2);
    },
    endCount() {
      return this.cartList
        .filter((item) => {
          if (item.checked) {
            return item.checked;
          }
        })
        .reduce((preValue, item) => {
          return preValue + item.checked;
        }, 0);
    },
  },

  beforeMount() {},

  mounted() {},

  methods: {
    checkClick() {
      console.log("1111");
      if (this.isSelectAll) {
        //全部选中
        this.cartList.forEach((element) => {
          element.checked = false;
        });
      } else {
        this.cartList.forEach((element) => {
          element.checked = true;
        });
      }
    },
  },

  watch: {},
};
</script>
<style scoped>
.bottom {
  display: flex;
  font-size: 16px;
  color: #888;
  line-height: 44px;
  /* background-color: red; */
}
.checkbox-d {
  flex: 1;
  line-height: 0;
  /* width: 80px; */
}
.checkbox-d span {
  position: relative;
  left: 25%;
  top: -5%;
}
.checked {
  position: relative;
  top: 20%;
  left: 5%;
}
.total-price {
  flex: 1;
}
.buy-product {
  flex: left;
  padding: 0 10px 0;
  color: #fff;

  /* right: 5px; */
  background-color: orangered;
}
</style>