import Vue from 'vue'
import Router from 'vue-router'

import Header from '@/components/about/Header'
import LastWorks from '@/components/about/LastWorks'
import Features from '@/components/about/Features'
import Portfolio from '@/components/about/Portfolio'
import Banner from '@/components/about/Banner'
import Footer from '@/components/about/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: Header,
        lastWorks: LastWorks,
        features: Features,
        portfolio: Portfolio,
        banner: Banner,
        footer: Footer
      }
    },
    {
      path: '/studio',
      components: {}
    },
    {
      path: '/pricing',
      components: {}
    },
    {
      path: '/blog',
      components: {}
    },
    {
      path: '/profile',
      components: {}
    }
  ]
})
