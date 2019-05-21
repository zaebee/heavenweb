<template>

  <b-card
    :title="caption"
    :img-src="imgSrc"
    :img-alt="caption"
    img-top
    rel="nofollow"
    tag="article"
    style="max-width: 50rem;"
    class="mb-5 mb-md-2 shadow-none border-0 px-0"
  >
    <p v-text="text"></p>
    <b-button @click.prevent="onSlideStart('link')" target="_blank" :href="link" variant="outline-dark" size="xs">Читать полностью</b-button>
  </b-card>
</template>

<script>
  export default {
    props: ['imgSrc', 'caption', 'text', 'link'],
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        console.log(slide)
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
