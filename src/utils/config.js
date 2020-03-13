const config = require('../../config')
const urlType = config.urlType;
const urlArr = config.urlArr;

//console.log(require.context('@/components', false, /.vue$/).keys())

export {
	urlType,
	urlArr
}