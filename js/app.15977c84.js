(function(e){function t(t){for(var i,s,l=t[0],o=t[1],c=t[2],u=0,h=[];u<l.length;u++)s=l[u],a[s]&&h.push(a[s][0]),a[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);d&&d(t);while(h.length)h.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(i=!1)}i&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},a={app:0},r=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"494770a4"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,i){n=a[e]=[t,i]});t.push(n[2]=i);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.src=s(e),r=function(t){o.onerror=o.onload=null,clearTimeout(c);var n=a[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+i+": "+r+")");s.type=i,s.request=r,n[1](s)}a[e]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:o})},12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/table_schulte/",l.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},"087e":function(e,t,n){"use strict";var i=n("2ac7"),a=n.n(i);a.a},"0bd7":function(e,t,n){},"2ac7":function(e,t,n){},"3be4":function(e,t,n){},"4e4a":function(e,t,n){"use strict";var i=n("8555"),a=n.n(i);a.a},"502d":function(e,t,n){"use strict";var i=n("3be4"),a=n.n(i);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],s=(n("034f"),n("2877")),l={},o=Object(s["a"])(l,a,r,!1,null,null,null),c=o.exports,u=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("TableResizer"),n("Menu")],1)},h=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-holder"},[n("vue-draggable-resizable",{attrs:{w:e.tableDemensions.width,h:e.tableDemensions.height,x:e.x,y:e.y,parent:!0,"min-width":e.tableVariabilitySizes.minWidth,"min-height":e.tableVariabilitySizes.minHeight,"max-width":e.tableVariabilitySizes.maxWidth,"max-height":e.tableVariabilitySizes.maxHeight,"class-name":"table-resizer","class-name-resizing":"table-resizer-resize"},on:{dragging:e.onDrag,resizing:e.onResize,resizestop:e.onResizeStop}},[n("Table",{attrs:{isResizing:e.isResizing}})],1)],1)},f=[],b=n("cebc"),p=n("2f62"),g=n("fb19"),v=n.n(g),_=(n("278f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"table",style:{width:e.tableSize.width+"px",height:e.tableSize.height+"px",fontSize:e.setTableFontSize}},[e.playingField.length?n("div",e._l(e.playingField,function(t){return n("TableCell",{key:t.value,attrs:{cell:t,userAnswerAction:e.userAnswer,isResizing:e.isResizing}})}),1):e._e()])])}),S=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"transition-"+e.answerIsCorrect}},[n("div",{key:e.timeStamp,staticClass:"table-cell",class:[e.isResizing?"resizing":""],style:e.cell.stylePosition,on:{click:function(t){return e.userChoiseValue(e.cell)}}},[n("div",{staticClass:"table-cell__holder"},[e._v("\n      "+e._s(e.cell.value)+"\n    ")])])])},z=[],x={name:"TableCell",props:["cell","userAnswerAction","isResizing"],data:function(){return{answerIsCorrect:null,timeStamp:null}},watch:{userAnswerAction:function(e,t){this.cell.value===e.value&&(this.answerIsCorrect=e.answerIsCorrect,this.timeStamp=e.timeStamp)}},computed:Object(b["a"])({},Object(p["c"])({})),methods:Object(b["a"])({},Object(p["b"])({userChoiseValue:"game/userChoiseValue"}))},y=x,j=(n("db94"),Object(s["a"])(y,w,z,!1,null,"314472c6",null)),E=j.exports,O={name:"Table",components:{TableCell:E},props:["isResizing"],data:function(){return{}},beforeCreate:function(){this.$store.dispatch("config/calcTableDimension")},beforeMount:function(){this.$store.dispatch("game/startGame")},computed:Object(b["a"])({},Object(p["c"])({tableSize:"config/tableSize",playingField:"game/playingField",userAnswer:"game/userAnswer",tableSelectedSize:"config/tableSelectedSize"}),{setTableFontSize:function(){return this.tableSelectedSize<=7?"2.5rem":this.tableSelectedSize<=11?"1.7rem":"1.2rem"}}),methods:Object(b["a"])({},Object(p["b"])({}))},T=O,A=(n("502d"),Object(s["a"])(T,_,S,!1,null,"3f42d576",null)),M=A.exports,R={name:"TableResizer",components:{"vue-draggable-resizable":v.a,Table:M},data:function(){return{isResizing:!1,x:0,y:0}},created:function(){this.centerTable(),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},mounted:function(){console.log(this)},methods:{onResize:function(e,t,n,i){this.isResizing=!0,this.x=e,this.y=t,this.$store.dispatch("config/updateTableDimension",{width:n,height:i})},onResizeStop:function(e,t,n,i){this.isResizing=!1},onDrag:function(e,t){this.x=e,this.y=t},centerTable:function(){var e=window.innerWidth,t=window.innerHeight,n=this.tableDemensions,i=n.height,a=n.width,r=(e-a)/2,s=(t-i)/2;this.x=r,this.y=s},handleResize:function(e){this.centerTable()}},computed:Object(b["a"])({},Object(p["c"])({tableDemensions:"config/tableSize",tableVariabilitySizes:"config/tableVariabilitySizes"}))},k=R,C=(n("9424"),Object(s["a"])(k,m,f,!1,null,null,null)),G=C.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu"},[n("div",{staticClass:"menu__toggle-button",class:{active:e.isExpanded},on:{click:e.expandMenu}},[n("IconMenuArrow")],1),n("div",{staticClass:"menu__holder",class:{active:e.isExpanded}},[n("div",{staticClass:"menu__timer"},[n("span",[e._v(e._s(e.timerObj.hours))]),e._v(":"),n("span",[e._v(e._s(e.timerObj.minutes))]),e._v(":"),n("span",[e._v(e._s(e.timerObj.seconds))]),e._v(":"),n("span",[e._v(e._s(e.timerObj.milliseconds))])]),n("div",{staticClass:"menu__right-unswer",class:{hide:null===e.nextRightValue}},[e._v("\n      The "+e._s(1===e.nextRightValue?"first":"next")+" choice should be "),n("b",[e._v('"'+e._s(e.nextRightValue)+'"')])]),e._m(0),n("TableSizes"),n("br"),n("v-button",{staticClass:"menu__reset-button",attrs:{markup:"inverse"},on:{click:e.shakeGameField}},[n("IconMenuReset"),n("span",[e._v("Reset")])],1)],1)])},F=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu__title"},[n("span",[e._v("Options")])])}],W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"table-size-holder"},e._l(e.tableSizes,function(t,i){return n("v-button",{key:i,staticClass:"table-size-holder__item",attrs:{markup:t===e.tableSelectedSize?"active":"",small:""},on:{click:function(n){return e.updateTableSize(t)}}},[n("span",{staticClass:"table-size-holder__text"},[e._v(e._s(t)+"x"+e._s(t))])])}),1)},V=[],I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"v-btn",class:e.customClass,attrs:{id:e.id,name:e.name,disabled:e.disabled,small:e.small,markup:e.markup},on:{click:e.handleClick}},[e._t("default")],2)},D=[],P={name:"v-button",props:{id:{type:String,default:null},customClass:{type:String,default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},small:{type:Boolean,default:!1},markup:{type:String,default:"default"}},methods:{handleClick:function(e){this.$emit("click",e)}}},$=P,L=(n("087e"),Object(s["a"])($,I,D,!1,null,null,null)),N=L.exports,B={name:"TableSizes",components:{"v-button":N},computed:Object(b["a"])({},Object(p["c"])({tableSelectedSize:"config/tableSelectedSize",tableSizes:"config/tableSizes"})),methods:Object(b["a"])({},Object(p["b"])({updateTableSize:"config/updateTableSize"}))},U=B,J=(n("89f0"),Object(s["a"])(U,W,V,!1,null,"8af5a1e0",null)),Z=J.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"40",height:"40",viewBox:"0 0 192 192"}},[n("g",{staticStyle:{"mix-blend-mode":"normal"},attrs:{fill:"none","fill-rule":"nonzero",stroke:"none","stroke-width":"1","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10","stroke-dasharray":"","stroke-dashoffset":"0","font-family":"none","font-weight":"none","font-size":"none","text-anchor":"none"}},[n("path",{attrs:{d:"M0,192v-192h192v192z",fill:"none"}}),n("g",{attrs:{fill:"#fff"}},[n("path",{attrs:{d:"M96,55.4375l-48.5625,48.5625l12,12l36.5625,-36.5625l36.5625,36.5625l12,-12z"}})])])])},X=[],Y={},K=Object(s["a"])(Y,q,X,!1,null,null,null),Q=K.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"16",height:"16",viewBox:"0 0 192 192"}},[n("g",[n("g",{staticStyle:{"mix-blend-mode":"normal"},attrs:{fill:"none","fill-rule":"nonzero",stroke:"none","stroke-width":"1","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10","stroke-dasharray":"","stroke-dashoffset":"0","font-family":"none","font-weight":"none","font-size":"none","text-anchor":"none"}},[n("path",{attrs:{d:"M0,192v-192h192v192z",fill:"none"}}),n("path",{attrs:{d:"",fill:"none"}}),n("path",{attrs:{d:"",fill:"none"}}),n("g",{staticClass:"svg-path"},[n("g",[n("path",{attrs:{d:"M60.75,24l11.75,16h31.5c26.59375,0 48,21.40625 48,48v32h-24l32,43.75l32,-43.75h-24v-32c0,-35.25 -28.75,-64 -64,-64zM32,28.25l-32,43.75h24v32c0,35.25 28.75,64 64,64h43.25l-11.75,-16h-31.5c-26.59375,0 -48,-21.40625 -48,-48v-32h24z"}})])])])])])},te=[],ne={},ie=Object(s["a"])(ne,ee,te,!1,null,null,null),ae=ie.exports,re={name:"Menu",components:{IconMenuReset:ae,IconMenuArrow:Q,TableSizes:Z,"v-button":N},data:function(){return{isExpanded:!1}},computed:Object(b["a"])({},Object(p["c"])({timerObj:"stats/timerObj",nextRightValue:"game/nextRightValue"})),methods:Object(b["a"])({},Object(p["b"])({shakeGameField:"game/shakeGameField"}),{expandMenu:function(){this.isExpanded=!this.isExpanded}})},se=re,le=(n("4e4a"),Object(s["a"])(se,H,F,!1,null,"5facf7ca",null)),oe=le.exports,ce={name:"home",components:{TableResizer:G,Menu:oe}},ue=ce,de=(n("cccb"),Object(s["a"])(ue,d,h,!1,null,null,null)),he=de.exports;i["a"].use(u["a"]);var me,fe=new u["a"]({mode:"history",base:"/table_schulte/",routes:[{path:"/",name:"home",component:he},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),be=n("795b"),pe=n.n(be),ge=(n("96cf"),n("3b8d")),ve=n("bd86"),_e="UPDATE_TABLE_SIZE",Se="UPDATE_TABLE_DIMENSION",we="GAME_PREPEARE",ze="GAME_CREATE_GAME_FIELD",xe="GAME_RECALCULATE_GAME_FIELD",ye="GAME_RESIZE_GAME_FIELD",je="GAME_READY",Ee="GAME_END",Oe="GAME_GET_RIGHT_ANSWERS_VALUE",Te="GAME_GET_NEXT_RIGHT_ANSWER",Ae="GAME_USER_ANSWER",Me="STATS_START_TIMER",Re="STATS_END_TIMER",ke="STATS_RESET_TIMER",Ce=n("5176"),Ge=n.n(Ce),He=n("a8db"),Fe=n("2ef0"),We=n.n(Fe);function Ve(e){if(We.a.size(e)<3)throw new Error("func createPlayingField do not have all args");for(var t=e.rows,n=e.cells,i=e.tableWidth,a=e.tableHeight,r=Ie(t,n),s=function(){return De(r)},l=[],o=0;o<t;o++){l[o]=[];for(var c=0;c<n;c++){var u=s(),d=Pe(o,c,i,a,t,n);l[o][c]={value:u,stylePosition:d,position:{cell:c,row:o}}}}var h=We.a.flatten(l);return h}function Ie(e,t){var n=e*t,i=We.a.shuffle(We.a.range(n).map(function(e){return e+1}));return i}function De(e){var t=e.length,n=We.a.random(0,t-1),i=e[n];return We.a.pull(e,i),i}function Pe(e,t,n,i,a,r){var s=We.a.ceil(n/a,0),l=We.a.ceil(i/r,0),o=We.a.ceil(t*s,0),c=We.a.ceil(e*l,0),u=We.a.random(1,10);return{width:s+"px",height:l+"px",left:o+"px",top:c+"px","z-index":u}}function $e(e,t){var n=We.a.shuffle(Ve(t)),i=e.map(function(e,t){var i=n[t],a=(i.value,Object(He["a"])(i,["value"]));return Ge()({},e,a)});return i}function Le(e){return We.a.range(Math.pow(e,2)).map(function(e){return e+1})}function Ne(e,t){var n=t.tableSelectedSize,i=t.tableWidth,a=t.tableHeight,r=We.a.ceil(i/n,0),s=We.a.ceil(a/n,0);return e.map(function(e){var t=e.position,n=e.stylePosition,i=We.a.ceil(t.cell*r,0),a=We.a.ceil(t.row*s,0),l=Object(b["a"])({},n,{width:r+"px",height:s+"px",left:i+"px",top:a+"px"});return Object(b["a"])({},e,{stylePosition:l})})}var Be,Ue,Je={isGameReady:!1,isPrepareGame:!1,isGameFinished:!1,playingField:[],rightAnswersVal:[],userAnswer:null},Ze=(me={},Object(ve["a"])(me,we,function(e){e.isPrepareGame=!0,e.isGameFinished=!1}),Object(ve["a"])(me,ze,function(e,t){e.playingField=t}),Object(ve["a"])(me,xe,function(e,t){e.playingField=t}),Object(ve["a"])(me,ye,function(e,t){e.playingField=t}),Object(ve["a"])(me,je,function(e){e.isPrepareGame=!1,e.isGameReady=!0}),Object(ve["a"])(me,Ee,function(e){e.isGameReady=!1,e.isGameFinished=!0}),Object(ve["a"])(me,Oe,function(e,t){e.rightAnswersVal=t}),Object(ve["a"])(me,Te,function(e){e.rightAnswersVal.shift()}),Object(ve["a"])(me,Ae,function(e,t){e.userAnswer=t}),me),qe={startGame:function(){var e=Object(ge["a"])(regeneratorRuntime.mark(function e(t){var n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,i=t.dispatch,n(we),e.next=4,i("prepareGame");case 4:n(je);case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),endGame:function(){var e=Object(ge["a"])(regeneratorRuntime.mark(function e(t){var n,i,a,r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,i=t.dispatch,a=t.rootGetters,t.rootState,n(Ee),r=a["stats/timerObj"],s="Congratulations, your time - ".concat(r.hours,":").concat(r.minutes,":").concat(r.seconds,":").concat(r.milliseconds," !"),i("stats/resetTimeMark",null,{root:!0}),alert(s),i("shakeGameField");case 7:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),prepareGame:function(e){var t=e.commit,n=(e.dispatch,e.state,e.rootState);return new pe.a(function(e){t(ze,{});var i=n.config,a=i.tableHeight,r=i.tableWidth,s=i.tableSelectedSize,l=Ve({rows:s,cells:s,tableWidth:r,tableHeight:a});t(ze,l),t(Oe,Le(s)),e()})},shakeGameField:function(e){var t=e.commit,n=e.dispatch,i=e.state,a=e.rootState;t(we);var r=i.playingField,s=a.config,l=s.tableHeight,o=s.tableWidth,c=s.tableSelectedSize,u=$e(r,{rows:c,cells:c,tableWidth:o,tableHeight:l});t(xe,u),t(Oe,Le(c)),n("stats/resetTimeMark",null,{root:!0}),t(je)},userChoiseValue:function(e,t){var n=e.commit,i=e.dispatch,a=e.state,r=(e.rootState,a.rightAnswersVal),s=(a.userAnswer,r[0]),l=s===t.value,o=Object(b["a"])({},t,{answerIsCorrect:l,timeStamp:+new Date});n(Ae,o),i("stats/commitTimeMark",null,{root:!0}),l&&i("userAnswerCorrect")},userAnswerCorrect:function(e){var t=e.commit,n=e.dispatch,i=e.state,a=(e.rootState,i.rightAnswersVal);t(Te),0===a.length&&n("endGame")},resizeGameField:function(e){var t=e.commit,n=(e.dispatch,e.state),i=e.rootState,a=n.playingField,r=i.config,s=r.tableHeight,l=r.tableWidth,o=r.tableSelectedSize;t(we);var c=Ne(a,{tableSelectedSize:o,tableWidth:l,tableHeight:s});t(ye,c),t(je)}},Xe={playingField:function(e){return e.playingField},userAnswer:function(e){return e.userAnswer},nextRightValue:function(e){return e.rightAnswersVal.length?e.rightAnswersVal[0]:null}},Ye={namespaced:!0,state:Je,mutations:Ze,actions:qe,getters:Xe},Ke=Ye,Qe={tableWidth:700,tableHeight:700,tableMinHeight:300,tableMinWidth:300,tableMaxHeight:1920,tableMaxWidth:1080,tableSizes:[3,4,5,6,7,8,9,10,11,12,13,14],tableSelectedSize:5},et=(Be={},Object(ve["a"])(Be,Se,function(e,t){t.width&&t.height&&(e.tableWidth=t.width,e.tableHeight=t.height),t.maxWidth&&t.maxHeight&&(e.tableMaxHeight=t.maxHeight,e.tableMaxWidth=t.maxWidth)}),Object(ve["a"])(Be,_e,function(e,t){e.tableSelectedSize=t}),Be),tt={updateTableSize:function(e,t){var n=e.commit,i=e.dispatch,a=e.state,r=a.tableSelectedSize;n(_e,t),i(t===r?"game/shakeGameField":"game/startGame",null,{root:!0})},calcTableDimension:function(e){var t=e.commit,n=document.body.clientWidth,i=document.body.clientHeight,a={maxWidth:n,maxHeight:i};n<=1024&&(a.width=450,a.height=450),n<=480&&(a.width=300,a.height=300),t(Se,a)},updateTableDimension:function(e,t){var n=e.commit,i=e.dispatch,a=t.width,r=t.height;n(Se,{width:a,height:r}),i("game/resizeGameField",null,{root:!0})}},nt={tableSize:function(e){return{width:e.tableWidth,height:e.tableHeight}},tableVariabilitySizes:function(e){return{minWidth:e.tableMinWidth,minHeight:e.tableMinHeight,maxWidth:e.tableMaxWidth,maxHeight:e.tableMaxWidth}},tableSelectedSize:function(e){return e.tableSelectedSize},tableSizes:function(e){return e.tableSizes}},it={namespaced:!0,state:Qe,mutations:et,actions:tt,getters:nt},at=it,rt=n("e814"),st=n.n(rt);function lt(e){return("0"+e).slice(-2)}function ot(e){return{milliseconds:lt(st()(e%1e3/100)),seconds:lt(Math.floor(e/1e3%60)),minutes:lt(Math.floor(e/6e4%60)),hours:lt(Math.floor(e/36e5%24))}}var ct={timerHolder:null,timer:0},ut=(Ue={},Object(ve["a"])(Ue,Me,function(e){e.timerHolder=setInterval(function(){e.timer+=100},100)}),Object(ve["a"])(Ue,Re,function(e){clearInterval(e.timerHolder)}),Object(ve["a"])(Ue,ke,function(e){clearInterval(e.timerHolder),e.timerHolder=null,e.timer=0}),Ue),dt={commitTimeMark:function(e){var t=e.commit,n=(e.dispatch,e.state);e.rootState;n.timerHolder||t(Me)},resetTimeMark:function(e){var t=e.commit;t(ke)}},ht={timerObj:function(e){return ot(e.timer)}},mt={namespaced:!0,state:ct,mutations:ut,actions:dt,getters:ht},ft=mt;i["a"].use(p["a"]);var bt=new p["a"].Store({modules:{game:Ke,config:at,stats:ft}});i["a"].config.productionTip=!1,new i["a"]({router:fe,store:bt,render:function(e){return e(c)}}).$mount("#app")},"64a9":function(e,t,n){},"84d8":function(e,t,n){},8555:function(e,t,n){},"89f0":function(e,t,n){"use strict";var i=n("0bd7"),a=n.n(i);a.a},9424:function(e,t,n){"use strict";var i=n("84d8"),a=n.n(i);a.a},a7b5:function(e,t,n){},cccb:function(e,t,n){"use strict";var i=n("d563"),a=n.n(i);a.a},d563:function(e,t,n){},db94:function(e,t,n){"use strict";var i=n("a7b5"),a=n.n(i);a.a}});
//# sourceMappingURL=app.15977c84.js.map