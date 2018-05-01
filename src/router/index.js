import Vue from 'vue'
import Router from 'vue-router'
import index from 'components/index/index.vue'
import classify from 'components/classify/classify.vue'
import seller from 'components/seller/seller.vue'
import personal from 'components/personal/personal.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: index
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path: '/seller',
      component: seller
    },
    {
      path: '/personal',
      component: personal
    }
  ]
})
