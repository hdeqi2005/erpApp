(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-report-compfactorykanban-comFactoryCharts"],{"118b":function(n,t,e){var a=e("f0cb");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("665f243e",a,!0,{sourceMap:!1,shadowMode:!1})},"16ad":function(n,t,e){"use strict";e.r(t);var a=e("5e49"),i=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);t["default"]=i.a},"40e8":function(n,t,e){"use strict";e.r(t);var a=e("9319"),i=e("16ad");for(var r in i)"default"!==r&&function(n){e.d(t,n,function(){return i[n]})}(r);e("bce1");var s=e("2877"),o=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"cad8f3be",null);t["default"]=o.exports},"5b4a":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{Area:0,Qty:0,Amount:0,Long:0,Week:"三",Date:"09/11",FDate:"2019/09/11"},{Area:0,Qty:0,Amount:0,Long:0,Week:"四",Date:"09/12",FDate:"2019/09/12"},{Area:0,Qty:0,Amount:0,Long:0,Week:"五",Date:"09/13",FDate:"2019/09/13"},{Area:0,Qty:0,Amount:0,Long:0,Week:"六",Date:"09/14",FDate:"2019/09/14"},{Area:0,Qty:0,Amount:0,Long:0,Week:"日",Date:"09/15",FDate:"2019/09/15"},{Area:0,Qty:0,Amount:0,Long:0,Week:"一",Date:"09/16",FDate:"2019/09/16"},{Area:0,Qty:0,Amount:0,Long:0,Week:"二",Date:"09/17",FDate:"2019/09/17"},{Area:null,Qty:null,Amount:null,Long:null,Week:null,Date:"月累计",FDate:null},{Area:null,Qty:null,Amount:null,Long:null,Week:null,Date:"月平均",FDate:null}];t.default=a},"5e49":function(n,t,e){"use strict";var a=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,r=a(e("82a3")),s=a(e("75fc")),o=a(e("db0c")),c=a(e("2464")),l=a(e("2bdc")),u=(a(e("5b4a")),e("362c")),h=a(e("717c")),d=null,m={name:"comFactoryCharts",mixins:[c.default],components:{zTable:h.default},data:function(){return{errorContent:"数据加载中...",tableHeight:0,cWidth:"",cHeight:"",pixelRatio:1,textarea:"",serverData:"",currentType:"",currentMode:"1",legendData:["面积","米数",""],currentTitlefReport:"本月生产",currentTextOfReport:"生产(面积、米数)对照",categories:[],series:[],dataTableList:[],dataColumns:[],dataColumnsM0:[{key:"Date",title:"日期",width:190,titleAlign:"center",columnAlign:"center"},{key:"Week",title:"星期",width:170,titleAlign:"center",columnAlign:"center"},{key:"Amount",title:"金额",width:190,titleAlign:"center",columnAlign:"center"},{key:"Area",title:"面积",width:190,titleAlign:"center",columnAlign:"center"}],dataColumnsM1:[{key:"Date",title:"日期",width:190,titleAlign:"center",columnAlign:"center"},{key:"Week",title:"星期",width:170,titleAlign:"center",columnAlign:"center"},{key:"Qty",title:"数量",width:190,titleAlign:"center",columnAlign:"center"},{key:"Area",title:"面积",width:190,titleAlign:"center",columnAlign:"center"}],dataColumnsM2:[{key:"Date",title:"日期",width:190,titleAlign:"center",columnAlign:"center"},{key:"Week",title:"星期",width:170,titleAlign:"center",columnAlign:"center"},{key:"Amount",title:"金额",width:190,titleAlign:"center",columnAlign:"center"},{key:"Area",title:"面积",width:190,titleAlign:"center",columnAlign:"center"}],dataColumnsM3:[{key:"Date",title:"日期",width:190,titleAlign:"center",columnAlign:"center"},{key:"Week",title:"星期",width:170,titleAlign:"center",columnAlign:"center"},{key:"inwt",title:"入库重量",width:190,titleAlign:"center",columnAlign:"center"},{key:"inamt",title:"入库金额",width:190,titleAlign:"center",columnAlign:"center"},{key:"outwt",title:"出库重量",width:190,titleAlign:"center",columnAlign:"center"},{key:"outamt",title:"出库金额",width:190,titleAlign:"center",columnAlign:"center"}],dataColumnsM4:[{key:"Date",title:"日期",width:190,titleAlign:"center",columnAlign:"center"},{key:"Week",title:"星期",width:170,titleAlign:"center",columnAlign:"center"},{key:"inamt",title:"入库金额",width:190,titleAlign:"center",columnAlign:"center"},{key:"outamt",title:"出库金额",width:190,titleAlign:"center",columnAlign:"center"}],dataColumnsM5:[{key:"Date",title:"日期",width:190,titleAlign:"center",columnAlign:"center"},{key:"Week",title:"星期",width:170,titleAlign:"center",columnAlign:"center"},{key:"Gathering_Amount",title:"收入",width:190,titleAlign:"center",columnAlign:"center"},{key:"Gathering_Amount",title:"支出",width:190,titleAlign:"center",columnAlign:"center"}],dataColumnsM6:[{key:"Date",title:"日期",width:190,titleAlign:"center",columnAlign:"center"},{key:"Week",title:"星期",width:170,titleAlign:"center",columnAlign:"center"},{key:"TranFee_Amount",title:"金额",width:400,titleAlign:"center",columnAlign:"center"}]}},computed:{currentEchartData:function(){var n=this.$store.getters.currentComFactoryChartData_getter;return n}},onLoad:function(n){this.currentType=n.type,this.getTitle(this.currentType),i=this,this.cWidth=uni.upx2px(750),this.cHeight=uni.upx2px(500),this.getDataFromWebStorage()},mounted:function(){var n=this;this.$nextTick(function(){i.dataTableList=i.$store.getters.currentComFactoryChartData_getter}),this.$nextTick(function(){n.getOtherContentHeight(),setTimeout(function(){var t=n.setTableHeight(!0);n.tableHeight=t},200)})},methods:{getDataFromWebStorage:function(){if(this.series=[{name:"面积",type:"column",data:[]},{name:"金额",type:"line",data:[]}],this.currentEchartData.constructor==Array&&0!=this.currentEchartData.length){switch(this.categories=this.formatDataIntoEchart(this.currentEchartData,"date"),this.currentType){case"order":this.dataColumns=this.dataColumnsM0;var n=this.formatDataIntoEchart(this.currentEchartData,"area");this.series[0].data=n;var t=this.formatDataIntoEchart(this.currentEchartData,"amt");this.series[1].data=t;break;case"delivery":this.dataColumns=this.dataColumnsM2;var e=this.formatDataIntoEchart(this.currentEchartData,"area");this.series[0].data=e;var a=this.formatDataIntoEchart(this.currentEchartData,"amt");this.series[1].data=a;break;case"production":this.dataColumns=this.dataColumnsM1,this.series=[{name:"面积",type:"column",data:[]},{name:"米数",type:"line",data:[]}];var i=this.formatDataIntoEchart(this.currentEchartData,"area");this.series[0].data=i;var r=this.formatDataIntoEchart(this.currentEchartData,"amt");this.series[1].data=r;break;case"basePaper":this.dataColumns=this.dataColumnsM3,this.series=[{name:"入库总量",type:"column",data:[]},{name:"入库金额",type:"line",data:[]},{name:"出库重量",type:"column",data:[]},{name:"出库金额",type:"line",data:[]}];var s=this.formatDataIntoEchart(this.currentEchartData,"inwt");this.series[0].data=s;var o=this.formatDataIntoEchart(this.currentEchartData,"amt");this.series[1].data=o;var c=this.formatDataIntoEchart(this.currentEchartData,"outwt");this.series[2].data=c;var l=this.formatDataIntoEchart(this.currentEchartData,"outamt");this.series[3].data=l;break;case"subMaterial":this.dataColumns=this.dataColumnsM4,this.series=[{name:"入库金额",type:"line",data:[]},{name:"出库金额",type:"line",data:[]}];var u=this.formatDataIntoEchart(this.currentEchartData,"amt");this.series[0].data=u;var h=this.formatDataIntoEchart(this.currentEchartData,"outamt");this.series[1].data=h;break;case"inoutCome":this.dataColumns=this.dataColumnsM5,this.series=[{name:"收入",type:"line",data:[]},{name:"支出",type:"line",data:[]}];var d=this.formatDataIntoEchart(this.currentEchartData,"amt");this.series[0].data=d;var m=this.formatDataIntoEchart(this.currentEchartData,"outamt");this.series[1].data=m;break;case"transportation":this.dataColumns=this.dataColumnsM6,this.series=[{name:"运费",type:"line",data:[]}];var g=this.formatDataIntoEchart(this.currentEchartData,"amt");this.series[0].data=g;break}this.setChartDataConfig()}},formatDataIntoEchart:function(n,t){var e=[];for(var a in n){var i=n[a],r=n[a].Date,c=this.getModeArea(i),l=this.getModeAmt(i),u=this.getModeOutAmt(i),h=this.getModeOutWt(i),d=this.getModeInWt(i),m={};"date"==t&&(m.date=r),"area"==t&&((isNaN(c)||0==c)&&(c=0),m.area=c),"amt"==t&&((isNaN(l)||0==l)&&(l=0),m.amt=l),"outamt"==t&&((isNaN(u)||0==u)&&(u=0),m.outAmt=u),"outwt"==t&&((isNaN(h)||0==h)&&(h=0),m.outAmt=h),"inwt"==t&&((isNaN(d)||0==d)&&(d=0),m.outAmt=d);var g=(0,o.default)(m);e.push.apply(e,(0,s.default)(g))}return e},getModeArea:function(n){switch(this.currentMode){case"0":case"1":case"2":return(0,r.default)(n.Area);case"3":case"4":case"5":case"6":return 0;default:return(0,r.default)(n.Area)}},getModeAmt:function(n){switch(this.currentMode){case"0":return(0,r.default)(n.Amount);case"1":return(0,r.default)(n.Qty);case"2":return(0,r.default)(n.Amount);case"3":case"4":return(0,r.default)(n.inamt);case"5":return(0,r.default)(n.Gathering_Amount);case"6":return(0,r.default)(n.TranFee_Amount);default:return 0}},getModeOutAmt:function(n){switch(this.currentMode){case"0":case"1":case"2":case"6":return 0;case"3":case"4":return(0,r.default)(n.outamt);case"5":return(0,r.default)(n.SPay_Amount);default:return 0}},getModeInWt:function(n){switch(this.currentMode){case"0":case"1":case"2":case"4":case"5":case"6":return 0;case"3":return(0,r.default)(n.inwt);default:return 0}},getModeOutWt:function(n){switch(this.currentMode){case"0":case"1":case"2":case"4":case"5":case"6":return 0;case"3":return(0,r.default)(n.outwt);default:return 0}},getRamdon:function(n,t){var e=n-t+1;return Math.abs(Math.floor(Math.random()*e))+n},getTitle:function(n){switch(n){case"order":this.currentMode="0",this.dataColumns=this.dataColumnsM0,this.currentTitlefReport="本月订单",this.currentTextOfReport="订单(面积、金额)对照";break;case"production":this.currentMode="1",this.legendData=["面积","米数",""],this.dataColumns=this.dataColumnsM1,this.currentTitlefReport="本月生产",this.currentTextOfReport="生产(面积、米数)对照";break;case"delivery":this.currentMode="0",this.dataColumns=this.dataColumnsM2,this.currentTitlefReport="本月送货",this.currentTextOfReport="送货(面积、金额)对照";break;case"basePaper":this.currentMode="3",this.legendData=["","入库金额","出库金额","入库重量","出库重量"],this.dataColumns=this.dataColumnsM3,this.currentTitlefReport="本月原纸",this.currentTextOfReport="原纸(金额)对照";break;case"subMaterial":this.currentMode="4",this.legendData=["","入库金额","出库金额","",""],this.dataColumns=this.dataColumnsM4,this.currentTitlefReport="本月辅料",this.currentTextOfReport="辅料(金额)对照";break;case"inoutCome":this.currentMode="5",this.legendData=["","收入","支出","",""],this.dataColumns=this.dataColumnsM5,this.currentTitlefReport="本月收支",this.currentTextOfReport="收支(金额)对照";break;case"transportation":this.currentMode="6",this.legendData=["","金额","","",""],this.dataColumns=this.dataColumnsM6,this.currentTitlefReport="本月运输",this.currentTextOfReport="运输(金额)对照";break}},setChartDataConfig:function(){var n={categories:[],series:[]};n.categories=i.categories,n.series=i.series,n.series.length,i.showColumn("canvasColumn",n)},showColumn:function(n,t){d=new l.default({$this:i,canvasId:n,type:"mix",fontSize:11,padding:[5,15,15,15],legend:{show:!0,position:"top",float:"center",lineHeight:11,itemGap:30,padding:10,margin:5,borderWidth:1},dataLabel:!1,dataPointShape:!0,background:"#FFFFFF",pixelRatio:i.pixelRatio,categories:t.categories,series:t.series,animation:!0,enableScroll:!0,xAxis:{disableGrid:!1,type:"grid",gridType:"dash",itemCount:4,scrollShow:!0,scrollAlign:"left"},yAxis:{data:[{calibration:!0,position:"left",titleFontSize:12}],gridType:"dash",dashLength:4,splitNumber:5},width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,extra:{column:{type:"group",width:i.cWidth*i.pixelRatio*.45/t.categories.length}}})},touchColumn:function(n){d.scrollStart(n)},moveColumn:function(n){d.scroll(n)},touchEndColumn:function(n){d.scrollEnd(n),d.touchLegend(n,{animation:!0}),d.showToolTip(n,{format:function(n,t){return t+" "+n.name+":"+n.data}})},changeData:function(){if((0,u.isJSON)(i.textarea)){var n=JSON.parse(i.textarea);d.updateData({series:n.series,categories:n.categories,scrollPosition:"right",animation:!1})}else uni.showToast({title:"数据格式错误"})}}};t.default=m},9319:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[e("template",{attrs:{slot:"content"},slot:"content"},[n._v(n._s(n.currentTitlefReport))])],2),e("v-uni-view",{staticClass:"bodyContentHeight qiun-columns"},[e("v-uni-view",{staticClass:"qiun-charts"},[e("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasColumn",id:"canvasColumn","disable-scroll":"true"},on:{touchstart:function(t){arguments[0]=t=n.$handleEvent(t),n.touchColumn.apply(void 0,arguments)},touchmove:function(t){arguments[0]=t=n.$handleEvent(t),n.moveColumn.apply(void 0,arguments)},touchend:function(t){arguments[0]=t=n.$handleEvent(t),n.touchEndColumn.apply(void 0,arguments)}}})],1)],1),e("zTable",{attrs:{tableHeight:n.tableHeight,showLoading:!1,emptyText:n.errorContent,tableData:n.dataTableList,columns:n.dataColumns}})],1)},i=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return i})},bce1:function(n,t,e){"use strict";var a=e("118b"),i=e.n(a);i.a},f0cb:function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/*样式的width和height一定要与定义的cWidth和cHeight相对应*/.qiun-charts[data-v-cad8f3be]{width:%?750?%;height:%?500?%;background-color:#fff}.charts[data-v-cad8f3be]{width:%?750?%;height:%?500?%;background-color:#fff}",""])}}]);