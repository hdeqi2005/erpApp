/**
 * @name mixin
 * @description 所有.vue 公共方法
 * @action .vue 中 添加mixin:[name]
 *
 */

import config from '@/config'
export default {
  name: 'mixin-base',
  data () {
    return {
      pageTitle: '',
	  otherHeight:0,
	  leftContentHeight:0,
    }
  },
  computed: {
    menuList () {
      let tempMenuList = this.$store.getters.menuList_getters
      return tempMenuList
    }
  },
  methods: {
	  //获取指定内容占用高度,计算剩余高度 单位:PX
	  getOtherContentHeight(className='bodyContentHeight'){
	   let _self =this
	  let info = uni.createSelectorQuery().select("."+className);
	  　　　 info.boundingClientRect(function(data) { //data - 各种参数
	  　　　  console.log('other Height:'+data.height)  // 获取元素宽度
	  　　   _self.otherHeight = data.height
	  }).exec()
	  },
	  //计算设置表格高度
	  setTableHeight(needOtherHeight=false){
		 
		  if(!needOtherHeight){
			  this.otherHeight = 0
		  }
		try {
		    const res = uni.getSystemInfoSync();
		    console.log('windowHeight:'+res.windowHeight);
		    console.log('CustomBar:'+this.CustomBar);
		    console.log('bodyContentHeight:'+this.otherHeight);
			this.leftContentHeight =res.windowHeight -this.CustomBar - this.otherHeight -10
			console.log('tableHeight:'+this.leftContentHeight);
			return this.leftContentHeight
		} catch (e) {
		    // error
		}
	  
	  },
	 //获取图表路径
	  getImgUrl(imgUrl){
	  	return config.baseImgUrl+imgUrl
	  },
    // 格式化时间日期
    formatData(strDate) {
      if (strDate == null) {
        return ''
      } else {
        return this.stringToDate(strDate).format('yyyy-MM-dd')
      }
    },
    // 字符串转日期
    stringToDate(dateStr, separator) {
      if (!separator) {
        separator = '-'
      }
      let dateArr = dateStr.split(separator)
      let year = parseInt(dateArr[0])
      let month
      // 处理月份为04这样的情况
      if (dateArr[1].indexOf('0') === 0) {
        month = parseInt(dateArr[1].substring(1))
      } else {
        month = parseInt(dateArr[1])
      }
      let day = parseInt(dateArr[2])
      let date = new Date(year, month - 1, day)
      return date
    },
    // 验证登陆是否仍旧有效
    checkLogin() {
	 // console.warn("menuList:"+this.menuList)
      let currentLoginToken = uni.getStorageSync('TOKEN')
      console.warn('mixins=check==>Token：' + currentLoginToken)
      if (currentLoginToken == null || currentLoginToken === '' || this.menuList == null || this.menuList.length === 0) {
        	// 关闭当前页面，跳转到应用内的某个页面。
			//debugger
			try{
				uni.reLaunch({
					 url: '/pages/login/login',
				  //    url: './../login/login',
					 // fail:function(err){
						//  uni.reLaunch({
						//       url: './../../login/login'
						//  })
					 // }
				})
			}catch(e){
				//TODO handle the exception

			}
        	
      }
    }

  },
  onLoad() {
	 // console.warn('====onLoad mixins====')
     this.checkLogin()
  },
  mounted () {
	//console.warn('.......mixins.......mounted')
  }

}
