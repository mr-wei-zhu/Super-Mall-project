<template>
  <div class="Category">
    <navbar class="navbar">
      <div slot="center">分类</div>
    </navbar>
    <left :left="list" class="left" @seleitem="seleitem" />
    <right :right="right" class="right" @Scrollitem="Scrollitem"/>
  </div>
</template>

<script>
import Left from "./left/left";

import Navbar from "components/common/navbar/Navbar.vue";
import Scroll from "components/common/scroll/scroll.vue";
import { getCategory, getSubcategory } from "network/Category";
import Right from "./right/right.vue";
export default {
  name: "Category",
  props: [""],
  data() {
    return {
      list: [],
      categoryData: {},
      subcategories: {},
      listmailKey: {},
      currentIndex: -1,
      right: {},
    };
  },
  created() {
    this._getCategroy();
  },
  components: { Navbar, Left, Scroll, Right, Scroll },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    _getCategroy() {
      getCategory().then((res) => {
        this.list = res.data.category.list;
        console.log(this.list[1].maitKey);
        this._getSubcategory(0);
      });
    },
    _getSubcategory(index) {
      this.currentIndex = index;
      const maitKey = this.list[index].maitKey;
      getSubcategory(maitKey).then((res) => {
        this.right = { ...res.data };
        console.log(this.right);
      });
    },
    seleitem(index) {
      this._getSubcategory(index);
      console.log(index);
    },
    Scrollitem() {
      this.$refs.Scroll.refresh()
    }
  },

  watch: {},
};
</script>
<style scoped>
.navbar {
  color: #fff;
  background-color: var(--color-text);
}
.Category {
  position: relative;
}
.left {
  /* background-color: red; */
  position: absolute;
  left: 0;
}
.right {
  position: absolute;
  /* right: 0; */
  left: 87px;
}
</style>