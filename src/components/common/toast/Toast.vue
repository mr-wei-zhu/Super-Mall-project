<template>
  <transition name="fade">
    <!-- <div > -->
    <div class="toast" v-show="show">{{ message }}</div>
    <!-- </div> -->
  </transition>
</template>

<script>
export default {
  name: "Toast",
  props: {
    message: {
      type: String,
      default: "",
    },
    show: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {},
};
</script>
<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  color: #fff;
  padding: 8px 10px;
  background-color: rgba(0, 0, 0, 0.5);
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave-to {
  /* opacity: 0; */
}
.fade-leave-active {
  /* transition: opacity 1s; */
}
</style>