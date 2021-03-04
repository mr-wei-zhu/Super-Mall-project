<template>
  <div>
    <navbar>
      <div slot="left" class="back" @click="deatilClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in title" 
        :key="item"
         class="title-item"
         :class="{active: index === currentIndex}"
         @click="titleClick(index)"
         >{{item}}</div>
      </div>
    </navbar>
  </div>
</template>

<script>
import Navbar from '../../../components/common/navbar/Navbar.vue';

export default {
  components: { Navbar },

  name: "DeatilNavBar",
  data() {
    return {
      title:['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index,
      this.$emit('titleClick',index)
    },
    deatilClick() {
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-text);
}
.back img{
  margin-top: 12px;
}
</style>