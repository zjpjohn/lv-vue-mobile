<template>
  <div>
      组件或者代码demo功能测试
      <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">{{item}} Container</div>
        </swiper-item>
      </swiper>
      <div class="box">
        <x-button @click.native="index=0" :disabled="index === 0" type="primary">go to 0</x-button>
        <x-button @click.native="index=1" :disabled="index === 1" type="primary">go to 1</x-button>

        <x-button @click.native="addTab" :disabled="list2.length === 5" type="primary">Add tab item</x-button>
        <x-button @click.native="removeTab" :disabled="list2.length <= 2" type="primary">Remove tab item</x-button>
        <x-button @click.native="next" type="primary">Active next current: {{index}}</x-button>
        <x-button @click.native="prev" type="primary">Active prev current: {{index}}</x-button>
      </div>
  </div>
</template>
<script>
  import { Tab, TabItem, Swiper, SwiperItem, XInput, Group, XButton, Toast, XHeader, Search, Countdown } from 'vux'
  const list = () => ['精选', '美食', '电影', '酒店', '外卖']
  export default {
    components: {
      Tab, TabItem, Swiper, SwiperItem, XInput, Group, Toast, XHeader, Search, Countdown,Toast,XButton
    },
    data() {
      return {
        list2: list(),
        demo2: '',
        index:0,
        text: '测试'
      }
    },
    mounted() {

    },
    methods: {
      //测试方法
      test () {
        
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/center.less';
  * { touch-action: none; }
  
</style>