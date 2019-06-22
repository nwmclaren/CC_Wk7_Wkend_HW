<template lang="html">
  <!-- <h2>{{news}}</h2> -->
  <div>
    <ul>
<!-- <news-list-item v-for="(article, index) in news" :news="article" :key="index"></news-list-item> -->
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
