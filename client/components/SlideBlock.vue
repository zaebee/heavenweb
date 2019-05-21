<template>
  <b-col lg="6" md="6" sm="12" class="">
    <div class="hovereffect">
      <b-img-lazy
        v-bind="mainProps"
        height="300"
        class="img-responsive"
        :src="imgSrc"
        alt="">
      </b-img-lazy>
      <div class="overlay">
        <div class="h3 mt-5 text-white">Создание сайта</div>
        <div class="h2 text-white">{{name}}</div>
        <p class="text-white">{{slogan}}</p>
        <div class="case-footer">
          <b-btn
            href="#"
            size="lg"
            variant="outline-light"
            @click.prevent="onSlideStart(link)"
            class="mr-2">Посмотреть работу</b-btn>
          <span class="text-white">{{domain}}</span>
        </div>
      </div>
    </div>
  </b-col>
</template>

<script>
  export default {
    props: ['imgSrc', 'name', 'slogan', 'link', 'domain'],
    data() {
      return {
        slide: 0,
        sliding: null,
        mainProps: {
          center: true,
          fluidGrow: true,
          blank: true,
          blankColor: '#bbb',
          width: 600,
          height: 400,
          class: 'my-5'
        }
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
