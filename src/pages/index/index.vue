<template>
  <div class="index-container">
      <h1 class="index-title">{{text}}</h1>
      
  </div>
</template>
<script>
  import { Tab, TabItem, Swiper, SwiperItem, XInput, Group, XButton, Toast, XHeader, Search, Countdown } from 'vux'
  export default {
    components: {
      Tab, TabItem, Swiper, SwiperItem, XInput, Group, Toast, XHeader, Search, Countdown,Toast
    },
    data() {
      return {
        text: '商城',
      }
    },
    mounted() {

    },
    methods: {
      //获取验证码
      getverificationcode () {
        
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/center.less';
  * { touch-action: none; }
  .index-title{
    position:absolute;
    top:0;
    width:100vw;
    font-family:'微软雅黑 Regular', '微软雅黑';
    font-weight:400;
    font-style:normal;
    font-size:18px;
    color:#993333;
  }
</style>