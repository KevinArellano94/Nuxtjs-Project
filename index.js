<template>
  <html-fetcher url="/your/static/content.html"/>
</template>

<script>
import axios from 'axios'

Vue.component('html-fetcher', {
  template: '<div>Loading…</div>',
  props: ['url'],
  mounted () {
    axios.get(this.url).then(({ data }) => this.$el.outerHTML = data)
  }
})
</script>