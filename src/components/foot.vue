<template>
	<div class="footer">
		<p>本站为个人博客,其中技术言论仅代表博主个人理解</p>
		<p>博主qq:1026983432<a href="https://user.qzone.qq.com/1026983432" target="_blank"><img src="../assets/qqkj.png"></img></a>,wx:zzfwhf</p>
		<p>备案号:晋ICP备18006243号</p>
	</div>
</template>

<script>
export default {
  name: 'fwhfFoot',
  components:{
  },
  data () {
    return {}
  },
  created(){
  },
  methods:{
  }
}
</script>

<style scoped>
.footer{padding:20px 0;border-top:1px solid #333;text-align:center;font-size:12px;}
.footer p{line-height:20px;height:20px;}
.footer a{display:inline-block;vertical-align:middle;}
.footer a img{width:14px;display:block;}
</style>