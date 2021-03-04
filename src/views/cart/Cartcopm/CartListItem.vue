<template>
  <div class="item">
    <!-- <check-buttom
      :is-checked="product.checked"
    ></check-buttom> -->
    <cart-check-bar :isChecked='product.checked' @colorCheck='colorCheck' class="checked"/>

    <div class="item-right">
      <img class="item-img" :src="product.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="title">{{ product.title }}</div>
      <div class="desc">{{ product.desc }}</div>
      <div class="bottom">
        <span class="price">￥{{ product.price }}</span>
        <span class="count">x{{ product.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CartCheckBar from '../../../components/common/Checkbuttom/cartCheckBar.vue';

export default {
  components: { CartCheckBar,   },
  name: "CartListItem",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    colorCheck() {
      this.product.checked = !this.product.checked;
      console.log(this.product.checked);
    },
  },
};
</script>
<style scoped>
.item {
  /* height: 30px; */
  border: 1px solid #ececec;
  display: flex;
  font-size: 0;
  padding: 5px;
}
.item-right {
  /* height: 50px; */
  background-color: #fff;
  padding: 10px 0;
  width: 26%;
  /* align-items: center; */
}
.item-right img {
  width: 70px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.title {
  padding-top: 10px;
  font-weight: 700;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.desc {
  font-size: 14px;
  clear: #666;
  padding-top: 10px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 0 10px 0 15px;
  overflow: hidden;
  left: 0;
  right: 0;
}

.bottom {
  /* position: absolute;  */
  /* right: 0; */
  /* left: 100px;
    top: 80px;  */
  padding-top: 15px;
}
.price {
  /* padding: 5px 5px; */
  color: #f9cd0b;
  font-size: 18px;
}
.count {
  position: absolute;
  right: 10px;
}
.checked {
  padding:45px 5px 0 0  ;
}

</style>