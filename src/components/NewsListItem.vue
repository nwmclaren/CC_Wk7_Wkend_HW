<template lang="html">
  <div class="">
    <h2>{{news.webTitle}}</h2>
    <button v-if="!inFavourites" v-on:click="handleButton" type="button" name="button">Add Favourite</button>
  </div>

</template>

<script>
import { eventBus } from '@/main.js'

export default {
  name: 'news-list-item',
  props: ['news', 'favourites'],
  computed: {
    inFavourites: function(){
      return this.favourites.includes(this.news)
    }
  },
  methods: {
    handleButton: function(){
      eventBus.$emit('news-selected', this.news)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
