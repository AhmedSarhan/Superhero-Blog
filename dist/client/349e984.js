(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{363:function(t,e,o){var content=o(368);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(61).default)("e91c9f54",content,!0,{sourceMap:!1})},364:function(t,e,o){var content=o(370);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(61).default)("54fd7eba",content,!0,{sourceMap:!1})},365:function(t,e,o){"use strict";o.r(e);var n={props:{id:{type:String,required:!0},isAdmin:{type:Boolean,required:!0},title:{type:String,required:!0},content:{type:String,required:!0},preview:{type:String,required:!0},thumbnail:{type:String,required:!0},date:{type:String,required:!1}},computed:{postLink:function(){return this.isAdmin?"/admin/"+this.id:"/posts/"+this.id}}},r=(o(367),o(24)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-md-4"},[o("article",{staticClass:"posts-preview"},[o("div",{staticClass:"post-thumbnail",style:{backgroundImage:"url("+t.thumbnail+" )",marginBottom:"20px"}}),t._v(" "),o("div",{staticClass:"post-content text-center"},[o("nuxt-link",{attrs:{to:t.postLink}},[o("h1",{staticClass:"post-title"},[t._v(t._s(t.title))])]),t._v(" "),o("p",{staticClass:"post-preview"},[t._v(t._s(t.preview))]),t._v(" "),o("small",{staticClass:"post-date"},[t._v(t._s(t.date)+" ")])],1)])])}),[],!1,null,"1971e8d4",null);e.default=component.exports},366:function(t,e,o){"use strict";o.r(e);var n={components:{PostsPreview:o(365).default},props:{isAdmin:{type:Boolean,default:!1},posts:{type:Array,required:!0}},data:function(){return{}},computed:{postLink:function(){return this.isAdmin?"/admin/"+this.id:"/posts/"+this.id}}},r=(o(369),o(24)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"posts-list"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},t._l(t.posts,(function(e){return o("PostsPreview",{key:e.id,attrs:{"is-admin":t.isAdmin,id:e.id,thumbnail:e.thumbnail,title:e.title,content:e.content,preview:e.preview,date:e.date}})})),1)])])}),[],!1,null,"99a693c4",null);e.default=component.exports;installComponents(component,{PostsPreview:o(365).default})},367:function(t,e,o){"use strict";o(363)},368:function(t,e,o){(e=o(60)(!1)).push([t.i,".posts-preview[data-v-1971e8d4]{margin:20px auto;box-shadow:0 2px 2px #ccc;border-radius:5px;border:1px solid #eee;padding-bottom:20px}.post-thumbnail[data-v-1971e8d4]{height:300px;background-position:50%;background-size:contain;background-repeat:no-repeat}.post-title[data-v-1971e8d4]{color:#3f51b5!important;font-size:25px}.post-title.active[data-v-1971e8d4],.post-title[data-v-1971e8d4]:hover{color:#9fa8da!important;text-decoration:none}.post-preview[data-v-1971e8d4]{padding-top:5px;margin-bottom:5px;font-size:20px}.post-date[data-v-1971e8d4]{font-size:16px;text-align:right}",""]),t.exports=e},369:function(t,e,o){"use strict";o(364)},370:function(t,e,o){(e=o(60)(!1)).push([t.i,".posts-preview[data-v-99a693c4]{margin:20px auto;box-shadow:0 2px 2px #ccc;border-radius:5px;border:1px solid #eee;padding-bottom:20px}.post-thumbnail[data-v-99a693c4]{height:300px;background-position:50%;background-size:contain;background-repeat:no-repeat}.post-title[data-v-99a693c4]{color:#3f51b5!important;font-size:25px}.post-title.active[data-v-99a693c4],.post-title[data-v-99a693c4]:hover{color:#9fa8da!important;text-decoration:none}.post-preview[data-v-99a693c4]{padding-top:5px;margin-bottom:5px;font-size:20px}.post-date[data-v-99a693c4]{font-size:16px;text-align:right}",""]),t.exports=e},377:function(t,e,o){var content=o(386);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(61).default)("390f1f66",content,!0,{sourceMap:!1})},385:function(t,e,o){"use strict";o(377)},386:function(t,e,o){(e=o(60)(!1)).push([t.i,".posts-page[data-v-23478150]{display:flex;justify-content:center;align-items:center}",""]),t.exports=e},395:function(t,e,o){"use strict";o.r(e);o(22);var n={computed:{loadedPosts:function(){return this.$store.getters.loadedPosts}},components:{PostsList:o(366).default},methods:{}},r=(o(385),o(24)),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"posts-page"},[e("div",{staticClass:"container"},[e("PostsList",{attrs:{posts:this.loadedPosts}})],1)])}),[],!1,null,"23478150",null);e.default=component.exports;installComponents(component,{PostsList:o(366).default})}}]);