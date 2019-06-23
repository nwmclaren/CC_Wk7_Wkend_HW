<template lang="html">
  <div id="">
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
