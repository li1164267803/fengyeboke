<template>
  <div id="fwhf" :style="{'background-image': backgroundImage}">
    <router-view/>
  </div>
</template>

<script>
const imgUrl1 = ()=>import('./assets/bg1.jpg')
const imgUrl2 = ()=>import('./assets/bg2.jpg')
const imgUrl3 = ()=>import('./assets/bg3.jpg')
const imgUrl4 = ()=>import('./assets/bg4.jpg')
const imgUrl5 = ()=>import('./assets/bg5.jpg')
const imgUrl6 = ()=>import('./assets/bg6.jpg')
const imgUrl7 = ()=>import('./assets/bg7.jpg')
const imgUrl8 = ()=>import('./assets/bg8.jpg')
const imgUrl9 = ()=>import('./assets/bg9.jpg')
const imgUrl10 = ()=>import('./assets/bg10.jpg')
const imgUrl11 = ()=>import('./assets/bg11.jpg')
const imgUrl12 = ()=>import('./assets/bg12.jpg')
const imgUrl13 = ()=>import('./assets/bg13.jpg')
const imgUrl14 = ()=>import('./assets/bg14.jpg')
import { mapState } from 'vuex'
export default {
  name: 'App',
  data () {
    return {}
  },
  created(){},
  computed:{
	  ...mapState({
	  	backgroundImage: state => 'url(./static/img/'+state.background.bjImg+'.jpg)'
	  })
  }
}
</script>

<style>
html , body , #fwhf ,div ,p{
	padding:0;
	margin:0;
}
#fwhf{
	background-color:rgb(244,244,244,0.6);
	background-repeat-x: no-repeat;
	background-position:center top;
	background-image: url(assets/bg1.jpg);
	background-size:contain;
}
/*div居中*/
.divCenter{
	position:absolute;
	top:0;
	left:0;
	right:0;
	bottom:0;
	margin:auto;
}
/*防止e-col无高度*/
.grid-content {
   	min-height: 1px;
}
/*无数据时div样式*/
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
</style>
