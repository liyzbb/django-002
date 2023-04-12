(function(){"use strict";var e={3864:function(e,t,n){var r=n(6369),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],u=n(1001),a={},l=(0,u.Z)(a,o,i,!1,null,null,null),s=l.exports,c=n(2631),f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("HomePage")],1)},d=[],p=function(){var e=this,t=e._self._c;return t("div",[t("el-container",[t("el-header",[e._v("医学文献智能识别检索系统")]),t("el-container",[t("el-aside",{attrs:{width:"200px"}},[t("nav",[t("router-link",{attrs:{to:"/"}},[e._v("首页")]),e._v(" "),t("br"),t("router-link",{attrs:{to:"/list"}},[e._v("列表页")]),e._v(" "),t("br"),t("router-link",{attrs:{to:"/details"}},[e._v("详情页")])],1)]),t("el-main",[t("el-container",[t("div",{staticClass:"shuru"},[t("input",{staticStyle:{color:"rgb(125,125,125)"},attrs:{id:"neirong",type:"text",placeholder:"请输入内容",autocomplete:"off",value:"",maxlength:"100"}}),t("input",{staticClass:"sousuo",attrs:{type:"button",value:"搜索"}})])])],1)],1),t("el-footer")],1)],1)},v=[],h={name:"HomePage",props:{msg:String}},m=h,g=(0,u.Z)(m,p,v,!1,null,null,null),b=g.exports,y={name:"App",components:{HomePage:b}},_=y,w=(0,u.Z)(_,f,d,!1,null,null,null),k=w.exports;r["default"].use(c.ZP);const C=[{path:"/",name:"home",component:k},{path:"/list",name:"list",component:()=>n.e(330).then(n.bind(n,2330))},{path:"/details",name:"details",component:()=>n.e(460).then(n.bind(n,460))},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,5399))}],O=new c.ZP({mode:"history",routes:C});var P=O,x=n(3822);r["default"].use(x.ZP);var S=new x.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),j=n(8499),E=n.n(j),A=n(4161);r["default"].use(E()),r["default"].config.productionTip=!1,r["default"].prototype.axios=A.Z,new r["default"]({router:P,store:S,render:e=>e(s)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r](i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var a=!0,l=0;l<r.length;l++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(a=!1,i<u&&(u=i));if(a){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"."+{330:"e3098d74",443:"732974b1",460:"60f5b1a9"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".4596ed48.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="test_vue:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,l;if(void 0!==i)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var f=s[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){a=f;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var u=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=u,l.request=a,i.parentNode.removeChild(i),o(l)}};return i.onerror=i.onload=u,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(t(u,a))return o();e(r,a,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={330:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],l=r[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var c=l(n)}for(t&&t(r);s<u.length;s++)i=u[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunktest_vue"]=self["webpackChunktest_vue"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3864)}));r=n.O(r)})();
//# sourceMappingURL=app.f39bb2f1.js.map