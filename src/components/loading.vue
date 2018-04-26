<template>
 	<div class="loading" v-show="isShow">
 		<img src="../assets/imgs/loading.gif" alt="" />
 	</div>
</template>

<script>
export default {
	computed:{
		isShow(){
			return this.$store.state.loadingStatus
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.loading{
		position:fixed;
		padding:10px;
		left:50%;
		top:50%;
		transform:translate(-50%,-50%);
		z-index:9999;
		background:rgba(0,0,0,.7);
		border-radius: 5px;
	}
	.loading img{
		width:40px;
		height:40px;
	}
</style>
