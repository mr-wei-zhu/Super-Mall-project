<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgeLoad"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  
  components: {
    SwiperItem,
    Swiper,
  },
  name: "HomeSwiper",
  props:{
      banners:{
          type:Array,
          defauit() {
              return []
          }
      }
  },
  data() {
return {
  isLoad: false
}
  },
  methods:{
    imgeLoad() {
      // console.log("1------")
      if (!this.isLoad) {
      this.$emit('swiperIm')
      this.isLoad = true
      }
    }
  }
};
</script>

<style>
</style>