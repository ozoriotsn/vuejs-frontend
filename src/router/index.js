import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Router)

const router = new Router({
  routes: [
    // Pages
    {
      path: '/page',
      component: () => import('@/components/account/Layout.vue')
      // alias: '/'
    },

    // Account
    {
      path: '/account',
      component: () => import('@/components/account/Layout.vue'),
      children: [
        {
          path: 'login',
          component: () => import('@/components/account/Login.vue'),
          alias: '/'
        },
        {
          path: 'forgot',
          component: () => import('@/components/account/Forgot.vue')
        }
      ],
      alias: '/'

    },
    // Dashboard
    {
      path: '/dashboard',
      component: () => import('@/components/dashboard/Layout.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'main',
          component: () => import('@/components/dashboard/products/index.vue'),
          alias: '/dashboard'
        },
        {
          path: 'products',
          component: () => import('@/components/dashboard/products/index.vue')
        },
        {
          path: 'products/register',
          component: () => import('@/components/dashboard/products/register.vue')
        },
        {
          path: 'products/edit/:id',
          component: () => import('@/components/dashboard/products/edit.vue')
        },
        {
          path: 'products/delete/:id'
        },
        {
          path: 'categories',
          component: () => import('@/components/dashboard/categories/index.vue')
        },
        {
          path: 'categories/register',
          component: () => import('@/components/dashboard/categories/register.vue')
        },
        {
          path: 'categories/edit/:id',
          component: () => import('@/components/dashboard/categories/edit.vue')
        },
        {
          path: 'categories/delete/:id'
        }

      ]
    },
    { path: '*', component: () => import('@/components/pages/404.vue') }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !sessionStorage.getItem('token')) {
    // eslint-disable-next-line standard/object-curly-even-spacing
    next({ path: '/'})
  } else {
    next()
  }
})
export default router
