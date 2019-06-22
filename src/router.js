import Vue from 'vue';
import Router from 'vue-router';
import News from '@/views/News';
import Favourite from '@/views/Favourite'

// Vue.vue

Vue.use(Router)

const router = new Router({
  routes: [
    {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/favourite',
    name: 'favourite',
    component: Favourite
  }
]
})

export default router;
