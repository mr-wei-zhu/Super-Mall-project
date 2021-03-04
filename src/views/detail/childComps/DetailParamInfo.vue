<template>
  <div v-if="Object.keys(paramInfo).length !== 0" class="params-info">
    <table
      v-for="(table, index) in paramInfo.rule"
      :key="index"
      class="info-size"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">
          {{ td }}
        </td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.info" :key="index">
        <td class="info-param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.params-info {
  margin-top: 20px;
  padding: 10px 15px;
  font-size: 14px;
  border-top: 5px solid #f2f5f8;
  border-bottom: 5px solid #f2f5f8;
}
.params-info table {
  width: 100%;
  border-collapse: collapse;
}
.params-info table tr {
  height: 42px;
}
.params-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-param-key {
  /* float: right; */
  width: 95px;
  word-break: keep-all;
  white-space: nowrap;
}
.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.param-value {
  color: #eb4868;
}
.info-img img {
  width: 100%;
}
</style>
