import Vue from 'vue'
import Router from 'vue-router'
import Me from '@/components/Me'
// import Report from '@/components/Report'
import One from '@/components/reports/week/1/One'
import Two from '@/components/reports/week/2/Two'
import Form from '@/components/forms/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Me',
        component: Me
    },
    {
        path: '/reports/week/1',
        name: 'Redovisning',
        component: One
    },
    {
        path: '/reports/week/2',
        name: 'kmom02',
        component: Two
    },
    {
        path: '/forms',
        name: 'Form',
        component: Form
    }
  ]
})
