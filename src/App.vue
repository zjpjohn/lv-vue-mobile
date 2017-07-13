<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='less'>
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import './less/public';
html,body {
  max-width: 640px;
  margin: 0 auto;
  background-color: #f5f5f5;
  .weui-tabbar {
    position: fixed;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .1s ease-in;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
