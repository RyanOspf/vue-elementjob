<template>
  <div class="search" v-show="isShow">
		<input ref="inp" type="text" placeholder="输入职位名称" />
		<img @click="searchJob" src="../assets/imgs/searchIcon.png" alt="" />
	</div>
</template>

<script>
export default {
	data(){
		return {
			isShow:true
		}
	},
	watch:{
		$route(to,from){
			if(to.path === '/jobdes' || this.$route.path === '/introCom'){
				this.isShow = false;
			}else{
				this.isShow = true;
			}
			
			if(to.name != 'Jobtitle'){
				this.$refs.inp.value = '';
			}
			
		}
	},
	created(){
		if(this.$route.path === '/jobdes' || this.$route.path === '/introCom'){
				this.isShow = false;
			}else{
				this.isShow = true;
			}
	},
	methods:{
		searchJob(){
			
			if(this.$route.path === '/jobdes' || this.$route.path === '/introCom'){
				this.isShow = false;
			}else{
				this.isShow = true;
			}
			
			this.$router.push({
				path:'/jobtitle/'+this.$refs.inp.value
			});
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
