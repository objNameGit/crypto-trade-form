(function(t){function e(e){for(var r,a,c=e[0],o=e[1],s=e[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&p.push(u[a][0]),u[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);m&&m(e);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==u[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},u={app:0},i=[];function c(t){return o.p+"js/"+({"easter-egg":"easter-egg"}[t]||t)+"."+{"easter-egg":"cff77eb0"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"easter-egg":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({"easter-egg":"easter-egg"}[t]||t)+"."+{"easter-egg":"c020abf3"}[t]+".css",u=o.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===u))return e()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){s=p[c],l=s.getAttribute("data-href");if(l===r||l===u)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var r=e&&e.target&&e.target.src||u,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],m.parentNode.removeChild(m),n(i)},m.href=u;var y=document.getElementsByTagName("head")[0];y.appendChild(m)})).then((function(){a[t]=0})));var r=u[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=u[t]=[e,n]}));e.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=c(t);var p=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(m);var n=u[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}u[t]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"403f":function(t,e,n){"use strict";n("6cdd")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"app"},[t.isVisible?n("div",{staticClass:"app__link hidden-link unselectable",on:{click:t.toEasterEgg}},[t._v(" Перейти к Foo ")]):t._e(),n("router-view")],1)},u=[],i=(n("b0c0"),{name:"App",computed:{isVisible:function(){return"EasterEgg"!==this.$route.name}},data:function(){return{counter:0}},methods:{toEasterEgg:function(){var t=2;this.counter+=1,this.counter>t&&(this.$router.push("/easter-egg"),this.counter=0)}}}),c=i,o=(n("034f"),n("2877")),s=n("6544"),l=n.n(s),p=n("7496"),m=Object(o["a"])(c,a,u,!1,null,null,null),y=m.exports;l()(m,{VApp:p["a"]});n("d3b7"),n("3ca3"),n("ddb0");var f=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"ma-auto",attrs:{"min-width":250,"max-width":450,elevation:"2",outlined:""}},[n("v-card-text",{staticClass:"text-h5"},[n("Wallet"),n("TradeForm",{attrs:{priceCurrency:t.getPriceCurrency(),amountCurrency:t.getAmountCurrency()}})],1)],1)},h=[],g=n("5530"),v=n("2f62"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-container"},[n("v-form",[n("div",{staticClass:"form-container__input-list"},[n("CustomInput",{attrs:{type:"Float",inputName:"Price",currencyName:t.price.currencyName,calculateSettings:t.calculateSettings,inputValue:t.priceQuantity},on:{"update:inputValue":function(e){t.priceQuantity=e},"update:input-value":function(e){t.priceQuantity=e}}}),n("CustomInput",{attrs:{type:"Float",inputName:"Amount",currencyName:t.amount.currencyName,calculateSettings:t.calculateSettings,inputValue:t.amountQuantity},on:{"update:inputValue":function(e){t.amountQuantity=e},"update:input-value":function(e){t.amountQuantity=e}}}),n("CustomInput",{attrs:{type:"Float",inputName:"Total ~",currencyName:t.price.currencyName,placeholder:"min 0.005",calculateSettings:t.calculateSettings,inputValue:t.totalSum},on:{"update:inputValue":function(e){t.totalSum=e},"update:input-value":function(e){t.totalSum=e}}})],1),n("div",{staticClass:"form-container__action-button-list action-button-list"},[n("v-btn",{staticClass:"action-button-list__buy-button",attrs:{disabled:!this.isFormValid||t.operationSellInProgress,loading:t.operationBuyInProgress,color:"success",width:"70%","button-list":"",elevation:"0"},on:{click:t.buyCurrency}},[t._v(" "+t._s(t.operationType.buy)+" ")]),n("v-btn",{staticClass:"action-button-list__sale-button",attrs:{disabled:!this.isFormValid||t.operationBuyInProgress,loading:t.operationSellInProgress,color:"red",elevation:"0",depressed:"",outlined:""},on:{click:t.sellCurrency}},[t._v(" "+t._s(t.operationType.sell)+" ")])],1)])],1)},_=[],C=n("1da1"),w=(n("96cf"),n("7db0"),n("bc3a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-input-container"},[n("div",{staticClass:"custom-input-container__custom-input custom-input"},[n("div",{staticClass:"custom-input__label custom-input_margin_right"},[n("label",{attrs:{for:t.inputName}},[t._v(" "+t._s(t.inputName)+" ")])]),n("input",{ref:"customInputQuantity",staticClass:"custom-input__input-field custom-input_margin_right",attrs:{type:"number",min:"0",max:"1000000000000000",id:t.inputName,placeholder:t.placeholder,step:t.calculateSettings.step},domProps:{value:t.inputValue},on:{input:function(e){return t.formatInputString(e.target.value)},change:function(e){return t.updateValue(e.target.value)}}}),n("div",{staticClass:"custom-input__currency-name custom-input_margin_right"},[n("label",{attrs:{for:t.inputName}},[t._v(" "+t._s(t.currencyName)+" ")])])]),n("div",{staticClass:"custom-input__input-controls input-controls"},[n("button",{staticClass:"input-controls__button increase-button",attrs:{type:"button"},on:{click:t.stepUp}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-chevron-up")])],1),n("hr",{staticClass:"input-controls__division"}),n("button",{staticClass:"input-controls__button button-decrease",attrs:{type:"button",disabled:t.isDecreaseDisabled},on:{click:t.stepDown}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-chevron-down")])],1)])])}),S=[],N=(n("a9e3"),n("b680"),{methods:{getToFixedValue:function(t,e){return parseFloat(t.toFixed(e))},isNegativeValue:function(t){return t<0}}}),V={props:{type:{type:String,required:!0},inputName:{type:String,required:!0},inputValue:{type:Number,required:!0,default:0},currencyName:{type:String,required:!0},placeholder:{type:String,default:""},calculateSettings:{type:Object,required:!0}},computed:{isDecreaseDisabled:function(){return 0===this.inputValue}},mixins:[N],methods:{stepUp:function(){this.$refs.customInputQuantity.stepUp();var t=this.$refs.customInputQuantity.value;this.updateValue(t)},stepDown:function(){this.$refs.customInputQuantity.stepDown();var t=this.$refs.customInputQuantity.value;this.updateValue(t)},formatInputString:function(t){var e=null;e=""===t?0:t<0?Math.abs(t):t,this.$refs.customInputQuantity.value=e},updateValue:function(t){var e=parseFloat(t);this.$emit("update:inputValue",e)}},mounted:function(){this.$refs.customInputQuantity.value=""}},x=V,I=(n("c854"),n("132d")),q=Object(o["a"])(x,w,S,!1,null,"7ef895c6",null),O=q.exports;l()(q,{VIcon:I["a"]});var Q={sell:"SELL",buy:"BUY"},j={inProgress:"inProgress",ended:"ended"},T={name:"TradeForm",props:{priceCurrency:{type:String,required:!1},amountCurrency:{type:String,required:!1}},components:{CustomInput:O},mixins:[N],computed:Object(g["a"])(Object(g["a"])({},Object(v["b"])(["calculateSettings","wallet"])),{},{priceQuantity:{get:function(){return this.price.quantity},set:function(t){this.price.quantity=t}},amountQuantity:{get:function(){return this.amount.quantity},set:function(t){this.amount.quantity=t}},isFormValid:function(){return 0!==this.amountQuantity&&0!==this.priceQuantity&&0!==this.totalSum},operationType:function(){return Q},operationBuyInProgress:function(){return this.operationInfo.status===j.inProgress&&this.operationInfo.operation===Q.buy},operationSellInProgress:function(){return this.operationInfo.status===j.inProgress&&this.operationInfo.operation===Q.sell}}),data:function(){return{price:{currencyName:"",quantity:0},amount:{currencyName:"",quantity:0},totalSum:0,operationInfo:{status:"",operation:""}}},watch:{priceQuantity:function(){this.totalSum=this.getToFixedValue(this.amountQuantity*this.priceQuantity,this.calculateSettings.precision)},amountQuantity:function(){this.totalSum=this.getToFixedValue(this.priceQuantity*this.amountQuantity,this.calculateSettings.precision)},totalSum:function(){this.recalcValues()}},methods:{recalcValues:function(){0!==this.totalSum&&(0!==this.priceQuantity&&(this.amountQuantity=this.getToFixedValue(this.totalSum/this.priceQuantity,this.calculateSettings.precision)),0===this.priceQuantity&&0!==this.amountQuantity&&(this.priceQuantity=this.getToFixedValue(this.totalSum/this.amountQuantity,this.calculateSettings.precision)))},recalcTotalSum:function(t){var e=this.isFormValid?this.getToFixedValue(t/this.priceQuantity,this.calculateSettings.precision):0;return e},getCurrencyFromWallet:function(t){return this.wallet.find((function(e){return e.currencyName===t}))},setActualCurrencyValue:function(t,e){var n=this.getCurrencyFromWallet(t.currencyName),r=e?n.quantity-t.quantity:n.quantity+t.quantity,a=this.getToFixedValue(r,this.calculateSettings.precision);this.$store.dispatch("changeCurrencyInWallet",{currencyName:t.currencyName,quantity:a})},changeCurrencyInWallet:function(t){var e=t.expense,n=t.income;this.setActualCurrencyValue(e,!0),this.setActualCurrencyValue(n,!1)},makeRequset:function(t,e){return Object(C["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return{"Content-Type":"application/json"},"https://test.stock.com",n.next=4,new Promise((function(n){setTimeout((function(){var r=Object(g["a"])({},t);r.status=200,r.operation=e,n(r)}),2e3)})).catch((function(t){alert(t)}));case 4:return r=n.sent,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))()},createBody:function(t){var e={expense:{},income:{}};return t===Q.buy&&(e.expense={currencyName:this.price.currencyName,quantity:this.totalSum},e.income={currencyName:this.amount.currencyName,quantity:this.amountQuantity}),t===Q.sell&&(e.expense={currencyName:this.amount.currencyName,quantity:this.amount.quantity},e.income={currencyName:this.price.currencyName,quantity:this.totalSum}),e},doOperation:function(t){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.operationInfo.status=j.inProgress,e.operationInfo.operation=t,r=e.createBody(t),n.next=5,e.makeRequset(r,t);case 5:return a=n.sent,200===a.status&&e.changeCurrencyInWallet(a),e.operationInfo.status=j.ended,n.abrupt("return",a);case 9:case"end":return n.stop()}}),n)})))()},buyCurrency:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.doOperation(Q.buy);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()},sellCurrency:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.doOperation(Q.sell);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;this.$root.$on("change-custom-input",(function(e){t[e.propsName]=parseFloat(e.value)}))},mounted:function(){this.price.currencyName=this.priceCurrency,this.amount.currencyName=this.amountCurrency}},F=T,k=(n("403f"),n("8336")),P=n("4bd4"),E=Object(o["a"])(F,b,_,!1,null,"1d41f372",null),$=E.exports;l()(E,{VBtn:k["a"],VForm:P["a"]});var L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wallet"},[n("div",{staticClass:"wallet__icon"},[n("v-icon",{attrs:{middle:""}},[t._v("mdi-wallet-outline")])],1),n("div",{staticClass:"wallet__currency-list currency-list currency-list_table"},t._l(t.wallet,(function(e,r){return n("div",{key:r,staticClass:"currency-list__currency currency currency-list_row"},[n("span",{staticClass:"currency__value currency-list_cell darken-3",class:{"warning-color":t.isNegativeValue(e.quantity)}},[t._v(" "+t._s(t._f("dotReplace")(e.quantity))+" ")]),n("span",{staticClass:"currency__name currency-list_cell",style:{color:t.getColor(e.currencyName)}},[t._v(" "+t._s(e.currencyName)+" ")])])})),0)])},A=[],R={methods:{getColor:function(t){return this.currencyColor[t.toLowerCase()]||""}}},W={name:"Wallet",computed:Object(g["a"])({},Object(v["b"])(["wallet","currencyColor"])),mixins:[N,R]},B=W,D=(n("9f6a"),Object(o["a"])(B,L,A,!1,null,"10aaff86",null)),K=D.exports;l()(D,{VIcon:I["a"]});var M={name:"Form",components:{TradeForm:$,Wallet:K},computed:Object(g["a"])({},Object(v["b"])(["currencyList","wallet"])),methods:{toAbout:function(){this.$router.push("about")},getPriceCurrency:function(){return this.currencyList[0].currencyName},getAmountCurrency:function(){return this.currencyList[1].currencyName}}},U=M,H=n("b0af"),J=n("99d9"),Y=Object(o["a"])(U,d,h,!1,null,null,null),z=Y.exports;l()(Y,{VCard:H["a"],VCardText:J["a"]}),r["a"].use(f["a"]);var G=[{path:"/",name:"Home",component:z},{path:"/easter-egg",name:"EasterEgg",component:function(){return n.e("easter-egg").then(n.bind(null,"bd41"))}}],X=new f["a"]({mode:"history",base:"/",routes:G}),Z=X,tt=[{currencyName:"ETH",quantity:0},{currencyName:"KICK",quantity:0}],et=[{currencyName:"ETH",color:""},{currencyName:"KICK"}],nt={eth:"#4caf50",kick:"#c5362b"},rt={step:1e-5,precision:5};r["a"].use(v["a"]);var at=new v["a"].Store({state:{currencyList:et,wallet:tt,currencyColor:nt,calculateSettings:rt},mutations:{setCurrencyList:function(t,e){t.currencyList=e},setCurrencyInWallet:function(t,e){var n=e.currencyName,r=e.quantity,a=t.wallet.find((function(t){return t.currencyName===n}));a.quantity=r}},actions:{changeCurrencyList:function(t,e){var n=t.commit;n("setCurrencyList",e)},changeCurrencyInWallet:function(t,e){var n=t.commit;n("setCurrencyInWallet",e)}},getters:{calculateSettings:function(t){return t.calculateSettings},currencyList:function(t){return t.currencyList},wallet:function(t){return t.wallet},currencyColor:function(t){return t.currencyColor}},modules:{}}),ut=n("f309");r["a"].use(ut["a"]);var it=new ut["a"]({});n("ac1f"),n("5319");function ct(t){var e="";return null===t&&isNaN(t)&&void 0===t||(e=String(t).replace(".",",")),e}r["a"].config.productionTip=!1,r["a"].filter("dotReplace",ct),new r["a"]({router:Z,store:at,vuetify:it,render:function(t){return t(y)}}).$mount("#app")},"5a51":function(t,e,n){},"6cdd":function(t,e,n){},"702b":function(t,e,n){},"85ec":function(t,e,n){},"9f6a":function(t,e,n){"use strict";n("5a51")},c854:function(t,e,n){"use strict";n("702b")}});
//# sourceMappingURL=app.0e0eb90e.js.map