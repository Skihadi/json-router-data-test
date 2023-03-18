import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})
window.router = router

let json = await fetch('/router.json')
let routes = await json.json()
routes.forEach(route => {
	router.addRoute({
		...route,
		path: route.path,
		component: () => import(`../views/${route.component}.vue`)
	})
})

console.log(router)

export default router