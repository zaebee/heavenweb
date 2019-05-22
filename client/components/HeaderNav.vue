<template>
  <header
    class="mb-5"
    :class="{'header-with-promo': showPromo, 'header-small': !large}">
     <!-- Image and text -->

    <promo-block
      :h1="h1"
      :slogan="slogan"
      :btn-go="btnGo"
      :large="false"
      :show-promo="showPromo"
      :visible-form="visibleForm"
      @show-lead="$emit('show-lead')"
      @hide-lead="$emit('hide-lead')"
    />

  </header>
</template>

<script>
  import PromoBlock from '~/components/PromoBlock.vue'
  export default {
    props: {
      large: {
        default: true,
        type: Boolean,
      },
      showPromo: {
        default: true,
        type: Boolean
      },
      visibleForm: {
        default: true,
        type: Boolean
      },
      h1: {
        default: 'Создание и продвижение сайтов',
        type: String
      },
      slogan: {
        default: 'Приведем клиентов для вашего бизнеса',
        type: String
      },
      cta: {
        default: 'Заполнить бриф',
        type: String
      },
      btnGo: {
        default: 'Хочу',
        type: String
      },
    },
    components: {
      PromoBlock,
    },
    data () {
      return {
      }
    },
    computed: {
      classList () {
        return {
          'text-box': this.showPromo,
          'jumbotron': !this.showPromo && !this.large
        }
      }
    },
  };
</script>

<style scoped lang="scss">
  header {
    min-height: 100vh;
    position: relative;
    &.header {
      &-small:not(.header-with-promo) {
        min-height: 20vh;
      }
      &-with-promo {
        background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.9),
            rgba(0, 0, 0, 0.89),
            rgba(0, 0, 0, 0.4)
          ),
          url("/images/banner.jpg");
        background-position: center;
        background-size: cover;
      }
    }
  }
</style>
