<template>
<div class="">
  <h1>NEWS</h1>
<div class="">
<news-list :news="news"></news-list>
</div>
</div>
</template>

<script>

import NewsList from './components/NewsList.vue'

export default {
  name: 'app',
  data(){
    return {
      news: []
    }
  },
  mounted(){
    fetch("https://content.guardianapis.com/search?q=brexit&format=json&api-key=test")
    .then(res => res.json())
    .then(news => this.news = news)
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
