(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-verify-boxApproval-boxApproval"],{"0587":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0},on:{BackPageEvent:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPageEvent.apply(void 0,arguments)}}},[n("template",{attrs:{slot:"content"},slot:"content"},[t._v("纸箱审批")])],2),n("v-uni-view",[t._l(t.dataList.records,function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"grid-warp",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDeatil(i)}}},[n("v-uni-view",{staticClass:"grid-title"},[t._v(t._s(null==e.bc_CustID_name?" - ":e.bc_CustID_name)),n("v-uni-view",{staticClass:"cu-tag bg-red radius"},[t._v("未审核")])],1),n("v-uni-view",{staticClass:"grid-body"},[n("v-uni-view",{staticClass:"grid-flex padding-10"},[n("v-uni-view",[n("v-uni-text",[t._v("单号:"+t._s(e.bc_No))])],1),n("v-uni-view",[n("v-uni-text",[t._v("日期:"+t._s(t.formatData(e.bi_DeDate)))])],1)],1),n("v-uni-view",{staticClass:"grid-flex padding-10"},[n("v-uni-view",[n("v-uni-text",[t._v("纸质:"+t._s(e.bp_CArtID))])],1),n("v-uni-view",[n("v-uni-text",[t._v("愣别:"+t._s(e.bp_ArtLB))])],1)],1),n("v-uni-view",{staticClass:"grid-flex padding-10"},[n("v-uni-view",[n("v-uni-text",[t._v("")])],1),n("v-uni-view",[n("v-uni-text"),n("v-uni-text",{staticClass:"text-price"},[t._v(t._s(e.bi_Price))])],1)],1)],1)],1)]})],2)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"1ced":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".card[data-v-28d22af2]{width:90%;margin-left:5%;border-radius:%?10?%;padding:%?30?%}.grid-title[data-v-28d22af2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.text-price[data-v-28d22af2]{color:#4aecdb;font-size:%?50?%}",""])},2464:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("e814"));n("28a5");var o=i(n("795b")),r=i(n("7e00")),u={name:"mixin-base",data:function(){return{pageSetting:{current:1,pageSize:15,total:0},pageTitle:"",otherHeight:0,leftContentHeight:0}},computed:{menuList:function(){var t=this.$store.getters.menuList_getters;return t}},methods:{getOtherContentHeight:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bodyContentHeight";return new o.default(function(n,i){var a=t,o=uni.createSelectorQuery().select("."+e);o.boundingClientRect(function(t){console.log("other Height:"+t.height),a.otherHeight=t.height,t.height,n(t.height)}).exec(function(t){})})},setTableHeight:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t||(this.otherHeight=0);try{var e=uni.getSystemInfoSync();return console.log("CustomBar:"+this.CustomBar),this.leftContentHeight=e.windowHeight-this.CustomBar-this.otherHeight-10,this.leftContentHeight}catch(n){}},getImgUrl:function(t){return r.default.baseImgUrl+t},formatData:function(t){return null==t?"":this.stringToDate(t).format("yyyy-MM-dd")},stringToDate:function(t,e){e||(e="-");var n,i=t.split(e),o=(0,a.default)(i[0]);n=0===i[1].indexOf("0")?(0,a.default)(i[1].substring(1)):(0,a.default)(i[1]);var r=(0,a.default)(i[2]),u=new Date(o,n-1,r);return u},checkLogin:function(){var t=uni.getStorageSync("TOKEN");if(null==t||""===t||null==this.menuList||0===this.menuList.length)try{uni.reLaunch({url:"/pages/login/login"})}catch(e){}}},onLoad:function(){this.checkLogin()},mounted:function(){}};e.default=u},4855:function(t,e,n){"use strict";n.r(e);var i=n("0587"),a=n("b714");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("9300");var r=n("2877"),u=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"28d22af2",null);e["default"]=u.exports},"491c":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ReLoadData=e.BackToPage_Refresh=void 0;var i="BACKTOPAGE_REFRESH";e.BackToPage_Refresh=i;var a="ReLoadData";e.ReLoadData=a},"5f28":function(t,e,n){"use strict";var i=n("e54b"),a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("cebc")),r=i(n("491c")),u=a(n("2464")),s=n("2f62"),c={name:"barginPrice",mixins:[u.default],data:function(){return{needToUpdate:!1,dataList:[]}},mounted:function(){var t=this;this.loadData();uni.$on(r.BackToPage_Refresh,function(e){t.loadData(),t.needToUpdate=!0})},beforeDestroy:function(){uni.$off(r.BackToPage_Refresh,function(t){})},methods:(0,o.default)({},(0,s.mapActions)(["searchBoxApprovalListAction"]),{BackPageEvent:function(){this.needToUpdate&&uni.$emit(r.ReLoadData,{needToUpdate:this.needToUpdate})},loadData:function(){var t=this,e={};this.searchBoxApprovalListAction(e).then(function(e){t.dataList=e.data}).catch(function(t){uni.showToast({title:"数据查询失败 err:"+t,icon:"none",duration:2e3})})},openDeatil:function(t){uni.navigateTo({url:"/pages/verify/boxApproval/boxDetail?id="+t})}})};e.default=c},9300:function(t,e,n){"use strict";var i=n("a2c0"),a=n.n(i);a.a},a2c0:function(t,e,n){var i=n("1ced");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2625dd9a",i,!0,{sourceMap:!1,shadowMode:!1})},b714:function(t,e,n){"use strict";n.r(e);var i=n("5f28"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},e54b:function(t,e,n){var i=n("268f"),a=n("85f2");function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=a&&i?i(t,n):{};o.get||o.set?a(e,n,o):e[n]=t[n]}return e.default=t,e}t.exports=o}}]);