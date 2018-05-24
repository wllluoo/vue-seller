import Vue from 'vue'
import Router from 'vue-router'
import index from 'components/index/index.vue'
import essay from 'components/essay/essay.vue'
import market from 'components/market/market.vue'
import personal from 'components/personal/personal.vue'
import allSubject from 'components/allSubject/allSubject.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: index
    },
    {
      path: '/essay',
      component: essay
    },
    {
      path: '/market',
      component: market
    },
    {
      path: '/personal',
      component: personal
    },
    {
      path: '/allsubject', // 所有学科
      component: allSubject
    }
  ]
})
