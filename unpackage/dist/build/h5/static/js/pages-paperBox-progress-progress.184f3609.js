(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-paperBox-progress-progress"],{"040a":function(t,e,a){"use strict";a.r(e);var i=a("1c2e"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=s.a},"1c2e":function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("75fc")),n=i(a("e814"));a("28a5"),a("6762"),a("2fdb");var r=i(a("cebc")),o=i(a("0a0d")),c=a("5046"),u=i(a("dcad")),l=i(a("46c4")),h=a("2f62"),p={name:"searchForm",components:{wPicker:l.default},watch:{searchKeyword:function(t,e){if(0==t.length)return this.customerList=this.customerList_filter}},data:function(){return{paperNum:"",paperPO:"",paperLong:"",paperWide:"",paperQuality:"",paperType:"0",isShowProList:!1,productTypeText:"纸板",productTypeItem:{},productType:[{type:"0",ct_Desc:"全部"},{type:"1",ct_Desc:"纸箱"},{type:"2",ct_Desc:"纸板"},{type:"3",ct_Desc:"蜂窝"}],isShowOrderTypeList:!1,orderTypeText:"全部",orderTypeItem:{},orderType:[{type:"0",ct_Desc:"全部"},{type:"1",ct_Desc:"已完成"},{type:"2",ct_Desc:"未完成"}],endYear:(0,u.default)((0,o.default)()).format("YYYY"),CustomBar:this.CustomBar,isShowCustomerList:!1,isShowSearchForm:!1,customerList:[],searchKeyword:"",customerList_filter:[],startDate:(0,u.default)((0,o.default)()).subtract(1,"month").format("YYYY-MM-DD"),endDate:(0,u.default)((0,o.default)()).format("YYYY-MM-DD"),customerInfo:"",customerItem:{},dataType:"start"}},mounted:function(){},methods:(0,r.default)({filterCustomer:function(){var t=this;this.searchKeyword.length>0?this.customerList=this.customerList.filter(function(e){return e.ct_Desc.includes(t.searchKeyword)}):this.customerList=this.customerList_filter},getSelectProtypeInfo:function(t){this.isShowProList=!1,this.productTypeText=t.ct_Desc,this.productType=t},getSelectOrderType:function(t){this.isShowOrderTypeList=!1,this.orderTypeText=t.ct_Desc,this.paperType=t.type,this.orderTypeItem=t}},(0,h.mapActions)(["getCustomerInfo_action"]),{checkInputData:function(){var t=!0,e="";if(""==this.startDate||""==this.endDate)e="起始/结束日期必填",t=!1;else if(""!=this.startDate||""!=this.endDate){var a=this.stringToDate(this.startDate),i=this.stringToDate(this.endDate),s=(0,c.dataDiff)("d",a,i);s>730&&(e="时间间隔不能超过2年",t=!1),s<0&&(e="结束日期必须大于起始日期",t=!1)}return""!=e&&uni.showToast({title:e,icon:"none",duration:2e3}),t},stringToDate:function(t,e){e||(e="-");var a,i=t.split(e),s=(0,n.default)(i[0]);a=0==i[1].indexOf("0")?(0,n.default)(i[1].substring(1)):(0,n.default)(i[1]);var r=(0,n.default)(i[2]),o=new Date(s,a-1,r);return o},loadCustomerList:function(){var t=this;if(!(this.customerList.length>0)){var e={ct_Type:"0"};this.getQutationCustomerList_action(e).then(function(e){t.customerList=e.records,t.customerList_filter=(0,s.default)(t.customerList)}).catch(function(t){uni.showToast({title:"获取客户列表失败 err:"+t,icon:"none",duration:2e3})})}},getSelectCustomerInfo:function(t){this.isShowCustomerList=!1,this.customerInfo=t.ct_Desc,this.customerItem=t},openCustomerList:function(){this.isShowCustomerList=!0,this.loadCustomerList()},openDateSelect:function(t){this.dataType=t,this.$refs.DatePicker.show()},onConfirmDate:function(t){"start"===this.dataType?this.startDate=t.result:this.endDate=t.result},comfirmEvent:function(){if(this.checkInputData()){this.isShowSearchForm=!1;var t={DateFr:this.startDate,DateTo:this.endDate,Qty:this.paperNum,PO:this.paperPO,SizeL:this.paperLong,SizeW:this.paperWide,ArtID:this.paperQuality,NoDeli:this.paperType,Spec:this.paperWide+"*"+this.paperLong};this.$emit("comfirmEvent",t)}},cancelEvent:function(){this.isShowSearchForm=!1,this.$emit("cancelEvent","cancel")},open:function(){this.isShowSearchForm=!0},close:function(){this.isShowSearchForm=!1}})};e.default=p},"491c":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ReLoadData=e.BackToPage_Refresh=void 0;var i="BACKTOPAGE_REFRESH";e.BackToPage_Refresh=i;var s="ReLoadData";e.ReLoadData=s},"4ab4":function(t,e,a){"use strict";var i=a("ecd2"),s=a.n(i);s.a},5266:function(t,e,a){"use strict";a.r(e);var i=a("d9a3"),s=a("040a");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);var r=a("2877"),o=Object(r["a"])(s["default"],i["a"],i["b"],!1,null,"62ece39a",null);e["default"]=o.exports},"8d6e":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".margin-text-center[data-v-0c0e965e]{text-align:center;margin:%?20?%}.border-top[data-v-0c0e965e]{border-top:1px solid #eee}.cu-form-group .title[data-v-0c0e965e]{min-width:calc(4em + 15px)}",""])},"90c6":function(t,e,a){"use strict";a.r(e);var i=a("a894"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=s.a},9747:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0},on:{searchEvent:function(e){arguments[0]=e=t.$handleEvent(e),t.openSearchEventForm.apply(void 0,arguments)}}},[a("template",{attrs:{slot:"content"},slot:"content"},[t._v("纸箱进度查询")]),a("template",{attrs:{slot:"right"},slot:"right"},[t._v("查询")])],2),a("v-uni-form",{directives:[{name:"show",rawName:"v-show",value:0==t.TabCur,expression:"0==TabCur"}]},[a("zTable",{attrs:{showPaging:!0,pageSetting:t.pageSetting,stickSide:!0,tableHeight:t.tableHeight,showLoading:!1,emptyText:t.errorContent,tableData:t.TableData,columns:t.Columns},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.pageChange.apply(void 0,arguments)},onClick:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRowEvent.apply(void 0,arguments)}}})],1),a("searchForm",{ref:"searchForm",on:{comfirmEvent:function(e){arguments[0]=e=t.$handleEvent(e),t.searchComfirmEvent.apply(void 0,arguments)}}})],1)},s=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},a894:function(t,e,a){"use strict";var i=a("e54b"),s=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(a("5176")),r=i(a("491c")),o=s(a("5266")),c=s(a("2464")),u=(a("2f62"),s(a("dcad")),s(a("717c"))),l={name:"paperIn",mixins:[c.default],components:{searchForm:o.default,zTable:u.default},data:function(){return{pageSetting:{current:1,pageSize:15,total:0},searchParams:{DateFr:"",DateTo:"",Spec:"",Qty:"",PO:"",NoDeli:"",SizeL:"",SizeW:"",ArtID:""},TabCur:"0",scrollLeft:0,errorContent:"暂无数据",tableHeight:0,TableData:[],Columns:[{key:"ct_Desc",title:"客户",width:200},{key:"co_No",title:"订单号",width:200},{key:"co_ArtId",title:"纸质",width:110},{key:"Spec",title:"规格",width:200},{key:"co_Qty",title:"数量",width:120},{title:"操作",listenerClick:!0,width:130,titleAlign:"center",columnAlign:"center",format:{template:"<button class='cu-btn round line-green sm'>详细</button>",names:[]}}]}},mounted:function(){uni.$off(r.BackToPage_Refresh,function(t){})},methods:{pageChange:function(t){this.pageSetting.current=t,this.getDataSource()},loadData:function(){this.TableData=this.$store.getters.progressList_getters},onClickRowEvent:function(t){uni.navigateTo({url:"./progressDetail?id="+t.co_No})},tabSelect:function(t){var e=this;this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1),this.$nextTick(function(){setTimeout(function(){var t=e.setTableHeight();e.tableHeight=t-50},200)}),this.getDataSource()},openSearchEventForm:function(){this.$refs.searchForm.isShowSearchForm=!0},searchComfirmEvent:function(t){this.searchParams=(0,n.default)(this.searchParams,t),null==this.searchParams.DateFr&&(this.searchParams.DateFr=""),null==this.searchParams.DateTo&&(this.searchParams.DateTo=""),null==this.searchParams.Qty&&(this.searchParams.Qty=""),null==this.searchParams.PO&&(this.searchParams.PO=""),null==this.searchParams.SizeL&&(this.searchParams.SizeL=""),null==this.searchParams.SizeW&&(this.searchParams.SizeW=""),null==this.searchParams.ArtID&&(this.searchParams.ArtID=""),null==this.searchParams.NoDeli&&(this.searchParams.NoDeli=""),""!=this.searchParams.SizeW&&""!=this.searchParams.SizeL||(this.searchParams.Spec=""),this.getDataSource()},getDataSource:function(){switch(this.TabCur){case"0":this.getProgressData();break;default:this.getProgressData();break}},getProgressData:function(){var t=this,e={DateFr:this.searchParams.DateFr,DateTo:this.searchParams.DateTo,Spec:this.searchParams.Spec,Qty:this.searchParams.Qty,PO:this.searchParams.PO,NoDeli:this.searchParams.NoDeli,SizeL:this.searchParams.SizeL,SizeW:this.searchParams.SizeW,ArtID:this.searchParams.ArtID,size:this.pageSetting.pageSize,current:this.pageSetting.current};this.$store.dispatch("getProgress_action",e).then(function(e){t.TableData=e.data.records,t.pageSetting.current=e.data.current,t.pageSetting.pageSize=e.data.size,t.pageSetting.total=e.data.total}).catch(function(t){uni.showToast({title:"错误:"+t,icon:"none",duration:2e3})})}}};e.default=l},d9a3:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"cu-modal bottom-modal",class:t.isShowSearchForm?"show":""},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"cu-bar bg-white"},[a("v-uni-view",{staticClass:"action text-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelEvent.apply(void 0,arguments)}}},[t._v("取消")]),a("v-uni-view",{staticClass:"action text-green",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.comfirmEvent.apply(void 0,arguments)}}},[t._v("确定")])],1),a("v-uni-view",{staticClass:"text-left padding-sm"},[a("v-uni-form",[a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("开始日期")]),a("v-uni-input",{attrs:{disabled:"true",placeholder:"输入开始日期",name:"input"},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}}),a("v-uni-button",{staticClass:"cu-btn bg-green shadow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDateSelect("start")}}},[t._v("日期")])],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("结束日期")]),a("v-uni-input",{attrs:{disabled:"true",placeholder:"输入框结束日期",name:"input"},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}}),a("v-uni-button",{staticClass:"cu-btn bg-green shadow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDateSelect("end")}}},[t._v("日期")])],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("纸　　质")]),a("v-uni-input",{attrs:{placeholder:"请输入纸质",name:"input"},model:{value:t.paperQuality,callback:function(e){t.paperQuality=e},expression:"paperQuality"}}),a("v-uni-button",{staticClass:"cu-btn round line-green",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.paperQuality=""}}},[t._v("清空")])],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("纸　　宽")]),a("v-uni-input",{attrs:{placeholder:"请输入纸宽",name:"input"},model:{value:t.paperWide,callback:function(e){t.paperWide=e},expression:"paperWide"}}),a("v-uni-button",{staticClass:"cu-btn round line-green",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.paperWide=""}}},[t._v("清空")])],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("纸　　长")]),a("v-uni-input",{attrs:{placeholder:"请输入纸长",name:"input"},model:{value:t.paperLong,callback:function(e){t.paperLong=e},expression:"paperLong"}}),a("v-uni-button",{staticClass:"cu-btn round line-green",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.paperLong=""}}},[t._v("清空")])],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("数 量(片)")]),a("v-uni-input",{attrs:{placeholder:"请输入数量(片)",name:"input"},model:{value:t.paperNum,callback:function(e){t.paperNum=e},expression:"paperNum"}}),a("v-uni-button",{staticClass:"cu-btn round line-green",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.paperNum=""}}},[t._v("清空")])],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("PO　　号")]),a("v-uni-input",{attrs:{placeholder:"请输入PO号",name:"input"},model:{value:t.paperPO,callback:function(e){t.paperPO=e},expression:"paperPO"}}),a("v-uni-button",{staticClass:"cu-btn round line-green",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.paperPO=""}}},[t._v("清空")])],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("订单类型")]),a("v-uni-input",{attrs:{disabled:"",placeholder:"请选择订单类型",name:"input"},model:{value:t.orderTypeText,callback:function(e){t.orderTypeText=e},expression:"orderTypeText"}}),a("v-uni-button",{staticClass:"cu-btn bg-green shadow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isShowOrderTypeList=!0}}},[t._v("选择")])],1)],1)],1)],1)],1),a("w-picker",{ref:"DatePicker",attrs:{mode:"date",startYear:"2016",endYear:t.endYear,defaultVal:[0,0,0],current:!0,themeColor:"#f00"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirmDate.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"cu-modal drawer-modal justify-start",class:t.isShowCustomerList?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isShowCustomerList=!1}}},[a("v-uni-view",{staticClass:"cu-dialog basis-lg",style:[{top:t.CustomBar+"px",height:"calc(100vh - "+t.CustomBar+"px)"}],on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[a("v-uni-view",{staticClass:"cu-list menu text-left",style:[{overflow:"scroll",height:"calc(100vh - "+t.CustomBar+"px)"}]},[a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"cu-bar bg-white search "},[a("v-uni-view",{staticClass:"search-form round"},[a("v-uni-text",{staticClass:"cuIcon-search"}),a("v-uni-input",{attrs:{type:"text",placeholder:"关键词","confirm-type":"search"},model:{value:t.searchKeyword,callback:function(e){t.searchKeyword=e},expression:"searchKeyword"}})],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-button",{staticClass:"cu-btn bg-gradual-green shadow-blur round",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.filterCustomer()}}},[t._v("搜索")])],1)],1)],1),t._l(t.customerList,function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.getSelectCustomerInfo(e)}}},[a("v-uni-view",{staticClass:"content",staticStyle:{overflow:"scroll"}},[a("v-uni-view",{domProps:{textContent:t._s(e.ct_Desc)}})],1)],1)})],2)],1)],1),a("v-uni-view",{staticClass:"cu-modal drawer-modal justify-start",class:t.isShowProList?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isShowProList=!1}}},[a("v-uni-view",{staticClass:"cu-dialog basis-lg",style:[{top:t.CustomBar+"px",height:"calc(100vh - "+t.CustomBar+"px)"}],on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[a("v-uni-view",{staticClass:"cu-list menu text-left",style:[{overflow:"scroll",height:"calc(100vh - "+t.CustomBar+"px)"}]},t._l(t.productType,function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.getSelectProtypeInfo(e)}}},[a("v-uni-view",{staticClass:"content",staticStyle:{overflow:"scroll"}},[a("v-uni-view",{domProps:{textContent:t._s(e.ct_Desc)}})],1)],1)}),1)],1)],1),a("v-uni-view",{staticClass:"cu-modal drawer-modal justify-start",class:t.isShowOrderTypeList?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isShowOrderTypeList=!1}}},[a("v-uni-view",{staticClass:"cu-dialog basis-lg",style:[{top:t.CustomBar+"px",height:"calc(100vh - "+t.CustomBar+"px)"}],on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[a("v-uni-view",{staticClass:"cu-list menu text-left",style:[{overflow:"scroll",height:"calc(100vh - "+t.CustomBar+"px)"}]},t._l(t.orderType,function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.getSelectOrderType(e)}}},[a("v-uni-view",{staticClass:"content",staticStyle:{overflow:"scroll"}},[a("v-uni-view",{domProps:{textContent:t._s(e.ct_Desc)}})],1)],1)}),1)],1)],1)],1)},s=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},e54b:function(t,e,a){var i=a("268f"),s=a("85f2");function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var n=s&&i?i(t,a):{};n.get||n.set?s(e,a,n):e[a]=t[a]}return e.default=t,e}t.exports=n},e973:function(t,e,a){"use strict";a.r(e);var i=a("9747"),s=a("90c6");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);a("4ab4");var r=a("2877"),o=Object(r["a"])(s["default"],i["a"],i["b"],!1,null,"0c0e965e",null);e["default"]=o.exports},ecd2:function(t,e,a){var i=a("8d6e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("74e735b0",i,!0,{sourceMap:!1,shadowMode:!1})}}]);