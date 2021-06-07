import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from './router'
import { RouteLocationNormalized } from 'vue-router'
import { localGet } from './utils/common'

const whiteList = ['/login']
NProgress.configure({ showSpinner: false })

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
  NProgress.start()
  const token = localGet('token')
  console.log('to', to)
  if (!token) {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next({ name: 'Login', replace: true })
      NProgress.done()
    }
  } else {
    if (to.name === 'Login') {
      next({ path: '/' })
      NProgress.done()
    }
  }

  next()
})

router.afterEach((to: RouteLocationNormalized) => {
  console.log(to)
  NProgress.done()
})
