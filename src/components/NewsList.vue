<template lang="html">
  <div>
    <ul>
      <news-list-item v-for="(article, index) in news" :news="article" :favourites="favourites" :key="index"></news-list-item>
    </ul>

  </div>
</template>

<script>
import NewsListItem from './NewsListItem.vue';
export default {
  name:'news-list',
  props: ['news', 'favourites'],
  components: {"news-list-item": NewsListItem}
}
</script>

<style lang="css" scoped>
</style>
