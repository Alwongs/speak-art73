(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-103f9229"],{"038b":function(e,t,i){e.exports=i.p+"img/gallery_1.0f6a0902.jpg"},"08b0":function(e,t,i){e.exports=i.p+"img/001.b70e2350.jpg"},"0a66":function(e,t,i){e.exports=i.p+"img/gallery_7.81230450.jpg"},"16af":function(e,t,i){e.exports=i.p+"img/gallery_5.f207a158.jpg"},1856:function(e,t,i){e.exports=i.p+"img/gallery_6.13488b65.jpg"},"201a":function(e,t,i){"use strict";i("7bc7")},"22ec":function(e,t,i){e.exports=i.p+"img/gallery_3.5e7ccf41.jpg"},"2c52":function(e,t,i){e.exports=i.p+"img/001.dd9198e6.jpg"},"2ebc":function(e,t,i){e.exports=i.p+"img/001.fbaf7498.jpg"},3325:function(e,t,i){e.exports=i.p+"img/gallery_2.3a9b9ba2.jpg"},"3a46":function(e,t,i){e.exports=i.p+"img/gallery_2.65514d83.jpg"},"3b75":function(e,t,i){e.exports=i.p+"img/gallery_10.794048bd.jpg"},4757:function(e,t,i){e.exports=i.p+"img/001.1be8056a.jpg"},"49e9":function(e,t,i){e.exports=i.p+"img/gallery_4.449a50da.jpg"},"4aa2":function(e,t,i){e.exports=i.p+"img/001.e1266079.jpg"},"4b86":function(e,t,i){e.exports=i.p+"img/gallery_1.1459f683.jpg"},"4dea":function(e,t,i){"use strict";var l=i("7a23");const n={class:"wrapper-slider"},r={class:"slider-footer"},g={class:"dots-group"},a=["onClick"];function s(e,t,i,s,p,c){const d=Object(l["y"])("image-group");return Object(l["r"])(),Object(l["d"])("div",n,[Object(l["g"])(d,{data:i.data,current_index:p.current_index,onToggleSlide:c.toggleSlide},null,8,["data","current_index","onToggleSlide"]),Object(l["e"])("div",r,[Object(l["e"])("div",g,[(Object(l["r"])(!0),Object(l["d"])(l["a"],null,Object(l["x"])(i.data,e=>(Object(l["r"])(),Object(l["d"])("div",{key:e.id,class:Object(l["m"])(["slider-footer-dot",{"selected-slide":e.id===p.current_index+1}]),onClick:t=>c.selectSlide(e.id)},null,10,a))),128))])]),Object(l["e"])("button",{onClick:t[0]||(t[0]=(...e)=>c.prevSlide&&c.prevSlide(...e)),class:"btn-slider btn-slider-prev"}),Object(l["e"])("button",{onClick:t[1]||(t[1]=(...e)=>c.nextSlide&&c.nextSlide(...e)),class:"btn-slider btn-slider-next"})])}const p=["src"];function c(e,t,n,r,g,a){return Object(l["r"])(),Object(l["d"])("div",{style:Object(l["n"])({"margin-left":`-${a.getSlideMargin()}%`,width:n.data.length+"00%"}),class:"slider-group",onClick:t[0]||(t[0]=(...e)=>a.toggleSlide&&a.toggleSlide(...e))},[(Object(l["r"])(!0),Object(l["d"])(l["a"],null,Object(l["x"])(n.data,e=>(Object(l["r"])(),Object(l["d"])("div",{key:e.id,class:"slide"},[Object(l["e"])("img",{src:i("810b")("./"+e.img),alt:"Slide picture"},null,8,p)]))),128))],4)}var d={name:"ImageGroup",props:["data","current_index"],methods:{getSlideMargin(){return 100*this.current_index},toggleSlide(){this.$emit("toggleSlide")}},created(){console.log(this.data)}},o=(i("5d2f"),i("6b0d")),u=i.n(o);const j=u()(d,[["render",c],["__scopeId","data-v-68f16019"]]);var f=j,b={name:"AppSlider",props:["data","isAutoSlider"],components:{ImageGroup:f},data(){return{interval:null,isPaused:!1,current_index:0}},methods:{selectSlide(e){this.current_index=e-1},prevSlide(){this.current_index>=1&&(this.current_index=this.current_index-1)},nextSlide(){this.current_index>=this.data.length-1?this.current_index=0:this.current_index=this.current_index+1},toggleSlide(){this.isPaused=!this.isPaused,this.isPaused?this.stopSlide():this.startSlide()},startSlide(){this.interval=setInterval(()=>{this.nextSlide()},3500)},stopSlide(){clearInterval(this.interval)}},created(){this.isAutoSlider&&this.startSlide()}};i("f810");const _=u()(b,[["render",s],["__scopeId","data-v-3348e149"]]);t["a"]=_},"4fa1":function(e,t,i){e.exports=i.p+"img/gallery_4.de190881.jpg"},"533f":function(e,t,i){e.exports=i.p+"img/gallery_6.84194a3d.jpg"},"56ce":function(e,t,i){e.exports=i.p+"img/gallery_3.de3aedca.jpg"},"584a":function(e,t,i){e.exports=i.p+"img/gallery_2.949c292c.jpg"},"5d2f":function(e,t,i){"use strict";i("de7f")},"6d9f":function(e,t,i){e.exports=i.p+"img/gallery_3.c911327f.jpg"},7066:function(e,t,i){},"73f6":function(e,t,i){e.exports=i.p+"img/gallery_5.252c72ea.jpg"},"7bc7":function(e,t,i){},"810b":function(e,t,i){var l={"./001.jpg":"4757","./002.jpg":"dbe3","./chinese/001.jpg":"8f4d","./chinese/002.jpg":"86d0","./chinese/gallery_1.jpg":"f2c9","./chinese/gallery_2.jpg":"3325","./chinese/gallery_3.jpg":"56ce","./chinese/gallery_4.jpg":"4fa1","./chinese/gallery_5.jpg":"fc28","./english/001.jpg":"4aa2","./english/gallery_1.jpg":"4b86","./english/gallery_2.jpg":"3a46","./english/gallery_3.jpg":"6d9f","./english/gallery_4.jpg":"e1e4","./english/gallery_5.jpg":"73f6","./english/gallery_6.jpg":"533f","./english/part-time/001.jpg":"08b0","./english/part-time/gallery_1.jpg":"e6e3","./english/part-time/gallery_10.jpg":"3b75","./english/part-time/gallery_2.jpg":"f17f","./english/part-time/gallery_3.jpg":"22ec","./english/part-time/gallery_4.jpg":"49e9","./english/part-time/gallery_5.jpg":"a2d1","./english/part-time/gallery_6.jpg":"1856","./english/part-time/gallery_7.jpg":"d960","./english/part-time/gallery_8.jpg":"8e3b","./english/part-time/gallery_9.jpg":"f121","./english/theater/001.jpg":"2ebc","./english/theater/gallery_1.jpg":"038b","./english/theater/gallery_2.jpg":"584a","./english/theater/gallery_3.jpg":"e911","./english/theater/gallery_4.jpg":"cedf","./english/theater/gallery_5.jpg":"16af","./english/theater/gallery_6.jpg":"b2f1","./english/theater/gallery_7.jpg":"0a66","./master-classes/001.jpg":"2c52"};function n(e){var t=r(e);return i(t)}function r(e){if(!i.o(l,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return l[e]}n.keys=function(){return Object.keys(l)},n.resolve=r,e.exports=n,n.id="810b"},"86d0":function(e,t,i){e.exports=i.p+"img/002.36f1d193.jpg"},"8e3b":function(e,t,i){e.exports=i.p+"img/gallery_8.464ab236.jpg"},"8f4d":function(e,t,i){e.exports=i.p+"img/001.2e28d7fe.jpg"},a2d1:function(e,t,i){e.exports=i.p+"img/gallery_5.27aac8c6.jpg"},b2f1:function(e,t,i){e.exports=i.p+"img/gallery_6.80a1aa56.jpg"},cedf:function(e,t,i){e.exports=i.p+"img/gallery_4.eae27af0.jpg"},d960:function(e,t,i){e.exports=i.p+"img/gallery_7.dc6d4b51.jpg"},dbe3:function(e,t,i){e.exports=i.p+"img/002.980282c9.jpg"},de7f:function(e,t,i){},df9d:function(e,t,i){"use strict";i.r(t);var l=i("7a23");const n=e=>(Object(l["u"])("data-v-45bf8353"),e=e(),Object(l["s"])(),e),r={class:"english-page"},g=["src"],a=n(()=>Object(l["e"])("ul",{class:"master-classes-list mb-16"},[Object(l["e"])("li",null,"Кулинарные"),Object(l["e"])("li",null,"Творческие"),Object(l["e"])("li",null,"Театральные"),Object(l["e"])("li",null,"Языковые")],-1)),s=n(()=>Object(l["e"])("p",null," Мастер-классы полностью на иностранном языке. Адаптируем под уровень знания языка. ",-1)),p=n(()=>Object(l["e"])("p",null,"‌ Прекрасная возможность погрузиться в языковую среду и найти применение своим знаниям! ",-1)),c=n(()=>Object(l["e"])("p",null,"‌ Продолжительность: от полутра до двух часов ",-1)),d=n(()=>Object(l["e"])("h2",{style:{color:"red"}},"Слайдер пока снглийский ))",-1));function o(e,t,n,o,u,j){const f=Object(l["y"])("app-slider"),b=Object(l["y"])("app-divider");return Object(l["r"])(),Object(l["d"])("main",r,[Object(l["e"])("img",{src:i("2c52"),alt:"photo",class:"img-english"},null,8,g),a,s,p,c,d,Object(l["g"])(f,{data:e.$store.getters.slider_english,isAutoSlider:!0},null,8,["data"]),Object(l["g"])(b)])}var u=i("4dea"),j=i("0638"),f={name:"EnglishPage",components:{AppSlider:u["a"],AppDivider:j["a"]}},b=(i("201a"),i("6b0d")),_=i.n(b);const h=_()(f,[["render",o],["__scopeId","data-v-45bf8353"]]);t["default"]=h},e1e4:function(e,t,i){e.exports=i.p+"img/gallery_4.55ed7418.jpg"},e6e3:function(e,t,i){e.exports=i.p+"img/gallery_1.768ec54f.jpg"},e911:function(e,t,i){e.exports=i.p+"img/gallery_3.456ad5a4.jpg"},f121:function(e,t,i){e.exports=i.p+"img/gallery_9.7e976f13.jpg"},f17f:function(e,t,i){e.exports=i.p+"img/gallery_2.2852047b.jpg"},f2c9:function(e,t,i){e.exports=i.p+"img/gallery_1.f1e1e695.jpg"},f810:function(e,t,i){"use strict";i("7066")},fc28:function(e,t,i){e.exports=i.p+"img/gallery_5.c52b2632.jpg"}}]);
//# sourceMappingURL=chunk-103f9229.8e046155.js.map