import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/Dashboard'
import Count from './components/Meds/Count'
import NewMed from './components/Meds/NewMed'
import ViewMed from './components/Meds/ViewMed'
import EditMed from './components/Meds/EditMed'
import DrugSearch from './components/Meds/DrugSearch'
import NewClient from './components/Clients/NewClient'
import EditClient from './components/Clients/EditClient'
import ViewClient from './components/Clients/ViewClient'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },    {
      path: '/new-med',
      name: 'new-med',
      component: NewMed
    },    {
      path: '/edit/:med_id',
      name: 'edit-med',
      component: EditMed
    },    {
      path: '/:med_id',
      name: 'view-med',
      component: ViewMed
    },    {
      path: '/drug-search',
      name: 'drug-search',
      component: DrugSearch
    },    {
      path: '/new-client',
      name: 'new-client',
      component: NewClient
    },    {
      path: '/edit/:client_id',
      name: 'edit-client',
      component: EditClient
    },    {
      path: '/:client_id',
      name: 'view-client',
      component: ViewClient
    },    {
      path: '/count/:med_id',
      name: 'count',
      component: Count
    } 
  ]
})
