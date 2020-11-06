export { default as AdminPostForm } from '../..\\components\\AdminPostForm.vue'
export { default as LoadingBar } from '../..\\components\\LoadingBar.vue'
export { default as PostsList } from '../..\\components\\PostsList.vue'
export { default as PostsPreview } from '../..\\components\\PostsPreview.vue'
export { default as TheHeader } from '../..\\components\\TheHeader.vue'

export const LazyAdminPostForm = import('../..\\components\\AdminPostForm.vue' /* webpackChunkName: "components_AdminPostForm" */).then(c => c.default || c)
export const LazyLoadingBar = import('../..\\components\\LoadingBar.vue' /* webpackChunkName: "components_LoadingBar" */).then(c => c.default || c)
export const LazyPostsList = import('../..\\components\\PostsList.vue' /* webpackChunkName: "components_PostsList" */).then(c => c.default || c)
export const LazyPostsPreview = import('../..\\components\\PostsPreview.vue' /* webpackChunkName: "components_PostsPreview" */).then(c => c.default || c)
export const LazyTheHeader = import('../..\\components\\TheHeader.vue' /* webpackChunkName: "components_TheHeader" */).then(c => c.default || c)
