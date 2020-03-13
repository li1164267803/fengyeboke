<template>
	<el-row>
		<el-row class="hidden-xs-only">
			<el-row class="top-name">
				<el-col :xs="4" :sm="2" :md="3" :lg="3"><div class="grid-content"></div></el-col>
				<el-col :xs="4" :sm="20" :md="18" :lg="18">
				  	<el-col :xs="16" :sm="8" :md="8" :lg="8">
				  		<div class="fwhf-name">
				  			风舞红枫<span>的个人博客</span>
				  		</div>
				  	</el-col>
				  	<el-col :xs="16" :sm="8" :md="8" :lg="8"><div class="grid-content"></div></el-col>
				  	<el-col :xs="16" :sm="8" :md="8" :lg="8">
				  		<div>
						  	<el-input placeholder="请输入内容" v-model="input" class="input-with-select">
						  		<el-button slot="append" icon="el-icon-search" @click="appointSelect"></el-button>
						  	</el-input>
						</div>
				  	</el-col>
			  	</el-col>
			  	<el-col :xs="4" :sm="2" :md="3" :lg="3"><div class="grid-content"></div></el-col>
			</el-row>
			<el-row>
				<el-col :xs="4" :sm="2" :md="3" :lg="3"><div class="grid-content"></div></el-col>
			  	<el-col :xs="16" :sm="20" :md="18" :lg="18">
					<!--lg及lg之上显示-->
					<el-menu :default-active="activeIndex" class="el-menu-demo hidden-md-and-down" mode="horizontal" @select="handleSelect">
					  	<el-menu-item index="99">首页</el-menu-item>
					  	<el-menu-item index="0">随笔</el-menu-item>
					  	<el-menu-item index="1">Canvas</el-menu-item>
					  	<el-menu-item index="2">Node</el-menu-item>
					  	<el-menu-item index="3">前端基础</el-menu-item>
					  	<el-menu-item index="4">Vue</el-menu-item>
					 	<el-menu-item index="5">DB</el-menu-item>
					 	<el-menu-item index="6">React</el-menu-item>
					 	<el-menu-item index="7">本站链接</el-menu-item>
					  	<el-menu-item index="8">背景更换</el-menu-item>
					  	<el-menu-item index="9">留言板</el-menu-item>
					</el-menu>
					<!--md显示-->
					<el-menu :default-active="activeIndex" class="el-menu-demo hidden-sm-and-down hidden-lg-and-up" mode="horizontal" @select="handleSelect">
					  	<el-menu-item index="99">首页</el-menu-item>
					  	<el-menu-item index="0">随笔</el-menu-item>
					  	<el-menu-item index="1">Canvas</el-menu-item>
					  	<el-menu-item index="2">Node</el-menu-item>
					  	<el-menu-item index="3">前端基础</el-menu-item>
					  	<el-menu-item index="4">Vue</el-menu-item>
					 	<el-menu-item index="5">DB</el-menu-item>
					 	<el-menu-item index="6">React</el-menu-item>
					 	<el-submenu index="10">
						    <template slot="title">更多</template>
							<el-menu-item index="7">本站链接</el-menu-item>
						    <el-menu-item index="8">背景更换</el-menu-item>
						    <el-menu-item index="9">留言板</el-menu-item>
						</el-submenu>
					</el-menu>
					<!--sm显示-->
					<el-menu :default-active="activeIndex" class="el-menu-demo hidden-md-and-up hidden-xs-only" mode="horizontal" @select="handleSelect">
					  	<el-menu-item index="99">首页</el-menu-item>
					  	<el-menu-item index="0">随笔</el-menu-item>
					  	<el-menu-item index="1">Canvas</el-menu-item>
					  	<el-menu-item index="2">Node</el-menu-item>
					  	<el-menu-item index="3">前端基础</el-menu-item>
					  	<el-menu-item index="4">Vue</el-menu-item>
					 		<el-menu-item index="6">React</el-menu-item>
					 	<el-submenu index="10">
						    <template slot="title">更多</template>
					 		<el-menu-item index="5">DB</el-menu-item>
						    <el-menu-item index="7">本站链接</el-menu-item>
						    <el-menu-item index="8">背景更换</el-menu-item>
						    <el-menu-item index="9">留言板</el-menu-item>
						</el-submenu>
					</el-menu>
				</el-col>
			  	<el-col :xs="4" :sm="2" :md="3" :lg="3"><div class="grid-content"></div></el-col>
			</el-row>
		</el-row>
		<el-row class="hidden-sm-and-up">
			<el-col :xs="1"><div class="grid-content"></div></el-col>
			<el-col :xs="22">
			  	<el-col :xs="4">
					<el-button @click="changeIsCollapse" v-show="isCollapse" type="primary" icon="el-icon-s-unfold"></el-button>
					<el-button @click="changeIsCollapse" v-show="!isCollapse" type="info" icon="el-icon-s-fold"></el-button>
					<el-menu :default-active="activeIndex" class="el-menu-vertical-demo positionMenu" @open="handleOpen" @close="handleClose" @select="handleSelect" :collapse="isCollapse">
					  	<el-menu-item index="99">
						    <i></i>
						    <span slot="title">首页</span>
						</el-menu-item>
						<el-menu-item index="0">
						    <i></i>
						    <span slot="title">随笔</span>
						</el-menu-item>
						<el-menu-item index="1">
						    <i></i>
						    <span slot="title">Canvas</span>
						</el-menu-item>
						<el-menu-item index="2">
						    <i></i>
						    <span slot="title">Node</span>
						</el-menu-item>
						<el-menu-item index="3">
						    <i></i>
						    <span slot="title">前端基础</span>
						</el-menu-item>
						<el-menu-item index="4">
						    <i></i>
						    <span slot="title">Vue</span>
						</el-menu-item>
						<el-menu-item index="5">
						    <i></i>
						    <span slot="title">DB</span>
						</el-menu-item>
						<el-menu-item index="6">
						    <i></i>
						    <span slot="title">React</span>
						</el-menu-item>
						<el-menu-item index="7">
						    <i></i>
						    <span slot="title">本站链接</span>
						</el-menu-item>
						<el-menu-item index="8">
						    <i></i>
						    <span slot="title">背景更换</span>
						</el-menu-item>
						<el-menu-item index="9">
						    <i></i>
						    <span slot="title">留言板</span>
						</el-menu-item>
					</el-menu>
			  	</el-col>
			  	<el-col :xs="8">
			  		<div class="fwhf-name center">风舞红枫</div>
			  	</el-col>
			  	<el-col :xs="12">
			  		<div>
					  	<el-input placeholder="请输入内容" v-model="input" class="input-with-select">
					  		<el-button slot="append" icon="el-icon-search"></el-button>
					  	</el-input>
					</div>
			  	</el-col>
		  	</el-col>
		  	<el-col :xs="1"><div class="grid-content"></div></el-col>
		</el-row>
	</el-row>
