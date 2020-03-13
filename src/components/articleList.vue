<template>
	<div>
		<el-row>
			<el-col :xs="2" :sm="2" :md="3" :lg="3"><div class="grid-content"></div></el-col>
		  	<el-col :xs="20" :sm="20" :md="18" :lg="18" v-if="list.length" v-loading="loading" element-loading-background="rgba(255, 255, 255, 0.4)">
				<el-row v-for="(item,index) of list" :key="index" :data-id="item._id" class="list" @click.native="goDetails">
					<el-col :xs="0" :sm="5" :md="5" :lg="4" class="hidden-xs-only">
						<el-image
					      style="width: 100px; height: 100px"
					      :src="item.imgUrl"
					      fit="scale-down"
					      lazy>
					    	<div slot="error" class="image-slot">
						        <el-image
							      style="width: 100px; height: 100px"
							      src="../assets/loding.jpg">
							    </el-image>
						    </div>  
					    </el-image>
					</el-col>
					<el-col :xs="16" :sm="16" :md="16" :lg="16">
						<div class="list_content">
							<div class="list_content_title">{{item.title}}</div>
							<div class="list_content_main">{{item.main}}</div>
						</div>
					</el-col>
					<el-col :xs="8" :sm="3" :md="3" :lg="4" class="relative">
						<div class="time hidden-md-and-down">{{ToDate.getYmdHms(item.time)}}</div>
						<div class="time hidden-lg-and-up">{{ToDate.getYmd(item.time)}}</div>
					</el-col>
				</el-row>
				<div>
				    <el-pagination
				      class="pageCode hidden-xs-only "
				      @current-change="handleCurrentChange"
				      current-page.sync="5"
				      :hide-on-single-page="hidePageCode"
				      :page-size="10"
      				  :current-page="currentPage"
				      :background="true"
				      layout="prev, pager, next, jumper"
				      :total="count"
				      >
				    </el-pagination>
				    <el-pagination
				      class="pageCodeXs hidden-sm-and-up"
				      @current-change="handleCurrentChange"
				      :hide-on-single-page="hidePageCode"
					  :page-size="10"
      				  :current-page="currentPage"
  					  :pager-count="5"
  					  :background="true"
					  layout="prev, pager, next"
					  :total="count">
					</el-pagination>
				</div>
				<el-row v-for="(item,index) of (10-list.length)" :key="index+10" class="listDiv"></el-row>
			</el-col>
			<el-col :xs="20" :sm="20" :md="18" :lg="18" v-if="list.length == 0">
				<el-row v-for="(item,index) of 10" :key="index" class="list">
					<el-col :xs="0" :sm="5" :md="5" :lg="4" class="hidden-xs-only bg-purple-light">
				    	<div class="bg-image bg-purple">
					    </div>
					</el-col>
					<el-col :xs="16" :sm="16" :md="16" :lg="17" class="bg-purple-light">
						<div class="bg-purple-content">
							<div class="bg-purple-content-title bg-purple"></div>
							<div class="bg-purple-content-main bg-purple"></div>
						</div>
					</el-col>
					<el-col :xs="8" :sm="3" :md="3" :lg="3" class="bg-purple-light relative"><div class="bg-purple-time bg-purple"></div></el-col>
				</el-row>
				<div class="relative">
				      <div class="pageCode bg-purple-light bg-purple-light-pageCode"></div>
				</div>
			</el-col>
			<el-col :xs="2" :sm="2" :md="3" :lg="3"><div class="grid-content"></div></el-col>
		</el-row>
	</div>
</template>

