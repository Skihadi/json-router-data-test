import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: []
})
window.router = router

fetch('/router.json')
	.then(res => res.json())
	.then(routes => {
		routes.forEach(route => {
			router.addRoute({
				...route,
				path: route.path,
				component: () => import(`../views/${route.component}.vue`)
			})
		})
	})

export default router