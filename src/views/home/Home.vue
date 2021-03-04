<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <tab-control
      ref="TabControl1"
      :titles="['流行', '新跨', '精选']"
      @tabClick="tabClick"
      class="tab-control"
      v-show="isTabFixed"
    />

    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentscroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperIm="swiperIm" />
      <home-recommend-view :recommends="recommends" />
      <keep-alive>
        <feature-view />
      </keep-alive>
      <tab-control
        ref="TabControl2"
        :titles="['流行', '新跨', '精选']"
        @tabClick="tabClick"
      />
      <goods-list :goods="showGoods" />
    </scroll>

    <back-top @click.native="backclick" v-show="isshouw" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import HomeRecommendView from "./childComps/HomeRecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import Navbar from "components/common/navbar/Navbar.vue";
import TabControl from "components/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "../../components/common/scroll/scroll";
import BackTop from "components/content/backTop/BackTop.vue";

import { getHomeMultidata, getHomeGoods } from "../../network/home";
import { debounce } from "components/common/utils.js";

export default {
  components: {
    Navbar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },

  name: "Home",

  data() {
    return {
      // result:null
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isshouw: false,
      tabOffsetTop: 599,
      isTabFixed: false,
      saveY: 0,
				itemImgLister: null

    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    
    },
  },
  destroyed() {
    // console.log('销货');
  },
  activated() {
    // console.log('激活');
    //防抖动
    this.$refs.scroll.refresh();
    //记录位置
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    // console.log('进来');
    // 保存Y值
    this.saveY = this.$refs.scroll.scroll.y;
    // console.log(this.$refs.scroll.scroll.y);
			this.$bus.$off('itemImgLoad',this.itemImgLister)
    
  },
  
  created() {
    //请求多个数据
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  mounted() {
    //图片加载完成事件。。。防抖动
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("itemImageLoad", () => {
      // console.log("11111");
      // console.log(this);
      // this.$refs.scroll.refresh()
      refresh();
    });
    //tab-control 赋值
    // 所有组件都有一个属性&el: 用于获取组件中的元素
    // this.tabOffsetTop = this.$refs.tabcontrol
    // console.log(this);
    // console.log("11111");
      
  },
  methods: {
    //取tab-control 高度
    swiperIm() {
      console.log(this.$refs.TabControl2.$el.offsetTop);
      this.tabOffsetTop = this.$refs.TabControl2.$el.offsetTop;
      // console.log('1111111');
    },
    /**
     * 事件监听相关的方法
     */

    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.TabControl1.currentIndex = index;
      this.$refs.TabControl2.currentIndex = index;

      // console.log(this.$refs.TabControl1.currentIndex);
    },
    contentscroll(position) {
      this.isshouw = -position.y > 1000;
      // if(-position.y < 1000) {
      //   this.isshouw = false
      // } else {
      //   this.isshouw = true
      // }
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    backclick() {
      //  console.log('返回');
      this.$refs.scroll.scrollTo(0, 0);
      // console.log(this.$refs.scroll.message);
    },
    loadMore() {
      //  console.log('上啦');
      this.getHomeGoods(this.currentType);
    },
    /**
     * 网络请求相关的方法
     */

    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // console.log(this.pop.list);
        //调取finishPullUp，可以多次上啦
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
/* #home { */
/* padding-top: 44px; */
/* overflow: hidden; */
/* } */
.home-nav {
  background-color: var(--color-text);
  color: #fff;

  /* position: fixed;
  left: 0;
  right: 0;
  top: 0; */
  /* z-index: 9; */
}

.content {
  /* height: 300px; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
}
/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}
.tab-control {
  position: relative;
  z-index: 9;
}
</style>