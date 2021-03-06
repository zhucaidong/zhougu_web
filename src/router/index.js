import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/

export const constantRouterMap = [
  {
    path: '/registration',
    component: () => import('@/views/signUp/SignUp'),
    hidden: true
  },
  {path: '/login', component: () => import('@/views/login/index'), hidden: true},
  {path: '/404', component: () => import('@/views/404'), hidden: true},

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: '首页', icon: 'example' },
  //   children: [
  //     // {
  //     //   path: 'table',
  //     //   name: 'Table',
  //     //   component: () => import('@/views/table/index'),
  //     //   meta: { title: 'Table', icon: 'table' }
  //     // }
  //     // ,
  //     {
  //       path: 'tree',
  //       name: 'tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: '设备列表', icon: 'tree' }
  //     }
  //   ]
  // },
  // {
  //   path: 'index',
  //   name: 'Form',
  //   component: () => import('@/views/table/complexTable'),
  //   meta: { title: '设备列表', icon: 'tree' }
  // },

  {
    path: '/devices',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'device',
        component: () => import('@/views/table/deviceTable'),
        meta: {title: '我的设备', icon: 'tree'}
      }
    ]
  },
  {
    path: '/userInfo',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/map/index'),
        meta: {title: '用户信息', icon: 'user'}
      }
    ]
  },
  {
    path: '/complex-table',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'ComplexTable',
        component: () => import('@/views/user/userInfo'),
        meta: {title: '订购信息', icon: 'money'}
      }
    ]
  },
  {
    path: '/complex-table',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'ComplexTable',
        component: () => import('@/views/table/complexTable'),
        meta: {title: '文件管理', icon: 'zip'}
      }
    ]
  },
  //
  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'externalLink', icon: 'link' }
  //     }
  //   ]
  // },

  {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
