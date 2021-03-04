<template>
  <div class="item_check">
    <div class="check_box" :class="{ checked: isChecked }"></div>
  </div>
</template>
<script>
export default {
  name: "checkButtom",
  props: {
    isChecked: Boolean,
    // default:false
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.item_check {
  width: 50px;
  padding: 45px 5px 0 0;
}
.check_box {
  width: 20px;
  height: 20px;
  margin: 0 auto;
  border-radius: 100%;

  /* border: 1px solid rgba(128, 128, 128, 0.4); */
}

.check_box.checked {
  width: 20px;
  height: 20px;
  border-style: none;
  background: url("~assets/img/cart/true.png") no-repeat;
  background-size: cover;
}
</style>
