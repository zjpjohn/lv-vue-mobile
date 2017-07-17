<template>
	<div>
        <!--顶部搜索模块-->
        <div v-show=!detailshow class = "topdetail">
          <div @click="" class="detailsearchtext">
            <img src ="~img/Index/u268.png" class = "search-img">
            <span style="padding-left: 1rem;font-size: 14px;">秋田小町</span>
          </div>
        </div>
        <ul class="classify-ui">
          <li v-for="list in lists">{{list}}</li>
        </ul>
        <div class="classify-container">
          <img class="recommend-img" src="~img/Index/u271.jpg" alt="">
          <x-table :cell-bordered="false" class="classify-table">
            <tbody>
              <tr v-for="i in 4">
                <td v-for="j in 3">
                  <div><img src ="~img/Index/u273.png"></div>
                  {{itemName}}
                </td>
              </tr>
            </tbody>
          </x-table>
        </div>
	</div>
</template>

<script>
    import { Tab, TabItem, Swiper, SwiperItem, XInput, Group, XButton, Toast, XHeader, Search, Countdown , Grid, GridItem , XTable } from 'vux'
	export default {
	  name: 'classifyPage',
	  data () {
	    return {
	      msg: '',
        lists:['服装配饰','生鲜果蔬','粮油副食','食品酒饮','到家服务','个护化妆',
        '特色旅游'],
        itemName: '子分类' ,
        detailshow: false
	    }
	  },
	  methods: {
	      
	  },
	  components: {
        Tab, TabItem, Swiper, SwiperItem, XInput, Group, Toast, XHeader, Search, Countdown,Toast, Grid, GridItem,XTable
	  }
	}
</script>
<style scoped>
    .topdetail{
        height: 1.3rem;
        width:100%;
        position: absolute;
        top: 5.5rem;
        z-index: 2;
    }
    .detailsearchtext{
        border-radius: 0.3rem;
        position: absolute;
        top:0.15rem;
        right: 1rem;;
        left: 0.28rem;
        height: 2rem;
        background-color: rgba(229, 229, 229, 1);
        vertical-align: middle;
        line-height: 2rem;
        font-size: 20px;
        overflow: hidden;
    }
    .search-img{
        display: block;
        position: absolute;
        height: 1rem;
        width: 1rem;
        top: 0.54rem;
        left: 0.25rem;
    }
    .classify-ui{
        width:25%;
        position:absolute;
        top:8.5rem;
        float:left;
        border-top:1px solid;
        border-color:rgba(229, 229, 229, 1);
    }
    .classify-ui > li{
        margin:1rem 0;
        font-size:.8rem;
    }
    .classify-container{
        width:70%;
        height:30rem;
        position:absolute;
        left:25%;
        top:8.5rem;
        border-top:1px solid;
        border-left:1px solid;
        border-color:rgba(229, 229, 229, 1);
    }
    .recommend-img{
        width:100%;
        height:5rem;
        padding:2.5%;
    }
    .classify-table{
        width:100%;
        left:2.5%;
        background-color:#fff;
    }
    .vux-table td:before{
        border-bottom:0;
    }
</style>