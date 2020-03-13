import Vue from 'vue'
import Axios from 'axios'
import {urlType,urlArr} from './config'

//Axios.interceptors.request.use(function (config) {
//  return config;
// }, function (error) {
//  return Promise.reject(error);
//});
// 
//Axios.interceptors.response.use(function (response) {
//  return response.data;
// }, function (error) {
//  return Promise.reject(error);
//});

function Api(obj){
	/*obj数据格式
	 * {
	 * 	type	对应后台0、1...,不传默认为0
	 * 	url		接口名称,必传
	 *	method	请求方式,不传默认post
	 * 	header 	请求头
	 *	data	请求参数
	 * }
	 * example:
	 * {
	 * 	type:1,
	 * 	url:'test',
	 * 	method:'get',
	 * 	header:{
	 * 			Authorization：AUTH_TOKEN，
	 * 			Content-Type：'application/x-www-form-urlencoded'
	 * 		}
	 * 	data:{
	 * 			a:1,
	 * 			b:2
	 * 		}
	 * }
	 * 
	 * axios请求所需数据格式
	 * example：
	 * {
	 * 	method: 'post',
	 * 	url: '/user/12345',
	 * 	data: {
	 * 		firstName: 'Fred',
	 * 		lastName: 'Flintstone'
	 * 		}
	 * }
	 * {
	 * 	method: 'get',
	 * 	url: 'http://bit.ly/2mTM3nY'
	 * }
	 * 
	 * */
	
	let data = {};
	
	//处理必传字段 url
	if(obj.url === undefined){
		return new Promise((res,rej)=>{
			rej({ok:-1,msg:'url不存在'})
		})
	}
	data.url = obj.url;
	
	//处理type
	let type = obj.type || 0;
	if(window.location.protocol == 'https:'){
		type = 1;
	}
	
	if(process.env.NODE_ENV === 'production'){
		Axios.defaults.baseURL = urlArr[urlType][type].preUrl
	}
	if(process.env.NODE_ENV === 'development'){
		Axios.defaults.baseURL = urlArr[urlType][type].name
	}
	
	//处理header
	if(obj.header !== undefined){
		for(let attrName in obj.header){
			Axios.defaults.headers.common[attrName] = obj.header[attrName];
		}
	}
	
	//处理method
	data.method = obj.method || 'post';

	//处理data
	data.data = obj.data;

	return new Promise((res,rej)=>{
		Axios(data)
		.then((response) =>{
			//响应成功拦截
		    console.log(Axios.defaults.baseURL + data.url + '---' + '请求成功')
//		    console.log(response.data)
		    res(response.data)
		})
		.catch((response) =>{
			//响应失败拦截
		    console.log(Axios.defaults.baseURL + data.url + '---' + '请求失败')
//		    console.log(response.data)
		    rej(response.data)
		 })
	})
}
export default Api