(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/quotation/boxProduct"],{"5dc6":function(t,e,a){"use strict";var n=a("e4e6"),i=a.n(n);i.a},"839e":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("2464"));a("2f62"),i(a("dcad"));function i(t){return t&&t.__esModule?t:{default:t}}var r=function(){return Promise.all([a.e("common/vendor"),a.e("components/searchForm/quotationSF")]).then(a.bind(null,"8837"))},u=function(){return Promise.all([a.e("common/vendor"),a.e("components/z-table/z-table")]).then(a.bind(null,"717c"))},o={name:"paperIn",mixins:[n.default],components:{searchForm:r,zTable:u},data:function(){return{searchParams:{ctCode:"",up_CustID:"",ui_UPNo:"",ui_UPName:""},TabCur:"0",scrollLeft:0,errorContent:"暂无数据",tableHeight:0,TableData_boxProduct:[],Columns_boxProduct:[{key:"ct_Desc",title:"客户名称",width:200},{key:"ui_UPNo",title:"产品编号",width:200},{key:"ui_UPName",title:"产品名称",width:400},{key:"ui_Price",title:"报价",width:200},{key:"up_StartDate",title:"生效日期",width:200},{key:"Csize",title:"规格",width:400}]}},onReady:function(){},methods:{pageChange:function(t){this.pageSetting.current=t,this.getDataSource()},tabSelect:function(t){var e=this;this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1),this.$nextTick(function(){setTimeout(function(){var t=e.setTableHeight();e.tableHeight=t-50},200)}),this.getDataSource()},openSearchEventForm:function(){this.$refs.searchForm.isShowSearchForm=!0},searchComfirmEvent:function(t){this.searchParams=Object.assign(this.searchParams,t),null==this.searchParams.ctCode&&(this.searchParams.ctCode=""),null==this.searchParams.up_CustID&&(this.searchParams.up_CustID=""),null==this.searchParams.ui_UPNo&&(this.searchParams.ui_UPNo=""),null==this.searchParams.ui_UPName&&(this.searchParams.ui_UPName=""),this.getDataSource()},getDataSource:function(){switch(this.TabCur){case"0":this.getQutation_boxProduct();break;default:this.getQutation_boxProduct();break}},getQutation_boxProduct:function(){var e=this,a={up_CustID:this.searchParams.ctCode,ui_UPNo:this.searchParams.ui_UPNo,ui_UPName:this.searchParams.ui_UPName,size:this.pageSetting.pageSize,current:this.pageSetting.current};this.$store.dispatch("getQutation_products_action",a).then(function(t){e.TableData_boxProduct=t.data.records}).catch(function(e){t.showToast({title:"错误:"+e,icon:"none",duration:2e3})})}}};e.default=o}).call(this,a("6e42")["default"])},"8d75":function(t,e,a){"use strict";(function(t){a("628f"),a("921b");n(a("66fd"));var e=n(a("e101"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},a040:function(t,e,a){"use strict";a.r(e);var n=a("839e"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},ca9a:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},e101:function(t,e,a){"use strict";a.r(e);var n=a("ca9a"),i=a("a040");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("5dc6");var u=a("2877"),o=Object(u["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},e4e6:function(t,e,a){}},[["8d75","common/runtime","common/vendor"]]]);