<template>
  <div class="login-container">
      <h1 class="login-title">{{text}}</h1>
      <img class="login-top-img" src="~img/u271.jpg" alt="登录图片">
      <x-input class="phone_record" name="mobile" :max="11" is-type="china-mobile" v-model="phoneNumber" placeholder="请输入您的手机号登录">测试</x-input>
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
        showtoasttext:'',
        showPositionValue:false,
        isGetcode: false,
        phoneNumber: '',
        verificationcode: '',
        codecolor: 'white',
        type: 0,
        text: '登录',
        isLogin: false,
        time: 60,
        show: true,
        openid: ""
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
  .login-container{
    
  }
  .login-title{
    position:absolute;
    top:0;
    width:100vw;
  }
  .login-top-img{
    width:100vw;
    height:10.5rem;
  }
  .phone_record{
    border-radius: 3px;
    font-size: 0.32rem;
    color: #999999;
    height: 1rem;
    margin: 0 0.46rem;
    padding:0 0.46rem;
  }
</style>