<template>
  <div  ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "scroll",
  props: {
    probeType: {
      tyep: Number,
      default: 0,
    },
    pullUpLoad: {
      tyep: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
      // message: "hhh",
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        // console.log(position);
        this.$emit("scroll", position);
      });
    }
    //监听上啦事件,滚动
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        // console.log('上啦');
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      //封装  finishPullUp，可以多次上啦
     this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      // console.log(":::::");
      this.scroll && this.scroll.refresh();
    },
  },
}
</script>

<style>
</style>