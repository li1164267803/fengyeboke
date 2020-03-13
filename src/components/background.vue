<template>
	<el-row>
		<el-col :xs="2" :sm="2" :md="3" :lg="3"><div class="grid-content"></div></el-col>
		<el-col :xs="20" :sm="20" :md="18" :lg="18">
			<div class="title">详情页背景更换</div>
			<hr>
			<dl class="content_dl hidden-xs-only"  @click="changeBjColor">
				<dd data-color="#C7EDCC">绿豆沙色	#C7EDCC	RGB(199, 237, 204)	<div data-color="#C7EDCC" style="background:#C7EDCC"></div></dd>
				<dd data-color="#FFFFFF">银河白    #FFFFFF    RGB(255, 255, 255)	<div data-color="#FFFFFF" style="background:#FFFFFF"></div></dd>
				<dd data-color="#FAF9DE">杏仁黄    #FAF9DE    RGB(250, 249, 222)	<div data-color="#FAF9DE" style="background:#FAF9DE"></div></dd>
				<dd data-color="#FFF2E2">秋叶褐    #FFF2E2    RGB(255, 242, 226)	<div data-color="#FFF2E2" style="background:#FFF2E2"></div></dd>
				<dd data-color="#FDE6E0">胭脂红    #FDE6E0    RGB(253, 230, 224)	<div data-color="#FDE6E0" style="background:#FDE6E0"></div></dd>
				<dd data-color="#E3EDCD">青草绿    #E3EDCD    RGB(227, 237, 205)	<div data-color="#E3EDCD" style="background:#E3EDCD"></div></dd>
				<dd data-color="#DCE2F1">海天蓝    #DCE2F1    RGB(220, 226, 241)	<div data-color="#DCE2F1" style="background:#DCE2F1"></div></dd>
				<dd data-color="#E9EBFE">葛巾紫    #E9EBFE    RGB(233, 235, 254)	<div data-color="#E9EBFE" style="background:#E9EBFE"></div></dd>
				<dd data-color="#EAEAEF">极光灰    #EAEAEF    RGB(234, 234, 239)	<div data-color="#EAEAEF" style="background:#EAEAEF"></div></dd>
				<dd data-color="transparent">透明色    transparent    RGB(0, 0, 0, 0)	<div data-color="transparent" style="background:transparent"></div></dd>
			</dl>
			<dl class="content_dl hidden-sm-and-up"  @click="changeBjColor">
				<dd data-color="#C7EDCC" style="background:#C7EDCC">绿豆沙色	#C7EDCC	<div data-color="#C7EDCC" style="background:#C7EDCC"></div></dd>
				<dd data-color="#FFFFFF" style="background:#FFFFFF">银河白    #FFFFFF    <div data-color="#FFFFFF" style="background:#FFFFFF"></div></dd>
				<dd data-color="#FAF9DE" style="background:#FAF9DE">杏仁黄    #FAF9DE    <div data-color="#FAF9DE" style="background:#FAF9DE"></div></dd>
				<dd data-color="#FFF2E2" style="background:#FFF2E2">秋叶褐    #FFF2E2    <div data-color="#FFF2E2" style="background:#FFF2E2"></div></dd>
				<dd data-color="#FDE6E0" style="background:#FDE6E0">胭脂红    #FDE6E0    <div data-color="#FDE6E0" style="background:#FDE6E0"></div></dd>
				<dd data-color="#E3EDCD" style="background:#E3EDCD">青草绿    #E3EDCD    <div data-color="#E3EDCD" style="background:#E3EDCD"></div></dd>
				<dd data-color="#DCE2F1" style="background:#DCE2F1">海天蓝    #DCE2F1    <div data-color="#DCE2F1" style="background:#DCE2F1"></div></dd>
				<dd data-color="#E9EBFE" style="background:#E9EBFE">葛巾紫    #E9EBFE    <div data-color="#E9EBFE" style="background:#E9EBFE"></div></dd>
				<dd data-color="#EAEAEF" style="background:#EAEAEF">极光灰    #EAEAEF    <div data-color="#EAEAEF" style="background:#EAEAEF"></div></dd>
				<dd data-color="transparent" style="background:transparent">透明色    transparent    <div data-color="transparent" style="background:transparent"></div></dd>
			</dl>
			<div class="title">主页背景更换</div>
			<hr>
			<ul class="content_ul hidden-md-and-down">
				<li style="margin:0 20px 20px" v-for="(item,index) of imgUrl" @click="changeBj" :data-url="item">
					<el-image
						:data-url="item"
				      style="width:200px;height: 300px"
				      :src="item"
				      fit="scale-down"
				      lazy></el-image>
				</li>
			</ul>
			<ul class="content_ul hidden-lg-and-up hidden-sm-and-down">
				<li style="margin:0 20px 20px" v-for="(item,index) of imgUrl" @click="changeBj" :data-url="item">
					<el-image
						:data-url="item"
				      style="width:166px;height: 250px"
				      :src="item"
				      fit="scale-down"
				      lazy></el-image>
				</li>
			</ul>
			<ul class="content_ul hidden-md-and-up hidden-xs-only">
				<li style="margin:0 20px 20px" v-for="(item,index) of imgUrl" @click="changeBj" :data-url="item">
					<el-image
						:data-url="item"
				      style="width:133px;height: 200px"
				      :src="item"
				      fit="scale-down"
				      lazy></el-image>
				</li>
			</ul>
			<ul class="content_ul hidden-sm-and-up">
				<li style="margin:0 10px 20px" v-for="(item,index) of imgUrl" @click="changeBj" :data-url="item">
					<el-image
						:data-url="item"
				      style="width:66px;height: 100px"
				      :src="item"
				      fit="scale-down"
				      lazy></el-image>
				</li>
			</ul>
		</el-col>
		<el-col :xs="2" :sm="2" :md="3" :lg="3"><div class="grid-content"></div></el-col>
	</el-row>
