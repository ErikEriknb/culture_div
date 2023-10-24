import { createRouter,createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Layout',
            component: () => import('../layout/index.vue'),
            redirect: '/chinese',
            children:[
                {
                    path: 'chinese',
                    name: 'Chinese',
                    redirect: '/chinese/all',
                    children: [
                        {
                          path: 'all',
                          name: 'ChineseAll',
                          component: () => import('../views/chinese/all.vue')
                        },
                        {
                          path: 'study',
                          name: 'ChineseStudy',
                          component: () => import('../views/chinese/study.vue')
                        },
                        {
                          path: 'hsk',
                          name: 'ChineseHsk',
                          component: () => import('../views/chinese/hsk.vue')
                        },
                        {
                          path: 'china',
                          name: 'ChineseChina',
                          component: () => import('../views/chinese/china.vue')
                        }
                      ]
                }
            ]
        },
        {
          path: '/admin',
          name: 'Admin',
          component: () => import('../layout-admin/index.vue'),
          redirect: '/admin/import',
          children: [
            {
              path: 'import',
              name: 'Import',
              component: () => import('../views/import/index.vue')
            },
            {
              path: 'account',
              name: 'Account',
              component: () => import('../views/account/index.vue')
            }
          ]
        },
    ]
})

export default router