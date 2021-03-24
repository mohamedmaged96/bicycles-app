import Vue from 'vue'
import Router from 'vue-router'
import FeaturesTable from '../components/FeaturesTable.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tables',
      component: FeaturesTable
    },
    {
      path: '/charts',
      name: 'charts',
      component: () => import( '../components/Charts.vue')
    }
  ]
})