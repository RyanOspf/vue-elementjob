<template>
  <div class="jobtitle">
  	<div class="jodes">
  		<div class="jobdetail-title">
  			<h1>{{ jobdes.jobName }}</h1>
	  		<div class="jobdetail-misc smallscreen">
	  			<span>部门: {{ jobdes.jobDep }}</span>
	  			<span>城市: {{ jobdes.jobCity }}</span>
	  			<span>公司: {{ jobdes.jobCom }}</span>
	  			<span>类别: {{ jobdes.jobType }}</span>
	  			<span>发布: {{ jobdes.jobTime }}</span>
	  		</div>
  		</div>
  		<div class="jobdetail-description" >
  			<p>岗位职能</p>
  			<ul>
  				<li v-for="item in jobdes.jobFunction">{{ item }}</li>
  				<!--<li>作为基础设施（Infrastructure）部门的产品经理，负责该部门的需求分析，立项，技术方案设计，项目推动和跟踪，以及结果分析等。该职位能推动整个基础设施部门的发展方向，为公司业务发展提供稳定和高效的运行平台。申请人需要有强自驱力，数据分析能力，团队沟通协调能力，和项目管理能力。技术方面有部门架构师支持，但是要理解技术方案并且推动实施</li>
  				<li>立项阶段：分析产研部门需求、历史事故记录等，通过数据驱动方法，以影响力为最终目标，提出可能项目。然后，跟部门架构师讨论可行方案，分析方案带来影响和需要资源与时间，决定项目优先级</li><li _v-c4b69218="">执行阶段：协调并驱动开发、测试、运维、以及对接产研等多个团队，有目标，有计划，分阶段执行项目。能预知项目风险并提供解决方案，协调解决团队还有项目之间冲突等</li>
  				<li>完结阶段：分析总结项目完成情况，量化衡量结果，是否达到预期目标，合理评估团队成员贡献。对团队成员还有其他合作团队有效提供反馈</li>-->
  			</ul>
  		</div>
  		<div class="jobdetail-description">
  			<p>岗位要求</p>
  			<ul>
  				<li v-for="item in jobdes.jobRequire">{{ item }}</li>
  				<!--<li>2-3 年中后台产品开发、测试、运维、或者管理经验</li>
  				<li>较强逻辑思维能力和想象力，善于抽象简化复杂问题；善于系统性思考并使用创新性思维解决问题；学习能力强</li>
  				<li>强自驱力，强进取心，有较强的抗压能力</li>
  				<li>优秀的沟通和团队协作能力；沟通简单准确，人际交往能力强</li>
  				<li>具备以下条件者加分： 熟悉主流中间件如缓存（redis），数据库（mysql）；有创业经验 ；有管理经验。</li>-->
  			</ul>
  		</div>
  	</div>
  	<footer class="footer"> 
  		<div class="jobdetail-apply">
  			<p>申请职位</p>
  		</div>
  	</footer>
  </div>
</template>

<script>
export default {
	data(){
		return {
			jobdes:{}
		}
	},
	beforeCreate(){
		this.$store.commit('loadingShow');
		if(this.$route.name === 'JobDes'){
			document.title = '北斗星招聘-职位详情';
		}
	},
	created(){
		this.$http.get(this.urlLink+'jobDescribe#!method=get').then((res)=>{
			this.jobdes = res.data.filter((item,index)=>{
				return item.id == this.$route.query.jobid;
			})[0].jobDes;
			
			this.$store.commit('loadingHide');
			
		}).catch((error)=>{
			console.log(error);			
		});
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
