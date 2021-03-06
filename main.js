import Vue from 'vue'
import App from './App'
import store from './store'
import config from '@/config'
Vue.prototype.$store = store
Vue.prototype.$config = config //自定义配置文件
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false
Date.prototype.format = function (fmt) {
  if(fmt==''){
    return ''
  }
  var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()

 //条件编译目前有7个平台，APP-PLUS、APP-PLUS-NVUE、MP-WEIXIN、H5、MP、MP-BAIDU、MP-ALIPAY



