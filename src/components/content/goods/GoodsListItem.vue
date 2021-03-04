<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImg" alt="" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥{{ goodsItem.price }}</span>
      <span>⭐</span>
      <span class="cfav">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      defualt() {
        return [];
      },
    },
  },
  methods: {
    imageLoad() {
      // console.log('imageLoad');
      this.$bus.$emit("itemImageLoad");
      // if(this.$router.path.indexOf('/home')  )  {
      // this.$bus.$emit('itemImageLoad')
      // } else if(this.$router.path.indexOf('/detail')) {
      //     this.$bus.$emit('goodsImgLoad')
      // }
    },
    itemClick() {
      // console.log('跳转');
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
};
</script>

<style>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-item p {
  font-size: 13px;
  /* display: block; */
  /* width: 200px; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 3px;
}
.goods-info {
  text-align: center;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.price {
  /* text-align: center; */
  padding-right: 10px;
  font-size: 14px;
  color: red;
}
.cfav {
  font-size: 13px;
  color: royalblue;
}
</style>