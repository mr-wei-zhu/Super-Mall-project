<template>
  <!-- <div class="left"> -->
    <scroll class="left">
      <div class="title" v-for="(item,index) in left" :key="index" @click="cilckleft(index)" :class="{avtive:index === isitem}">
          {{item.title}}
      </div>
      </scroll>
  <!-- </div> -->
</template>

<script>
import Scroll from 'components/common/scroll/scroll.vue';

  export default {
    name:'left',
    props:{
        left:{
            type:Array,
            default() {
                return
            }
        }
    },
    data () {
      return {
        isitem:0
      };
    },

    components: {Scroll},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      cilckleft(index) {
        // console.log(index);
        this.isitem = index;
        // console.log(this.isitem);
        this.$emit('seleitem',index)
        this.$emit('Scrollitem')
      }
    },

    watch: {}

  }

</script>
<style  scoped>
.title {
    height: 45px;
    line-height: 45px;
    color: #666;
    text-align: center;
    background-color: #f6f6f6;

}
.left {
  height: calc(100vh - 44px - 49px) ;
  overflow: hidden;
  width: 80px;
}
.title.avtive {
  font-weight: 700;
color: var(--color-text);
background-color: #fff;
border-left:3px solid var(--color-high-text);
}
</style>