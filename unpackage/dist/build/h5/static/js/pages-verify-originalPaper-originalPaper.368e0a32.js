(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-verify-originalPaper-originalPaper"],{"031f":function(t,e,n){"use strict";n.r(e);var a=n("1fe5"),i=n("0bfa");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("84a6");var r=n("2877"),u=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"102a1fbd",null);e["default"]=u.exports},"0bfa":function(t,e,n){"use strict";n.r(e);var a=n("148a"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"148a":function(t,e,n){"use strict";var a=n("e54b"),i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("cebc")),r=a(n("491c")),u=i(n("2464")),s=n("2f62"),c={name:"originalPaper",mixins:[u.default],data:function(){return{needToUpdate:!1,dataList:[]}},mounted:function(){var t=this;this.loadData();var e=this;uni.$on(r.BackToPage_Refresh,function(n){t.dataList.splice(n.itemIndex,1),e.needToUpdate=!0})},beforeDestroy:function(){uni.$off(r.BackToPage_Refresh,function(t){})},methods:(0,o.default)({},(0,s.mapActions)(["searchPODataAction"]),{BackPageEvent:function(){this.needToUpdate&&uni.$emit(r.ReLoadData,{needToUpdate:this.needToUpdate})},loadData:function(){var t=this,e={};this.searchPODataAction(e).then(function(e){t.dataList=e.data}).catch(function(t){uni.showToast({title:"数据查询失败 err:"+t,icon:"none",duration:2e3})})},openDeatil:function(t){uni.navigateTo({url:"./opDetail?id="+t})}})};e.default=c},1953:function(t,e,n){var a=n("511c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("46c8ae36",a,!0,{sourceMap:!1,shadowMode:!1})},"1fe5":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0},on:{BackPageEvent:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPageEvent.apply(void 0,arguments)}}},[n("template",{attrs:{slot:"content"},slot:"content"},[t._v("原纸审批")])],2),n("v-uni-view",[t._l(t.dataList,function(e,a){return[n("v-uni-view",{key:a+"_0",staticClass:"grid-warp",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDeatil(a)}}},[n("v-uni-view",{staticClass:"grid-title"},[t._v(t._s(e.poerName)+"-"+t._s(e.vendName)),n("v-uni-view",{staticClass:"cu-tag bg-red radius"},[t._v("未审核")])],1),n("v-uni-view",{staticClass:"grid-body"},[n("v-uni-view",{staticClass:"grid-flex padding-10"},[n("v-uni-view",[n("v-uni-text",[t._v("单号:"+t._s(e.sp_No))])],1),n("v-uni-view",[n("v-uni-text",[t._v("供应商:"+t._s(e.vendName))])],1)],1),n("v-uni-view",{staticClass:"grid-flex padding-10"},[n("v-uni-view",[n("v-uni-text",[t._v("总卷数:"+t._s(e.sp_SumCoil))])],1),n("v-uni-view",[n("v-uni-text",[t._v("日期:"+t._s(t.formatData(e.sp_PODate)))])],1)],1)],1)],1)]})],2)],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},2464:function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("e814"));n("28a5");var o=a(n("795b")),r=a(n("7e00")),u={name:"mixin-base",data:function(){return{pageSetting:{current:1,pageSize:15,total:0},pageTitle:"",otherHeight:0,leftContentHeight:0}},computed:{menuList:function(){var t=this.$store.getters.menuList_getters;return t}},methods:{getOtherContentHeight:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bodyContentHeight";return new o.default(function(n,a){var i=t,o=uni.createSelectorQuery().select("."+e);o.boundingClientRect(function(t){console.log("other Height:"+t.height),i.otherHeight=t.height,t.height,n(t.height)}).exec(function(t){})})},setTableHeight:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t||(this.otherHeight=0);try{var e=uni.getSystemInfoSync();return console.log("CustomBar:"+this.CustomBar),this.leftContentHeight=e.windowHeight-this.CustomBar-this.otherHeight-10,this.leftContentHeight}catch(n){}},getImgUrl:function(t){return r.default.baseImgUrl+t},formatData:function(t){return null==t?"":this.stringToDate(t).format("yyyy-MM-dd")},stringToDate:function(t,e){e||(e="-");var n,a=t.split(e),o=(0,i.default)(a[0]);n=0===a[1].indexOf("0")?(0,i.default)(a[1].substring(1)):(0,i.default)(a[1]);var r=(0,i.default)(a[2]),u=new Date(o,n-1,r);return u},checkLogin:function(){var t=uni.getStorageSync("TOKEN");if(null==t||""===t||null==this.menuList||0===this.menuList.length)try{uni.reLaunch({url:"/pages/login/login"})}catch(e){}}},onLoad:function(){this.checkLogin()},mounted:function(){}};e.default=u},"491c":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ReLoadData=e.BackToPage_Refresh=void 0;var a="BACKTOPAGE_REFRESH";e.BackToPage_Refresh=a;var i="ReLoadData";e.ReLoadData=i},"511c":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".card[data-v-102a1fbd]{width:90%;margin-left:5%;border-radius:%?10?%;padding:%?30?%}.grid-title[data-v-102a1fbd]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.text-price[data-v-102a1fbd]{color:#4aecdb;font-size:%?50?%}",""])},"84a6":function(t,e,n){"use strict";var a=n("1953"),i=n.n(a);i.a},e54b:function(t,e,n){var a=n("268f"),i=n("85f2");function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=i&&a?a(t,n):{};o.get||o.set?i(e,n,o):e[n]=t[n]}return e.default=t,e}t.exports=o}}]);