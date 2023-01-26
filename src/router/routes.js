
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '1', component: () => import('pages/VersionOne.vue') },
      { path: '2', component: () => import('pages/VersionTwo.vue') },
      { path: '3', component: () => import('pages/VersionThree.vue') }
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
