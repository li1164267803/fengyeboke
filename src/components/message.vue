<template>
	<el-row>
		<el-col :xs="2" :sm="2" :md="3" :lg="3"><div class="grid-content"></div></el-col>
		<el-col :xs="20" :sm="20" :md="18" :lg="18">
				<div v-loading="insLoading">
					<el-input
					  type="textarea"
					  :autosize="{ minRows: 4, maxRows: 6}"
					  placeholder="请输入留言内容"
					  v-model="textarea">
					</el-input>
					<div class="fromInput hidden-xs-only">
						<el-button type="primary" class="code" @click="getYzm"><canvas width=60 height=30 title="点击换一张" ref="canvas"></canvas></el-button>
						<el-input placeholder="请输入验证码" v-model="code"></el-input>
						<el-input placeholder="请输入留言名" v-model="name"></el-input>
						<el-button type="primary" class="code" @click="insMessage">发表留言<i class="el-icon-position el-icon--right"></i></el-button>
					</div>
					<div class="hidden-sm-and-up">
						<div class="fromInput">
							<el-button type="primary" class="code" @click="getYzm"><canvas width=60 height=30 title="点击换一张" ref="canvas2"></canvas></el-button>
							<el-input placeholder="请输入验证码" v-model="code"></el-input>
						</div>
						<div class="fromInput">
							<el-input placeholder="请输入留言名" v-model="name"></el-input>
							<el-button type="primary" @click="insMessage">发表留言<i class="el-icon-position el-icon--right"></i></el-button>
						</div>
					</div>
				</div>
				<div v-loading="loading" class="smHeight hidden-xs-only">
					<div v-for="(item,index) of messageList" :key="index" class="messageItem">
						<div class="messageItemName">{{item.uname}}</div>
						<div class="messageItemText">
							{{item.text}}
							<span class="messageItemTime">{{ToDate.getYmdHms(item.time)}}</span>
						</div>
					</div>
					<el-pagination
				      class="pageCode"
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
				</div>
				<div v-loading="loading" class="xsHeight hidden-sm-and-up">
					<div v-for="(item,index) of messageList" :key="index" class="messageItem">
						<div class="messageItemName">{{item.uname}}</div>
						<div class="messageItemText">
							{{item.text}}
							<span class="messageItemTime">{{ToDate.getYmd(item.time)}}</span>
						</div>
					</div>
					 <el-pagination
				      class="pageCodeXs"
				      @current-change="handleCurrentChange"
				      :hide-on-single-page="hidePageCode"
					  :page-size="10"
      				  :current-page="currentPage"
  					  :background="true"
  					  :pager-count="5"
					  layout="prev, pager, next"
					  :total="count">
					</el-pagination>
				</div>
		</el-col>
		<el-col :xs="2" :sm="2" :md="3" :lg="3"><div class="grid-content"></div></el-col>
	</el-row>
</template>

<script>
import {Rand,ToDate} from '../utils/public'
export default {
  name: 'fwhfLink',
  data () {
    return {
    	textarea:'',
    	code:'',
    	name:'',
    	codeArr:[],
    	messageList:[],
    	count:0,
    	insLoading:false,
    	loading:false,
    	hidePageCode:false,
    	currentPage:1,
		ToDate:ToDate,
    }
  },
  created(){
  	this.selMessage(1);
  },
  mounted(){
  	this.getYzm();
  },
  methods:{
  	getYzm(){
  		var canvas = this.$refs.canvas;
		var context = canvas.getContext('2d');
		context.clearRect(0,0,60,30);
		this.codeArr = [Rand(0,9),Rand(0,9),Rand(0,9)];
		
		context.fillStyle = "rgb(222,222,222,0)";
		context.fillRect(0,0,60,30);
		
		context.beginPath();
		context.font = '15px Arial';
		context.fillStyle = "rgb(255,255,255)"
		for(var i = 0 ; i < this.codeArr.length ; i++){
			context.fillText(this.codeArr[i], Rand(i*16,(i+1)*16), Rand(15,25));
			context.fill();
		}
		context.closePath();
		
		var canvas2 = this.$refs.canvas2;
		var context2 = canvas2.getContext('2d');
		context2.clearRect(0,0,60,30);
		
		context2.fillStyle = "rgb(222,222,222,0)";
		context2.fillRect(0,0,60,30);
		
		context2.beginPath();
		context2.font = '15px Arial';
		context2.fillStyle = "rgb(255,255,255)"
		for(var i = 0 ; i < this.codeArr.length ; i++){
			context2.fillText(this.codeArr[i], Rand(i*16,(i+1)*16), Rand(15,25));
			context2.fill();
		}
		context2.closePath();
	},
	selMessage(pageIndex){
		this.loading = true;
		this.$api({
			url:'/selMessage',
			data:{
				pageIndex
			}
		})
		.then((res)=>{
			this.$message({
	          message: '留言列表查询成功',
	          type: 'success'
	       	});
			this.messageList = res.result;
			this.count = res.result1;
			this.loading = false;
			if(this.count <= 10){
				this.hidePageCode = true
			}
		})
		.catch((data)=>{
			this.$message({
	          message: '留言列表查询失败，请重试',
	          type: 'error'
	       	});
			this.loading = false;
		})
	},
	insMessage(){
		if(this.code == this.codeArr.join('')){
			this.insLoading = true;
			this.$api({
				url:'/insMessage',
				data:{
					'uname':this.name,
					'text':this.textarea
				}
			})
			.then((res)=>{
				this.$message({
		          message: '留言成功，请下滑查看',
		          type: 'success'
		       	});
				this.insLoading = false;
				this.currentPage = 1;
				this.selMessage(1);
			})
			.catch((data)=>{
				this.$message({
		          message: '留言失败，请重试',
		          type: 'error'
		       	});
				this.insLoading = false;
			})
		}else{
			this.$message({
	          message: '验证码不正确，请核实',
	          type: 'error'
	       	});
		}
	},
	handleCurrentChange(val) {
		this.currentPage = val;
		this.selMessage(val);
	},
  }
}
</script>

<style scoped>
.fromInput{
	padding-top:10px;
	display: flex;
	justify-content: flex-end;
}
.fromInput .el-input{
	width:120px;	
}
.code{
	padding:0 10px;
}
.pageCode{
	margin:20px 0;
	text-align: right;
}
.pageCodeXs{
	margin:20px 0;
	text-align: center;
}

.messageItem{
	background: rgb(244,244,244,0.6);
	margin:20px 0;
	min-height: 80px;
	border-bottom:1px solid rgb(222,222,222);
}
.messageItemName{
	font-size:14px;
	font-weight: bold;
	height: 30px;
	line-height:30px;
	padding-left:20px;
}
.messageItemText{
	font-size:14px;
	position:relative;
	height: 50px;
	padding-left:40px;
	padding-right:76px;
}
.messageItemTime{
	font-size:12px;
	position:absolute;
	bottom:10px;
	right:10px;
}
.smHeight{
	min-height: 1100px;
}
.xsHeight{
	min-height: 600px;
}
</style>