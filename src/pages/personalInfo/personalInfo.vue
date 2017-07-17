<template>
	<div>
      <h1 class="person-Info-style">{{msg}}</h1>
      <div class="personal-info-cell">
        <span>{{headPortrait}}</span>
        <img src="~img/Index/u4238.png" alt="个人照片">
      </div>
  </div>
</template>

<script>
	export default {
	  name: 'personCenter',
	  data () {
	    return {
	      msg: '个人资料',
        headPortrait : '头像'
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
  .person-Info-style{
    position:absolute;
    top:0;
    width:100vw;
    font-family:'微软雅黑 Regular', '微软雅黑';
    font-weight:400;
    font-style:normal;
    font-size:1.1rem;
    color:rgba(0,0,0);
  }
  .personal-info-cell > span{
    float:left;
    line-height:3rem;
    margin-left:1rem;
  }
  .personal-info-cell > img{
    height:3rem;
    float:right;
    margin-right:3rem;
  }
</style>