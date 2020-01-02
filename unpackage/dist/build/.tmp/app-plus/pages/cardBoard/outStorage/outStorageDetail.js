(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cardBoard/outStorage/outStorageDetail"],{2372:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},"81b5":function(t,e,n){"use strict";var o=n("f661"),r=n.n(o);r.a},ce13:function(t,e,n){"use strict";n.r(e);var o=n("e9d7"),r=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=r.a},e9d7:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=c(n("a34a")),a=c(n("2464")),i=n("2f62");function c(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,o,r,a,i){try{var c=t[a](i),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(o,r)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(o,r){var a=t.apply(e,n);function i(t){s(a,o,r,i,c,"next",t)}function c(t){s(a,o,r,i,c,"throw",t)}i(void 0)})}}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){f(t,e,n[e])})}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){return Promise.all([n.e("common/vendor"),n.e("components/z-table/z-table")]).then(n.bind(null,"717c"))},h=function(){return n.e("components/uni-icon/uni-icon").then(n.bind(null,"6203"))},p=function(){return n.e("components/searchForm/searchDataList.vue").then(n.bind(null,"a99d"))},g=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"ad32"))},m={name:"inStorage",mixins:[a.default],components:{zTable:l,searchForm:p,uniPopup:g,uniIcon:h},data:function(){return{dataIsLoadding:!1,CarListNo:"",currentSelectItem:{},tableHeight:400,errorContent:"暂无数据",cardBoardNoInfoData:[],cardBoardNoInfoColumns:[{key:"StationNo",title:"库位"},{key:"Qty",title:"本板数"},{key:"ScanQty",title:"扫描数"},{key:"CardNo",title:"卡板号"},{title:"操作",listenerClick:!0,width:130,titleAlign:"center",columnAlign:"center",format:{template:"编辑",names:[]}}],orderNo:"",cardNo:"",scanQty:0,cacheKey:"",cardScanQtyItems:{}}},mounted:function(){this.messageRegister(),this.getTableHeight(),this.spGetPaperCarListAppInfo()},onReady:function(){this.messageRegister(),this.getTableHeight()},watch:{},onLoad:function(e){this.CarListNo=e.carListNo,this.orderNo=e.orderNo,this.cardNo=e.cardNo,this.scanQty=e.scanQty,this.cacheKey=e.cacheKey,this.cardScanQtyItems=JSON.parse(t.getStorageSync(e.cacheKey))},methods:d({},(0,i.mapActions)(["getStorageOrderDetailAction"]),{updateInfo:function(){this.closePopup(),this.modifyData()},submitUpdataInfo:function(){},modifyData:function(){var t,e=this;this.cardBoardNoInfoData.forEach(function(n,o){n.CardNo==e.currentSelectItem.CardNo&&(t=n)}),t.ScanQty=this.currentSelectItem.ScanQty,this.setArrayObjList()},onClickRowEvent:function(t){this.currentSelectItem=JSON.parse(JSON.stringify(t)),this.openPopup()},openPopup:function(){this.$refs.popup.open()},closePopup:function(){this.$refs.popup.close()},getTableHeight:function(){var t=u(r.default.mark(function t(){var e,n,o;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this,n=e.setTableHeight(),t.next=4,e.getOtherContentHeight("elForm");case 4:o=t.sent,null!=o&&(e.tableHeight=n-o);case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),messageRegister:function(){},loadDataFromStorageList:function(){var t=this,e=!1,n=-1,o=this.$store.getters.outStorageDetailsList_getters;return n=o.findIndex(function(e){return e.orderNo==t.orderNo}),-1!=n&&(this.cardBoardNoInfoData=o[n].dataList,e=!0),e},setArrayObjList:function(){var t=this,e=-1,n=this.$store.getters.outStorageDetailsList_getters;if(""!=n&&(e=n.findIndex(function(e){return e.orderNo==t.orderNo})),-1!=e)n[e].dataList=this.cardBoardNoInfoData;else{var o={orderNo:this.orderNo,dataList:this.cardBoardNoInfoData};n.push(o)}this.$store.commit("setOutStorageDetailsList",n)},spGetPaperCarListAppInfo:function(){var e=this;if(!this.loadDataFromStorageList()){var n={procName:"spGetPaperScanInfoDataForCard",params:{UserID:this.$store.getters.userInfo_getters,OrderNo:this.orderNo}};this.dataIsLoadding=!0;var r=this;this.$store.dispatch("getExecuteDropDownDetailsAction",n).then(function(t){t.list&&t.list.length>0&&(t.list.forEach(function(t,e){if(r.cardScanQtyItems[t.CardNo]){var n=r.cardScanQtyItems[t.CardNo];n.forEach(function(e,n){console.log(o("item2.OrderNo"+e.OrderNo+"    "+t.OrderNo," at pages\\cardBoard\\outStorage\\outStorageDetail.vue:291")),e.OrderNo==t.OrderNo&&(t.ScanQty=e.Qty)})}}),e.cardBoardNoInfoData=t.list,e.setArrayObjList()),e.dataIsLoadding=!1}).catch(function(n){t.showToast({title:"获取清单数据失败:"+n,icon:"none",duration:2e3}),e.dataIsLoadding=!1})}},backPageEvent:function(){var e={orderNo:this.orderNo,scanQty:0};this.cardBoardNoInfoData.forEach(function(t,n){e.scanQty+=parseInt(t.ScanQty)}),t.$emit("outInCarListUpdate",e)}})};e.default=m}).call(this,n("6e42")["default"],n("0de9")["default"])},ed2a:function(t,e,n){"use strict";n.r(e);var o=n("2372"),r=n("ce13");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("81b5");var i=n("2877"),c=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},ef9e:function(t,e,n){"use strict";(function(t){n("628f"),n("921b");o(n("66fd"));var e=o(n("ed2a"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f661:function(t,e,n){}},[["ef9e","common/runtime","common/vendor"]]]);