</template>

<script>
import imgUrl1 from '../assets/bgf1.png';
import imgUrl2 from '../assets/bgf2.png';
import imgUrl3 from '../assets/bgf3.png';
import imgUrl4 from '../assets/bgf4.png';
import imgUrl5 from '../assets/bgf5.png';
import imgUrl6 from '../assets/bgf6.png';
import imgUrl7 from '../assets/bgf7.png';
import imgUrl8 from '../assets/bgf8.png';
import imgUrl9 from '../assets/bgf9.png';
import imgUrl10 from '../assets/bgf10.png';
import imgUrl11 from '../assets/bgf11.png';
import imgUrl12 from '../assets/bgf12.png';
import imgUrl13 from '../assets/bgf13.png';
import imgUrl14 from '../assets/bgf14.png';
import { mapActions } from 'vuex'
export default {
  name: 'fwhfBackground',
  data () {
    return {
    	imgUrl:[
    		imgUrl1,
    		imgUrl2,
    		imgUrl3,
    		imgUrl4,
    		imgUrl5,
    		imgUrl6,
    		imgUrl7,
    		imgUrl8,
    		imgUrl9,
    		imgUrl10,
    		imgUrl11,
    		imgUrl12,
    		imgUrl13,
    		imgUrl14,
    	]
    }
  },
  created(){
  },
  methods:{
  	...mapActions({
	    updateBj:'updateBjImg',
	    updateColor: 'updateBjColor'
	}),
  	changeBj(e){
  		e = e.target || e.srcElement;
  		if(e.dataset.url){
	  		let imgUrl = e.dataset.url.split('/')[3].split('.')[0].replace('f','');
			this.$local.set('bjImg',imgUrl,30);
			this.updateBj(imgUrl);
			this.$message({
	          message: '切换成功',
	          type: 'success'
	       	});
		}
  	},
  	changeBjColor(e){
  		e = e.target || e.srcElement;
  		if(e.dataset.color){
  			let color = e.dataset.color;
  			this.$local.set('bjColor',color,30);
  			this.updateColor(color)
  			this.$message({
	          message: '切换成功',
	          type: 'success'
	       	});
  		}
  	}
  }
}
</script>

<style scoped>
li{list-style:none;}
.title{font-weight: bold;font-size: 16px;}
.content_ul{overflow:hidden;display:flex;justify-content:space-around;flex-wrap: wrap;padding:0;}
/*.content_ul:after{content: "";flex:1;display: block; height:0;margin:0 50px 20px;}*/
.content_ul li{cursor:pointer;flex:1;}
.content_ul li img{display:block;margin:0 auto;}
.content_dl{}
.content_dl dd{font-size:14px;line-height:28px;padding-left:20px;cursor:pointer;margin-top:6px;}
.content_dl dd:nth-of-type(1):hover{background:#C7EDCC}
.content_dl dd:nth-of-type(2):hover{background:#FFFFFF}
.content_dl dd:nth-of-type(3):hover{background:#FAF9DE}
.content_dl dd:nth-of-type(4):hover{background:#FFF2E2}
.content_dl dd:nth-of-type(5):hover{background:#FDE6E0}
.content_dl dd:nth-of-type(6):hover{background:#E3EDCD}
.content_dl dd:nth-of-type(7):hover{background:#DCE2F1}
.content_dl dd:nth-of-type(8):hover{background:#E9EBFE}
.content_dl dd:nth-of-type(9):hover{background:#EAEAEF}
.content_dl dd:nth-of-type(10):hover{background:tansparent}
.content_dl dd div{display:inline-block;width:20px;height:20px;vertical-align:middle;}
</style>