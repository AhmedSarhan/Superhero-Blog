exports.ids = [5];
exports.modules = {

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("117cd5d2", content, true, context)
};

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AdminPostForm.vue?vue&type=template&id=6429e561&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{attrs:{"id":"adminForm"},on:{"submit":function($event){$event.preventDefault();return _vm.submit($event)}}},[_vm._ssrNode("<div class=\"form-group\" data-v-6429e561><label for=\"Authname\" data-v-6429e561>Author Name</label> <input type=\"text\" id=\"Authname\" name=\"Authname\""+(_vm._ssrAttr("value",(_vm.editedPost.author)))+" class=\"form-control\" data-v-6429e561></div> <div class=\"form-group\" data-v-6429e561><label for=\"title\" data-v-6429e561>Title</label> <input type=\"text\" id=\"title\" name=\"title\""+(_vm._ssrAttr("value",(_vm.editedPost.title)))+" class=\"form-control\" data-v-6429e561></div> <div class=\"form-group\" data-v-6429e561><label for=\"thumbnail\" data-v-6429e561>Thumbnail</label> <input type=\"text\" id=\"thumbnail\" name=\"thumbnail\""+(_vm._ssrAttr("value",(_vm.editedPost.thumbnail)))+" class=\"form-control\" data-v-6429e561></div> <div class=\"form-group\" data-v-6429e561><label for=\"content\" data-v-6429e561>Content</label> <textarea name=\"content\" id=\"content\" rows=\"7\" class=\"form-control\" data-v-6429e561>"+_vm._ssrEscape(_vm._s(_vm.editedPost.content))+"</textarea></div> <div class=\"form-group\" data-v-6429e561><label for=\"content\" data-v-6429e561>Post Preview</label> <textarea name=\"content\" id=\"content\" rows=\"3\" class=\"form-control\" data-v-6429e561>"+_vm._ssrEscape(_vm._s(_vm.editedPost.preview))+"</textarea></div> <div class=\"form-group\" data-v-6429e561><input type=\"submit\" value=\"save\" class=\"btn btn-primary\" data-v-6429e561> <button class=\"btn btn-danger\" data-v-6429e561>Cancel</button></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AdminPostForm.vue?vue&type=template&id=6429e561&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AdminPostForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AdminPostFormvue_type_script_lang_js_ = ({
  props: {
    post: {
      type: Object,
      required: false
    }
  },

  data() {
    return {
      editedPost: this.post ? { ...this.post
      } : {
        author: '',
        title: '',
        thumbnail: '',
        content: '',
        preview: ''
      }
    };
  },

  methods: {
    submit() {
      // save the post
      this.$emit('submit', this.editedPost);
    },

    onCancel() {
      // Navigate back to Admin
      this.$router.push('/admin/');
    }

  }
});
// CONCATENATED MODULE: ./components/AdminPostForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AdminPostFormvue_type_script_lang_js_ = (AdminPostFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AdminPostForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AdminPostFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6429e561",
  "36cbf822"
  
)

/* harmony default export */ var AdminPostForm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPostForm_vue_vue_type_style_index_0_id_6429e561_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPostForm_vue_vue_type_style_index_0_id_6429e561_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPostForm_vue_vue_type_style_index_0_id_6429e561_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPostForm_vue_vue_type_style_index_0_id_6429e561_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPostForm_vue_vue_type_style_index_0_id_6429e561_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#adminForm[data-v-6429e561]{margin:20px auto;width:70%}@media only screen and (max-width:1023px){#adminForm[data-v-6429e561]{width:100%}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Admin/new-post/index.vue?vue&type=template&id=621873e7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"admin-new-post-page"},[_vm._ssrNode("<div class=\"new-post-form\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_c('AdminPostForm',{on:{"submit":_vm.createPost}})],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Admin/new-post/index.vue?vue&type=template&id=621873e7&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(1);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(13);

// EXTERNAL MODULE: ./components/AdminPostForm.vue + 4 modules
var AdminPostForm = __webpack_require__(42);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Admin/new-post/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var new_postvue_type_script_lang_js_ = ({
  components: {
    AdminPostForm: AdminPostForm["default"]
  },
  methods: {
    createPost(postData) {
      this.$store.dispatch('addPost', postData).then(() => {
        this.$router.push('/admin/');
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/Admin/new-post/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Admin_new_postvue_type_script_lang_js_ = (new_postvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Admin/new-post/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Admin_new_postvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "38dabbc6"
  
)

/* harmony default export */ var new_post = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AdminPostForm: __webpack_require__(42).default})


/***/ })

};;
//# sourceMappingURL=index.js.map