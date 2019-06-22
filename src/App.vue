<template>
<div id="app">
  <h1>NEWS</h1>
<div class="">
<!-- <news-list :news="news"></news-list> -->

<nav> <router-link :to="{ name: 'news'}">News</router-link>
  | <router-link :to="{ name: 'favourite'}">Favourite</router-link>
</nav>
</div>

<!-- <router-view id="view"></router-view> -->
<!-- <router-view :news="news" id="view"></router-view> -->
  <router-view :news="news" :favourites="favourites" id="view"></router-view>

</div>
</template>

<script>

import { eventBus } from '@/main.js'
import NewsList from './components/NewsList.vue'

export default {
  name: 'app',
  data(){
    return {
      news: [],
      favourites: []
    }
  },
  mounted(){
    fetch("https://content.guardianapis.com/search?q=brexit&format=json&api-key=test")
    .then(res => res.json())
    .then(news => this.news = news.response.results)

    eventBus.$on('news-selected', (news) => {
      this.favourites.push(news)
    })
  },
  components: {
    "news-list": NewsList
  }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
