<template>
  	<header class="header">
  		<img @click="toIndex" class="logoImg" src="../assets/imgs/logo.png" alt="" />
  		<div @click="changeifShow" class="close">
  			<span class="close-icon" :class="{open:ifShow}"></span>
  		</div>
  		<transition name="leftSide">
  			<div v-if="ifShow" class="menu">
	  			<ul>
	  				<router-link exact active-class="active" @click.native="changeifShow" to="/" tag="li">首页</router-link>
	  				<router-link exact active-class="active" @click.native="changeifShow" to="/jobtitle/1" tag="li">技术类</router-link>
	  				<router-link exact active-class="active" @click.native="changeifShow" to="/jobtitle/2" tag="li">产品类</router-link>
	  				<router-link exact active-class="active" @click.native="changeifShow" to="/jobtitle/3" tag="li">设计类</router-link>
	  				<router-link exact active-class="active" @click.native="changeifShow" to="/introCom" tag="li">公司介绍</router-link>
	  				<!--<router-link to=""></router-link>-->
	  				<!--<li>首页</li>
	  				<li>公司介绍</li>
	  				<li>个人中心</li>
	  				<li>登录</li>-->
	  			</ul>
	  		</div>
  		</transition>
  		<div @click="changeifShow" v-if="ifShow" class="menu-mask mask-transition"></div>
  	</header>
</template>

<script>
export default {
	data(){
		return {
			ifShow:false
		}
	},
	methods:{
		toIndex(){
			this.$router.push('/');
		},
		changeifShow(){
			this.ifShow = !this.ifShow;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*由于样式优先级的问题，先前把.leftSide放在前面了，然后出现了错误的展示效果，注意优先级顺序*/
.menu {
    position: fixed;
    z-index: 1000;
    width: 215px;
    top: 60px;
    right: 0;
    bottom: 0;
    background-color: #fff;
    padding: 10px 0 0 25px;
    box-sizing: border-box;
}
.menu ul li {
    height: 45px;
    line-height: 45px;
    color: #333;
    font-size: 16px;
    border-bottom: 1px solid #eee;
}
.menu-mask {
    position: fixed;
    z-index: 999;
    top: 60px;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.4);
}
.menu .active {
    color: #26a2ff;
}
.leftSide-enter{
	right:-215px;
}
.leftSide-enter-to{
	right:0px;
}

.leftSide-enter-active,.leftSide-leave-active{
	transition:right .5s;
}

.leftSide-leave{
	right:0;
}
.leftSide-leave-to{
	right:-215px;
}
</style>
