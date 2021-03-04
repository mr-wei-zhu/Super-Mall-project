<template>
  <scroll class="centent" ref="scroll">
    <div class="right">
      <div v-for="(item, index) in right.list" :key="index" class="right-item">
        <a :href="item.link">
          <img :src="item.image" alt="" class="right-img" />
          <div>
            <span>{{ item.title }}</span>
          </div>
        </a>
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from "../../../components/common/scroll/scroll.vue";

export default {
  name: "right",
  props: {
    right: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },

  components: { Scroll },

  computed: {},

  beforeMount() {},

  mounted() {
    
  },

  methods: {
    
  },
  watch: {},
};
</script>
<style scoped>
.right {
  width: 75%;
  text-align: center;
}
.right-img {
  margin-bottom: 10px;
  width: 70%;
}
.right-item {
  width: 133%;
  border-bottom: 1px solid red;
  padding: 35px 0;
}
span {
  color: var(--color-text);
}
.centent {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
</style>