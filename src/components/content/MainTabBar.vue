<template>
  <tab-bar>
    <tab-baritem path="/home" >
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="" />
      <div slot="item-text">首页</div>
    </tab-baritem>
    <tab-baritem path="/Category">
      <img slot="item-icon" src="~assets/img/tabbar/2.png" alt="" />
      <img slot="item-icon-active" src="~assets/img/tabbar/2.2.png" alt="" />
      <div slot="item-text">分类</div>
    </tab-baritem>
    <tab-baritem path="/Cart">
      <img slot="item-icon" src="~assets/img/tabbar/3.png" alt="" />
      <img slot="item-icon-active" src="~assets/img/tabbar/3.3.png" alt="" />
      <div slot="item-text">购物车</div>
    </tab-baritem>
    <tab-baritem path="/Profile">
      <img slot="item-icon" src="~assets/img/tabbar/4.png" alt="" />
      <img slot="item-icon-active" src="~assets/img/tabbar/4.4.png" alt="" />
      <div slot="item-text">我的</div>
    </tab-baritem>
  </tab-bar>
</template>

<script>
import TabBar from "components/tabbar/TabBar";
import TabBaritem from "components/tabbar/TabBaritem.vue";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBaritem,
  },
};
</script>

<style>
#tab-bar {
  z-index: 3;
}
</style>