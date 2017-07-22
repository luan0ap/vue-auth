import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import Signin from '@/pages/signin'
import Signup from '@/pages/signup'
import home from '@/pages/home'
import Forbidden from '@/pages/403'
import NotFound from '@/pages/404'
import { getItem } from '@/storage'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: '/vueAuth/',
	routes: [{
		path: '/',
		name: 'Hello',
		component: Hello,
	}, {
		path: '/home',
		name: 'Home',
		component: home,
		meta: { requiresAuth: true },
	}, {
		path: '/signin',
		name: 'Signin',
		component: Signin,
	}, {
		path: '/signup',
		name: 'Signup',
		component: Signup,
	}, {
		path: '/404',
		name: '404',
		component: NotFound,
	}, {
		path: '/403',
		name: '403',
		component: Forbidden,
	}]
});

router.beforeEach((to, from, next) => {
	const auth = getItem('token') && getItem('user_id');
	if (auth) {
		if (to.name === 'Signin' || to.name === 'Signup') {
			next({ name: 'Home' })
		} else {
			next()
		}
	} else {
		if (to.matched.some(record => record.meta.requiresAuth)) {
			next({
				path: '/signin',
				query: { redirect: to.fullPath }
			})
		} else {
			next()
		}
	}
})

export default router;
