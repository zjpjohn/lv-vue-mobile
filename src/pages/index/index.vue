<template>
  <div class="index-container">
      <h1 class="index-title">{{text}}</h1>
      <tab class="index-tab">
        <tab-item>首页</tab-item>
        <tab-item>寻物记</tab-item>
        <tab-item @on-item-click="classify">分类</tab-item>
      </tab>
      <swiper :list="demoImg" auto style="width:100%;margin:0 auto;" height="10rem" dots-position="center">
      </swiper>
      <grid>
        <grid-item label="幸福定制">
          <img slot="icon" src="~img/Index/u78.png">
        </grid-item>
        <grid-item label="幸福特推">
          <img slot="icon" src="~img/Index/u83.png">
        </grid-item>
        <grid-item label="幸福优选">
          <img slot="icon" src="~img/Index/u88.png">
        </grid-item>
      </grid>
      <div class="unit-container">
        <span class="center-align">——品牌直供——</span>
        <img slot="icon" src="~img/Index/u61.jpg" class="a-city-a-flavour"/>
        <img slot="icon" src="~img/Index/u59.jpg" class="happiness-granary"/>
        <img slot="icon" src="~img/Index/u63.jpg" class="four-seasons-fruit"/>
      </div>
      <div class="unit-container">
        <span class="center-align">——寻物记精选——</span>
        <img class="find-selection" src="~img/Index/u101.jpg" alt="寻物记精选"/>
        <h2 style="font-weight: 100;">一粒好米的幸福之路</h2>
        <p><span class="find-selection-text-align">当人真正开始留意自己所吃的食物时，麻烦就来了。比如大米，好的大米在哪里？</span></p>
      </div>
  </div>
</template>
<script>
  import { Tab, TabItem, Swiper, SwiperItem, XInput, Group, XButton, Toast, XHeader, Search, Countdown , Grid, GridItem  } from 'vux'
  import u55 from 'img/Index/u55.png' ;
  import u57 from 'img/Index/u57.jpg' ;
  import u59 from 'img/Index/u59.jpg' ;
  const imgList = [u55,u57,u59] ;
  const demoList = imgList.map((one, index) => ({
    url: 'javascript:',
    img: one
  }))
  export default {
    components: {
      Tab, TabItem, Swiper, SwiperItem, XInput, Group, Toast, XHeader, Search, Countdown,Toast, Grid, GridItem
    },

    data() {
      return {
        text: '商城',
        demoImg:demoList
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
  .unit-container{
    position:relative;
    background-color:#fff;
    width:100vw;
    height:16rem;
  }
  .center-align{
    width:100vw;
    display:block;
  }
  .a-city-a-flavour{
    float:left;
    width:42.5%;
    height:13.5rem;
    margin-left:5%;
  }
  .happiness-granary{
      float:right;
      width:42.5%;
      height:6.5rem;
      margin-right:5%;
  }
  .four-seasons-fruit{
    float:right;
    width:42.5%;
    height:6.5rem;
    margin-right:5%;
    margin-top:1rem;
  }
  .find-selection{
    width:100vw;
    height:16rem;
  }
  .find-selection-text-align{
    text-align:left;
    float:left;
    margin:.5rem 1rem;
    font-family: 'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    color:#999;
  }
</style>