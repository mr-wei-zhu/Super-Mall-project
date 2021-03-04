<template>
  <div v-if="Object.keys(detailInfo).length !== 0">
    <div></div>
    <div>{{ detailInfo.desc }}</div>
    <div>{{ detailInfo.detailImage[0].key }}</div>
    <div
      class="info-list"
      v-for="(item, index) in detailInfo.detailImage[0].list"
      :key="index"
    >
      <img :src="item" alt=""  @load="imgLoad" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  data() {
    return {
      counter: 0,
      imagesLength: 0,
    };
  },
  props: {
    detailInfo: {
      type: Object,
      defualt() {
        return {};
      },
    },
  },
  methods: {
    imgLoad() {
      if (++this.counter === this.imagesLength) {
        this.$emit("imageLoad");
        // console.log(this.imgLoad);
      }
    },
  },
  watch: {
    detailInfo() {
      //获取图片的个数
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
      
    },
  },
  updated() {
    console.log(this.imagesLength);
  }
};
</script>

<style>
.info-list img {
  width: 100%;
}
</style>