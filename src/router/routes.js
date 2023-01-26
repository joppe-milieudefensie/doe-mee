
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '1', component: () => import('src/pages/VersionForm.vue') },
      { path: '2', component: () => import('src/pages/VersionHighlight.vue') },
      { path: '3', component: () => import('src/pages/VersionEqual.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
