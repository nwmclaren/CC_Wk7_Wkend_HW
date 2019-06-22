<template lang="html">
  <div id="">
    <!-- <h1>News</h1> -->
    <!-- <news-list/> -->
    <!-- <news-list :news="news"/> -->
    <news-list :news="news" :favourites="favourites"></news-list>
  </div>
</template>

<script>
import NewsList from '@/components/NewsList.vue'
export default {
  name: 'news',
  props: ["news", "favourites"],
  components: {
    "news-list": NewsList
  }
}
</script>

<style lang="css" scoped>
</style>
