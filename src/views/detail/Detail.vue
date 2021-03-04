<template>
  <div id="detail">
    <deatil-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav" />

    <scroll
      class="content1"
      ref="scroll"
      :probe-type="3"
      @scroll="contentscroll"
    >
      <div>
        <!-- 轮播图 -->
        <detail-swiper :top-images="topImages" />
        <!-- 商品简介 -->
        <detail-base-info :goods="goods"></detail-base-info>
        <!-- 店铺信息 -->
        <detail-shop-info
          :shop="shop"
          ref="shopinfo"
          @swiperIm="swiperIm"
        ></detail-shop-info>
        <!-- 商品图片 -->
        <detail-goods-info
          :detail-info="detailInfo"
          @imageLoad="goodsImgLoad"
        ></detail-goods-info>
        <!-- 商品参数 -->
        <detail-param-info :param-info="paramInfo" ref="params" />
        <!-- 商品评价 -->
        <detail-comment-info :rate-info="rateInfo" ref="comments" />
        <!-- 推荐 -->
        <goods-list
          :goods="recommendInfo"
          ref="recommend"
          class="goods-list"
        ></goods-list>
      </div>
    </scroll>

    <back-top @click.native="backclick" v-show="isshouw" />
    <detail-bottom-bar
      @addcart="addToCart"
      @buyclick="buyclick"
    ></detail-bottom-bar>
    <toast :message="message" :show="show" />
    <!-- <toast :show="show" /> -->
  </div>
</template>

<script>
import DeatilNavBar from "./childComps/DeatilNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import BackTop from "components/content/backTop/BackTop.vue";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail.js";
import Scroll from "../../components/common/scroll/scroll.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import Toast from "../../components/common/toast/Toast.vue";

export default {
  components: {
    DeatilNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll,
    DetailCommentInfo,
    GoodsList,
    BackTop,
    DetailBottomBar,
    Toast,
  },

  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      themeTopY: [],

      paramInfo: {},
      rateInfo: [],
      recommendInfo: [],
      isshouw: true,
      tabOffsetTop: null,
      currentIndex: null,
      message: "",
      show: false,
    };
  },

  created() {
    //1.保存传入iid
    this.iid = this.$route.params.iid;
    // console.log(this.$route.params.iid);

    //2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      //1.获取顶部的轮播图片
      // console.log(res);
      const data = res.result;
      // setTimeout(() => {
      //   this.topImages = data.itemInfo.topImages;
      //   return this.topImages;
      // }, 500);
      this.topImages = data.itemInfo.topImages;
      // if(res.result.itemInfo.topImages) {
      // }
      // console.log(this.topImages);
      //获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo);
      // console.log(data);
      //商铺
      // console.log(data.shopInfo);
      // console.log(Shop);
      this.shop = new Shop(data.shopInfo);
      // console.log(this);
      // console.log(Shop);
      //保存商品的详情数据
      this.detailInfo = data.detailInfo;
      // console.log(this.detailInfo);
      //获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // console.log(data.rate);
      if (data.rate.cRate !== 0) {
        this.rateInfo = data.rate.list;
      }
      this.$nextTick(() => {});
    });
    getRecommend().then((res) => {
      this.recommendInfo = res.data.list;
      // console.log(this.recommendInfo);
    });
  },
  mounted() {},

  methods: {
    buyclick() {
      this.$router.replace("/cart");
      this.addToCart();

    },
    addToCart() {
      //获取购物车需要展示的数据
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      // console.log(product);
      //将商品加入购物车
      this.$store.dispatch("addCart", product).then((res) => {
        this.show = true;
        this.message = res;
        // console.log(res);

        setTimeout(() => {
          (this.show = false), (this.message = "");
        }, 1500);
      });
    },
    goodsImgLoad() {
      this.$refs.scroll.refresh();
      this.themeTopY = [];
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.params.$el.offsetTop - 48);
      this.themeTopY.push(this.$refs.comments.$el.offsetTop - 48);
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop - 48);
      this.themeTopY.push(Number.MAX_VALUE);
    },

    swiperIm() {
      // this.tabOffsetTop = this.$refs.TabControl2.$el.offsetTop;
      // this.tabOffsetTop = this.$refs.paraminfo.$el.offsetTop;
    },
    contentscroll(position) {
      // console.log(position);
      const y = -position.y + 5;
      // console.log(y);
      let length = this.themeTopY.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          y >= this.themeTopY[i] &&
          y < this.themeTopY[i + 1]
        ) {
          // console.log(i);
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      // if(this.currentIndex !== i && ((i < length -1 && y > this.themeTopY[i] && y < this.themeTopY[i+1]) || (i == length -1 &&  y > this.themeTopY[i] && y))) {
      //   this.currentIndex = i;
      //   // console.log(this.currentIndex);
      //   this.$refs.nav.currentIndex = this.currentIndex

      // this.isshouw = -position.y > 1000;
      // if(-position.y < 1000) {
      //   this.isshouw = false
      // } else {
      //   this.isshouw = true
      // }
      // this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    backclick() {
      //  console.log('返回');
      this.$refs.scroll.scrollTo(0, 0);
      // console.log(this.$refs.scroll.message);
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 200);
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content1 {
  overflow: hidden;
  height: calc(100% - 93px);
}
.goods-list {
  /* margin-top: 48px; */
}
</style>