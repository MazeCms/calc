(function(t){function e(e){for(var i,c,o=e[0],r=e[1],l=e[2],p=0,_=[];p<o.length;p++)c=o[p],n[c]&&_.push(n[c][0]),n[c]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(_.length)_.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,o=1;o<s.length;o++){var r=s[o];0!==n[r]&&(i=!1)}i&&(a.splice(e--,1),t=c(c.s=s[0]))}return t}var i={},n={app:0},a=[];function c(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=i,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(s,i,function(e){return t[e]}.bind(null,i));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=r;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){s("2b45"),t.exports=s("56d7")},"3fe4":function(t,e,s){},"56af":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ts__calc__wrapp"},[s("div",{staticClass:"ts__calc__processbar mb-4"},[s("div",{staticClass:"row mb-3"},t._l(t.steps,function(e,i){return s("div",{staticClass:"col-lg-2 text-center ts__calc__step__progress",class:{ts__calc__active__progress:t.isActiveStep(i)}},[t._v("\n                "+t._s(e.name)+"\n            ")])}),0),s("div",{staticClass:"ts__calc__processbar__line"},[s("div",{staticClass:"ts__calc__processbar__trake",style:{width:t.procentBar+"%"}})])]),s("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounceInLeft","leave-active-class":"animated bounceOutRight",mode:"out-in",appear:""}},["type"==t.step?s("div",{key:"type",staticClass:"ts__calc__step"},[s("div",{staticClass:"ts__calc__step__title"},[t._v("Выберите крепёж:")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8 offset-lg-2"},[s("div",{staticClass:"row"},t._l(t.types,function(e){return t.types.length?s("div",{staticClass:"col-md-3"},[s("div",{staticClass:"ts__calc__box d-flex justify-content-center align-items-center",class:{ts__calc__active__type:t.type==e.value},on:{click:function(s){return t.setType(e.value)}}},[s("div",{staticClass:"ts__calc__box__inher"},[s("div",{staticClass:"ts__calc__icon"},[s("i",{class:e.icon})]),s("div",{staticClass:"ts__calc__name"},[t._v(t._s(e.name))])])])]):t._e()}),0)])])]):t._e(),"standard"==t.step?s("div",{key:"standard",staticClass:"ts__calc__step"},[s("div",{staticClass:"ts__calc__step__title"},[t._v("Выберите стандарт:")]),t._l(t.db,function(e,i){return s("div",[s("check-box",{key:"check-box"+i,attrs:{option:i,label:e.name},model:{value:t.standard,callback:function(e){t.standard=e},expression:"standard"}})],1)})],2):t._e(),"diameter"==t.step?s("div",{key:"diameter",staticClass:"ts__calc__step"},[s("div",{staticClass:"ts__calc__step__title"},[t._v("Выберите диаметр:")]),t._l(t.db[t.standard].diameters,function(e,i){return s("div",[s("check-box",{key:"check-box-diameters"+i,attrs:{option:i,label:e.name},model:{value:t.diameter,callback:function(e){t.diameter=e},expression:"diameter"}})],1)})],2):t._e(),"long"==t.step?s("div",{key:"long",staticClass:"ts__calc__step"},[s("div",{staticClass:"ts__calc__step__title"},[t._v("Выберите длину:")]),t._l(t.db[t.standard].diameters[t.diameter].longs,function(e,i){return s("div",[s("check-box",{key:"check-box-longs"+i,attrs:{option:e.weight,label:e.long},model:{value:t.weight,callback:function(e){t.weight=e},expression:"weight"}})],1)})],2):t._e(),"koef"==t.step?s("div",{key:"koef",staticClass:"ts__calc__step"},[s("div",{staticClass:"ts__calc__step__title"},[t._v("Выберите материал:")]),t._l(t.koefs,function(e,i){return s("div",[s("check-box",{key:"check-box"+i,attrs:{option:e.value,label:e.name},model:{value:t.koef,callback:function(e){t.koef=e},expression:"koef"}})],1)})],2):t._e(),"weight"==t.step?s("div",{key:"weight",staticClass:"ts__calc__step"},[s("div",{staticClass:"ts__calc__step__title"},[t._v("ВЕС 1 ШТ. "+t._s(t.oneWeight)+" г.")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Вес")]),s("div",{staticClass:"input-group input-group-lg"},[s("input",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.weightsumm},on:{input:t.setQuantity}}),s("div",{staticClass:"input-group-append"},[s("span",{staticClass:"input-group-text"},[t._v("КГ")])])])]),s("div",{staticClass:"form-group"},[s("label",[t._v("Количесво")]),s("div",{staticClass:"input-group input-group-lg"},[s("input",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.quantity},on:{input:t.setWeightsumm}}),s("div",{staticClass:"input-group-append"},[s("span",{staticClass:"input-group-text"},[t._v("ШТ")])])])])])])]):t._e()]),"type"!=t.step?s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("button",{staticClass:"btn btn-green",attrs:{type:"button"},on:{click:function(e){return t.prevStep()}}},[t._v("Назад")]),s("button",{staticClass:"btn btn-green ml-3",attrs:{type:"button"},on:{click:function(e){return t.reset()}}},[t._v("Сбросить")])])]):t._e()],1)},a=[],c=(s("c5f6"),s("20d6"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ts__checkbox__wrrapp",on:{click:function(e){return t.setValue()}}},[s("div",{staticClass:"ts__checkbox__cub",class:{ts__checkbox__cub__active:t.option===t.value},attrs:{"data-value":t.value,"data-option":t.option}}),s("div",{staticClass:"ts__checkbox__label"},[t._v(t._s(t.label))])])}),o=[],r={name:"CheckBox",props:{label:String,value:[String,Number],option:[String,Number]},methods:{setValue:function(){this.option===this.value?this.$emit("input",""):this.$emit("input",this.option)}}},l=r,u=(s("d050"),s("2877")),p=Object(u["a"])(l,c,o,!1,null,null,null),_=p.exports,d=s("bc3a"),h=s.n(d),f=(s("77ed"),s("2ef0"),{name:"app",components:{CheckBox:_},data:function(){return{steps:[{name:"Шаг 1",value:"type"},{name:"Шаг 2",value:"standard"},{name:"Шаг 3",value:"diameter"},{name:"Шаг 4",value:"long"},{name:"Шаг 5",value:"koef"},{name:"Шаг 6",value:"weight"}],step:"type",db:[],types:[],koefs:[],type:"",standard:"",diameter:"",koef:"",weight:"",quantity:"",weightsumm:"",host:"https://raw.githubusercontent.com/MazeCms/calc/master"}},created:function(){this.getTypes(),this.getKoefs()},watch:{type:function(t){var e=this;""!==t&&h.a.get(this.host+"/db/"+t+".json").then(function(t){e.db=t.data,e.nextStep()})},standard:function(t){""!==t&&this.nextStep()},diameter:function(t){""!==t&&(this.nextStep(),this.db[this.standard].diameters[this.diameter].longs.length>1||(this.weight=this.db[this.standard].diameters[this.diameter].longs[0].weight))},koef:function(t){""!==t&&(this.nextStep(),this.weightsumm=this.getWeightsumm(1),this.quantity=1)},weight:function(t){""!==t&&this.nextStep()}},computed:{procentBar:function(){var t=this,e=this.steps.findIndex(function(e){return e.value==t.step});return e+=1,Math.round(e/this.steps.length*100)},oneWeight:function(){return Math.round(this.weight*this.koef*100)/100}},methods:{nextStep:function(){var t=this,e=this.steps.findIndex(function(e){return e.value==t.step});e+=1,e<=this.steps.length&&(this.step=this.steps[e].value)},getQuantity:function(t){return Math.round(t*this.koef*1e3/this.weight)},getWeightsumm:function(t){return Math.round(t*this.koef*this.weight*100)/1e5},setQuantity:function(t){this.weightsumm=Number(t.target.value),this.quantity=this.getQuantity(this.weightsumm)},setWeightsumm:function(t){this.quantity=Number(t.target.value),this.weightsumm=this.getWeightsumm(this.quantity)},prevStep:function(){var t=this,e=this.steps.findIndex(function(e){return e.value==t.step});if(-1!=e){var s=e-1;s>=0&&(this.step=this.steps[s].value),1==e?this.type="":2==e?this.standard="":3==e?this.diameter="":4==e?this.weight="":5==e?this.koef="":6==e&&(this.quantity="",this.weightsumm="")}},setType:function(t){this.type==t?this.type="":this.type=t},isActiveStep:function(t){var e=this,s=this.steps.findIndex(function(t){return t.value==e.step});return-1!==s&&t<=s},getTypes:function(){var t=this;h.a.get(this.host+"/db/type.json").then(function(e){t.types=e.data})},getKoefs:function(){var t=this;h.a.get(this.host+"/db/koef.json").then(function(e){t.koefs=e.data})},reset:function(){this.type="",this.standard="",this.diameter="",this.weight="",this.koef="",this.step="type"}}}),v=f,m=(s("e507"),s("92c8"),Object(u["a"])(v,n,a,!1,null,"ebbf914c",null)),g=m.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(g)}}).$mount("#app-calc-topseo")},"92c8":function(t,e,s){"use strict";var i=s("56af"),n=s.n(i);n.a},ca80:function(t,e,s){},d050:function(t,e,s){"use strict";var i=s("3fe4"),n=s.n(i);n.a},e507:function(t,e,s){"use strict";var i=s("ca80"),n=s.n(i);n.a}});
//# sourceMappingURL=app.0e636940.js.map