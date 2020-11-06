import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _da0ae944 = () => interopDefault(import('..\\pages\\About\\index.vue' /* webpackChunkName: "pages/About/index" */))
const _26a79e5c = () => interopDefault(import('..\\pages\\Admin\\index.vue' /* webpackChunkName: "pages/Admin/index" */))
const _28252950 = () => interopDefault(import('..\\pages\\Posts\\index.vue' /* webpackChunkName: "pages/Posts/index" */))
const _46758694 = () => interopDefault(import('..\\pages\\Admin\\Auth\\index.vue' /* webpackChunkName: "pages/Admin/Auth/index" */))
const _809c2ce2 = () => interopDefault(import('..\\pages\\Admin\\new-post\\index.vue' /* webpackChunkName: "pages/Admin/new-post/index" */))
const _51d8b804 = () => interopDefault(import('..\\pages\\Admin\\_postId\\index.vue' /* webpackChunkName: "pages/Admin/_postId/index" */))
const _a47f8e7c = () => interopDefault(import('..\\pages\\Posts\\_id\\index.vue' /* webpackChunkName: "pages/Posts/_id/index" */))
const _565578ee = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _da0ae944,
    name: "About"
  }, {
    path: "/Admin",
    component: _26a79e5c,
    name: "Admin"
  }, {
    path: "/Posts",
    component: _28252950,
    name: "Posts"
  }, {
    path: "/Admin/Auth",
    component: _46758694,
    name: "Admin-Auth"
  }, {
    path: "/Admin/new-post",
    component: _809c2ce2,
    name: "Admin-new-post"
  }, {
    path: "/Admin/:postId",
    component: _51d8b804,
    name: "Admin-postId"
  }, {
    path: "/Posts/:id",
    component: _a47f8e7c,
    name: "Posts-id"
  }, {
    path: "/",
    component: _565578ee,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
