<template>
	<div>
		<el-row>
			<el-col :xs="2" :sm="2" :md="3" :lg="3"><div class="grid-content"></div></el-col>
		  	<el-col :xs="20" :sm="20" :md="18" :lg="18" class="content" v-loading="loading" element-loading-background="rgba(255, 255, 255, 0.4)">
				<div class="title">
					{{details.title}}
					<i class="hidden-xs-only">发表于{{ToDate.getYmdHms(details.time)}}</i>
					<i class="hidden-sm-and-up">发表于{{ToDate.getYmd(details.time)}}</i>
				</div>
				<p class="main">{{details.main}}</p>
				<div :class="['details',backgroundColor]" v-html="details.content"></div>
			</el-col>
			<el-col :xs="2" :sm="2" :md="3" :lg="3"><div class="grid-content"></div></el-col>
		</el-row>
	</div>
</template>

<script>
import {ToDate} from '../utils/public'
import { mapState } from 'vuex'
export default {
  name: 'articleDetails',
  props:{
	id:{
      type: String,
      value: ''
    },
  },
  data () {
    return {
      loading:false,
      details:{
      	content:'',
      	main:'',
      	time:'',
      	title:'',
      },
      ToDate:ToDate
    }
  },
  computed:{
	...mapState({
		backgroundColor: state => 'fwhf' + state.background.bjColor.split('#')[1]
	})
  },
  created(){
  	console.log(this.backgroundColor)
  	if(this.id != ''){
  		this.getDetails(this.id)
  	}
  },
  methods:{
  	getDetails(id){
  		this.loading = true;
  		this.$api({
			url:'/details',
			data:{
				id
			}
		})
		.then((res)=>{
  			this.loading = false;
			this.$message({
	          message: '查询成功',
	          type: 'success'
	      	});
	      	this.details = res.result;
		})
		.catch((data)=>{
			this.$message({
	          message: '查询失败，请重试',
	          type: 'error'
	       	});
  			this.loading = false;
		})
  	}
  },
  watch:{
  	id(val,oldVal){
  		if(val != oldVal && val != ''){
  			this.getDetails(val)
  		}
  	}
  }
}
</script>

<style scoped>
.content{
	min-height:1300px;
}
.title{
	font-size:20px;
	font-weight: bold;
}
.title i{font-style:normal;float:right;font-size:12px;font-weight:normal;padding-top:10px;}
.main{font-size:14px;padding:10px 0;}
.content div{padding-top:20px;font-size:14px;}
p{padding:10px 0;font-size:14px;}
.details >>>p{padding:10px 0;font-size:14px;}
.details >>>img{width:200px;}
.fwhfC7EDCC >>>main{background:rgba(199, 237, 204,0.8)}
.fwhfFFFFFF >>>main{background:rgba(255, 255, 255,0.8)}
.fwhfFAF9DE >>>main{background:rgba(250, 249, 222,0.8)}
.fwhfFFF2E2 >>>main{background:rgba(255, 242, 226,0.8)}
.fwhfFDE6E0 >>>main{background:rgba(253, 230, 224,0.8)}
.fwhfE3EDCD >>>main{background:rgba(227, 237, 205,0.8)}
.fwhfDCE2F1 >>>main{background:rgba(220, 226, 241,0.8)}
.fwhfE9EBFE >>>main{background:rgba(233, 235, 254,0.8)}
.fwhfEAEAEF >>>main{background:rgba(234, 234, 239,0.8)}
.fwhftransparent >>>xmp{background:transparent}
.details >>>main br{margin:5px 0;}
.details >>>xmp{margin:0;padding:0 6px 10px;font-size:14px;white-space: pre-wrap;white-space: -moz-pre-wrap;white-space: -pre-wrap;white-space: -o-pre-wrap;word-wrap: break-word;}
</style>