<script>
import {ToDate} from '../utils/public'
export default {
  name: 'articleList',
  props:{
  	listType:{
      type: String,
      value: '99'
    },
    appointValue:{
      type: String,
      value: ''
    },
  },
  data () {
    return {
		list:[],
		selectOrSearch:true,//默认select查询
		count:0,
		currentPage:1,
		ToDate:ToDate,
		loading: false,
		hidePageCode:false
    }
  },
  created(){
	if(['0','1','2','3','4','5','6','99'].indexOf(this.listType) != -1){
		this.getList(this.listType , 1)
	}
	if(this.listType == 98){
		this.selectOrSearch = false
		this.searchList(this.appointValue , 1)
	}
  },
  methods:{
  	test(){
  		console.log(666)
  	},
  	getList(type,pageIndex){
  		this.loading = true;
  		this.$api({
			url:'/select',
			data:{
				pageIndex,
				type
			}
		})
		.then((res)=>{
			this.$message({
	          message: '查询成功',
	          type: 'success'
	       	});
  			this.loading = false;
			this.list = res.result;
			this.count = res.result2;
			if(this.count <= 10){
				this.hidePageCode = true
			}
		})
		.catch((data)=>{
			this.$message({
	          message: '查询失败，请重试',
	          type: 'error'
	       	});
  			this.loading = false;
		})
  	},
  	searchList(value,pageIndex){
		this.loading = true;
  		this.$api({
			url:'/search',
			data:{
				pageIndex:pageIndex,
				text:value
			}
		})
		.then((res)=>{
  			this.loading = false;
  			if(res.ok === -1){
  				this.$message({
		          message: '无查询结果',
		          type: 'warning'
		       });
  			}else{
				this.$message({
		          message: '查询成功',
		          type: 'success'
		       	});
  				this.list = res.result;
				this.count = res.result2;
				if(this.count <= 10){
					this.hidePageCode = true
				}		
  			}
		})
		.catch((data)=>{
			this.$message({
	          message: '查询失败，请重试',
	          type: 'error'
	       	});
  			this.loading = false;
		})
  	},
	handleCurrentChange(val) {
		this.currentPage = val;
		if(this.selectOrSearch){
			this.getList(this.listType , val)
		}else{
			this.searchList(this.appointValue , val)
		}
	},
	goDetails(e){
		let id = '';
		for(let i = 0 ; i < e.path.length ; i++){
			if(e.path[i].dataset.id){
				id = e.path[i].dataset.id;
				break;
			}
		}
		if(id === ''){
			return;
		}
		this.$emit('changeDetailsId',id)
	}
  },
  watch:{
  	listType(val,oldVal){
  		console.log(val,3123)
  		if(val != oldVal && val != 98){
  			this.selectOrSearch = true;
  			this.currentPage = 1;
  			this.getList(this.listType , 1)
  		}
  	},
  	appointValue(val,oldVal){
  		if(val != oldVal){
  			this.selectOrSearch = false;
  			this.currentPage = 1;
			this.searchList(val , 1)
  		}
  	},
  }
}
</script>

<style scoped>
.list{
	display:flex;
	justify-content: space-between;
	margin-bottom:20px;
}
.listDiv{
	height:130px;
}
.list_content{
	text-align: left;
}
.list_content_title{
	white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
	padding-top:20px;
	font-weight: bold;
	font-size:16px;
}
.list_content_main{
	white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
	padding-top:10px;
	font-size:14px;
}
.relative{
	position:relative;
}
.time{
	font-size:12px;
	position:absolute;
	bottom:10px;
	right:0px;
}
.bg-purple-light{
	height:100px;
}
.bg-image{
	width:100px;
	height:100px;
}
.bg-purple-content{
	/*float:left;*/
	
}
.bg-purple-content-title{
	margin-top:20px;
	height:20px;
	width:60%;
}
.bg-purple-content-main{
	height:20px;
	width:80%;
	margin-top:10px;
}
.bg-purple-time{
	position:absolute;
	bottom:0px;
	right:10px;
	width:60%;
	height:16px;
}

.pageCode{
	margin:20px 0;
	text-align: right;
}
.pageCodeXs{
	margin:20px 0;
	text-align: center;
}
.bg-purple-light-pageCode{
	height:20px;
	width:40%;
	float:right;
}
</style>