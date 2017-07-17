<template>
	<div class="index-bottom">
        <ul class="bottom-ul">
          <li @click="toMainPage"><img slot="icon" src="~img/Index/u363.png"/></li>
          <li @click="toPersonPage"><img slot="icon" src="~img/Index/u365.png"/></li>
          <li @click="toShoppingCart"><img slot="icon" src="~img/Index/u367.png"/></li>
        </ul>
    </div>
</template>

<script>
	export default {
	  name: 'footer',
	  data () {
	    return {
	      msg: ''
	    }
	  },
	  methods: {
	      toMainPage () {
            this.$router.push({ path:'/' }) ;
          },
          toPersonPage () {
            this.$router.push({ path:'/personCenter' }) ;
          },
          toShoppingCart () {
            this.$router.push({ path:'/shoppingCart' }) ;
          }
	  },
	  components: {
	  }
	}
</script>
<style scoped>
  .index-bottom{
    position:fixed;
    bottom:0;
    width:100%;
    height:2rem;
    background-color:rgba(33,33,33,.1);
  }
  .bottom-ul{
    width:100%;
  }
  .bottom-ul > li{
    height:2rem;
    float:left;
    width:33%;
    line-height:2rem;
  }
  .bottom-ul > li > img {
    width:2rem;
    height:2rem;
  }
</style>