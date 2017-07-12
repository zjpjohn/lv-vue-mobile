<template>
  <div>
      <span>{{text}}</span>
  </div>
</template>
<script>
  export default {
    components: {
      
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
<style scoped>
</style>