</template>

<script>
export default {
  name: 'fwhfHead',
  props:{
  	listType:{
      type: String,
      value: '99'
   	},
    appointValue:{
      type: String,
      value: ''
    }
  },
  data () {
    return {
    	input:'',
    	isCollapse: true,
    	activeIndex: '99',
    }
  },
  created(){
  	this.input = this.appointValue;
  	this.activeIndex = this.listType;
  },
  mounted(){
		$youziku.load(".fwhf-name", "a90b39cf9a6946258c3e6b713c28c253", "cyjianxk");
		$youziku.draw();
  },
  methods:{
  	handleSelect(key, keyPath) {
			this.activeIndex = key;
			this.input = '';
    	this.isCollapse=true;
    	this.$emit('changeRouter',key);
    },
    handleOpen(key, keyPath) {
	    console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
		    console.log(key, keyPath);
		},
		changeIsCollapse(){
			this.isCollapse = !this.isCollapse;
		},
		appointSelect(){
			if(this.activeIndex != '98'){
				this.activeIndex = '98';
			}
	    	this.$emit('changeAppointValue',this.input)
		}
  },
  watch:{
  	listType(val,oldVal){
  		if(val != oldVal && val != 98 && val != 97){
			this.activeIndex = val
  		}
  	}
  }
}
</script>

<style scoped>
.top-name{
	padding-bottom:10px;
}
.fwhf-name{
	font-size:24px;
	line-height:40px;
}
.center{
	text-align: center;
}
.fwhf-name span{
	font-size:18px;
}

.positionMenu{
	position:absolute;
	left:0px;
	top:60px;
	z-index:1;
}

.el-menu-demo{
	background: rgba(255,255,255,0.4);
}
.el-menu-demo li{
	color: rgba(0,0,0,0.6);
}
.el-input-group__prepend {
    background-color: #fff;
}
.el-menu.el-menu--horizontal{
	border:none;
}

.el-menu-vertical-demo{
	width:100px;
}
.el-menu--collapse{
	display: none;
}
.el-button+.el-button{
	margin:0;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus{
	background: transparent;
}
</style>