<template>
	<div>
      <h1 class="person-center-style">{{msg}}</h1>  
      <div @click="personalInfo" class="pick-name">
        <img src="~img/Index/u4238.png" alt="个人照片" class="personal-img" >
        <span>{{pickName}}</span>
      </div>
  </div>
</template>

<script>
	export default {
	  name: 'personCenter',
	  data () {
	    return {
	      msg: '个人中心',
        pickName : '昵称XXX'
	    }
	  },
	  methods: {
      personalInfo (){
        this.$router.push({ path:'/personalInfo' }) ;
      }
	  },
	  components: {
	  }
	}
</script>
<style scoped>
  * { touch-action: none; }
  .person-center-style{
    position:absolute;
    top:0;
    width:100vw;
    font-family:'微软雅黑 Regular', '微软雅黑';
    font-weight:400;
    font-style:normal;
    font-size:1.1rem;
    color:rgba(0,0,0);
  }
  .pick-name{
    width:100%;
    height:4rem;
  }
  .pick-name > span{
    float:left;
    line-height:4rem;
    margin-left:1rem;
  }
  .personal-img{
    width:3rem;
    height:3rem;
    float:left;
    margin-top:.5rem;
    margin-left:1rem;
  }
</style>