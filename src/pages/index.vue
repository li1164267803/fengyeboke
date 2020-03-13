<template>
	<div>
		<fwhfHead class="fwhfHead" :listType="listType" :appointValue='appointValue' @changeRouter="changeRouter" @changeAppointValue="changeAppointValue"></fwhfHead>
		<keep-alive>
			<component :is="currentView" :id="id" :listType="listType" :appointValue='appointValue' class="fwhfContent" @changeDetailsId="changeDetailsId"></component>
		</keep-alive>
		<fwhfFoot></fwhfFoot>
	</div>
</template>

<script>
import fwhfHead from '@/components/head'
import articleList from '@/components/articleList'
import background from '@/components/background'
import Link from '@/components/link'
import message from '@/components/message'
import articleDetails from '@/components/articleDetails'
import fwhfFoot from '@/components/foot'
export default {
  name: 'index',
  components:{
  	fwhfHead,fwhfFoot,articleList,background,Link,message,articleDetails
  },
  data () {
    return {
		listType:'99',
		appointValue:'',
		currentView:'articleList',
		id:''
    }
  },
  created(){
  	if(this.$route.name == 'index'){
  		if(this.$route.query.type !== undefined){
  			this.currentView = 'articleList';
  			if(['0','1','2','3','4','5','6','7','8','9','97','98'].indexOf(this.$route.query.type) == -1){
				this.$router.replace({name: 'index', query: { type:99 }});
  			}else if(this.$route.query.type == 97){
  				this.currentView = 'articleDetails';
  				this.id = this.$route.query.id;
  			}else if(this.$route.query.type == 98){
  				//search
  				this.listType = this.$route.query.type;
  				this.appointValue = this.$route.query.appointValue;
  			}else{
  				if(this.$route.query.type == 8){
  					this.currentView = 'background';
  				}
  				if(this.$route.query.type == 7){
  					this.currentView = 'Link';
  				}
  				if(this.$route.query.type == 9){
  					this.currentView = 'message';
  				}
  				this.listType = this.$route.query.type;
  			}
  		}
  	}
  },
  methods:{
	changeRouter(type){
		if(type == 99 || (type >= 0 && type <= 9)){
			this.$router.push({name: 'index', query: { type }});
		}
		if(type == 98){
			this.$router.push({name: 'index', query: { type , appointValue:this.appointValue }});
		}
		if(type == 97){
			this.$router.push({name: 'index', query: { type , id:this.id }});
		}
	},
	changeAppointValue(appointValue){
		this.appointValue = appointValue;
		this.changeRouter('98');
	},
	changeDetailsId(id){
		this.id = id;
		this.changeRouter('97');
	}
  },
  watch: {
　　'$route': function (to, from) {
		if(to.query.type == undefined){
			this.listType = '99';
		}else{
			this.listType = to.query.type
		}
		if(this.listType == 99 || (this.listType >= 0 && this.listType <= 9)){
			this.currentView = 'articleList';
			if(this.listType == 8){
				this.currentView = 'background';
			}
			if(this.listType == 7){
				this.currentView = 'Link';
			}
			if(this.listType == 9){
				this.currentView = 'message';
			}
		}
		if(this.listType == 98){
			this.appointValue = to.query.appointValue;
			this.currentView = 'articleList';
		}
		if(this.listType == 97){
			this.id = to.query.id;
			this.currentView = 'articleDetails';
		}
　　}
},

}
</script>

<style scoped>
.fwhfHead{
	padding-top:20px;
	margin-bottom:20px;
}
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .content{
  	
  }
</style>