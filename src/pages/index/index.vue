<template>
  <div class="index-container">
      <h1 class="index-title">{{text}}</h1>
      <tab class="index-tab"  :line-width=2 active-color='#993333' v-model="index">
        <tab-item class="vux-center" :selected="indexTab === item" v-for="(item, index) in tabList" @click="indexTab = item" :key="index">{{item}}</tab-item>
      </tab>  
      <div v-if="0 === index">
        <indexPage></indexPage>
      </div>
      <div v-if="1 === index">
        <searchSelection></searchSelection>
      </div>
      <div v-if="2 === index">
        <classifyPage></classifyPage>
      </div>
  </div>
</template>
<script>
  import { Tab, TabItem, Swiper, SwiperItem, XInput, Group, XButton, Toast, XHeader, Search, Countdown , Grid, GridItem , XTable } from 'vux'
  import indexPage from 'components/indexPage/indexPage'
  import searchSelection from 'components/searchSelection/searchSelection'
  import classifyPage from 'components/classifyPage/classifyPage'
  import u55 from 'img/Index/u55.png' ;
  import u57 from 'img/Index/u57.jpg' ;
  import u59 from 'img/Index/u59.jpg' ;
  const tabList = () => ['首页', '寻物记', '分类']
  export default {
    components: {
      Tab, TabItem, Swiper, SwiperItem, XInput, Group, Toast, XHeader, Search, Countdown,Toast, Grid, GridItem,XTable,indexPage,searchSelection,classifyPage
    },

    data() {
      return {
        text: '商城',
        tabList : tabList() ,
        indexTab : '' ,
        index:0
      }
    },
    mounted() {

    },
    methods: {
      //测试
      test () {
        
      },
      //分类
      classify () {
        console.log("this is classify ...") ;
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
  .index-tab{
    margin-top:-2em;
  }
</style>