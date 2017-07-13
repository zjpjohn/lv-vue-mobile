<template>
  <div class="login-container">
      <h1 class="login-title">{{text}}</h1>
      <img class="login-top-img" src="~img/u271.jpg" alt="登录图片">
      <group class="verificationcode">
        <x-input class="phone_record" name="mobile" :max="11" is-type="china-mobile" v-model="phoneNumber" placeholder="请输入手机号"/>
        <x-input  class="verificationcode_hint" :max="4" v-model ="verificationcode" placeholder="请输入验证码">
          <button slot="right" v-model="type" v-if="true" class="recode">获取验证码</button>
        </x-input>
      </group>
      <button class="login">{{text}}</button>
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
  .verificationcode{
    width:90vw;
    margin-left:5vw;
  }
  .phone_record{
    border-radius: 3px;
    font-size: 0.32rem;
    color: #999999;
    height: 3rem;
    margin: 0 0.46rem;
    padding:0 0.46rem;
  }
  .verificationcode_hint{
    font-size: 0.32rem;
  }
  .recode{
    outline: none;
    font-size: 0.28rem;
    color: #71A061;
    height: 1.7rem;
    width: 4.86rem;
    border:solid 1px  #71a061;
    border-radius: 2px;
    background: white;
    margin-right: -0.1rem;
  }
  .login{
    border: none;
    background: #71a061;
    font-size: 0.4rem;
    color: #ffffff;
    border-radius: 2px;
    height: 3rem;
    margin: 0 0.46rem;
    width: 90vw;
  }
</style>