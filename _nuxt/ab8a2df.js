(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{294:function(t,e,n){var content=n(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("62ea8150",content,!0,{sourceMap:!1})},296:function(t,e,n){"use strict";n(294)},297:function(t,e,n){var r=n(36)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.prose a{\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(220, 38, 38, var(--tw-text-opacity))\n}\n.prose li{\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},316:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(49),{components:{},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,o=t.error,e.prev=1,e.next=4,n("blog",r.slug).fetch();case 4:c=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),o({message:"404 page not found"});case 10:return e.abrupt("return",{post:c});case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))()}}),c=(n(296),n(20)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper p-5"},[n("div",{staticClass:"text-center border-2 max-w-screen-lg mx-auto px-2 py-5 rounded-xl"},[n("h3",{staticClass:"text-xl md:text-2xl lg:text-3xl text-gray-800 font-semibold"},[t._v(" "+t._s(t.post.title))]),t._v(" "),n("h3",{staticClass:"text-sm md:text-base text-gray-600 font-semibold max-w-lg mx-auto my-3"},[t._v("Posted on : "),n("span",{staticClass:"text-gray-700"},[t._v(t._s(t.post.date))])])]),t._v(" "),n("nuxt-content",{staticClass:"prose prose-lg max-w-screen-lg mx-auto px-3 my-5",attrs:{document:t.post}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);