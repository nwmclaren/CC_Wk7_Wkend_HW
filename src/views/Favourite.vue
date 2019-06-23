<template lang="html">
  <div id="">
    <h1>Favourites</h1>
    <news-list :news="favourites" :favourites="favourites"></news-list>
  </div>
</template>

<script>

import NewsList from '@/components/NewsList.vue'
export default {
  props: ['favourites'],
  components: {
    'news-list': NewsList
  }
}
</script>

<style lang="css" scoped>
</style>
