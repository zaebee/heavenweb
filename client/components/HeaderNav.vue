<template>
  <header
    class="mb-5"
    :class="{'header-with-promo': showPromo}">
    <div class="text-box mx-3 mx-md-0">
      <h1>{{h1}}</h1>
      <p class="mt-3">{{slogan}}</p>
      <nuxt-link class="btn btn-lg btn-info btn-header text-center text-md-left mt-4" to="/recipes">
        {{cta}}&rarr;
      </nuxt-link>
    </div>
    <subscribe-form
      :btn-go="btnGo"
      :large="large"
      ></subscribe-form>
  </header>
</template>

<script>
  import SubscribeForm from '~/components/SubscribeForm.vue'
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
      h1: {
        default: 'Создание и продвижение сайтов',
        type: String
      },
      slogan: {
        default: 'Приведем клиентов для вашего бизнеса',
        type: String
      },
      cta: {
        default: 'Оставить заявку',
        type: String
      },
      btnGo: {
        default: 'Хочу',
        type: String
      },
    },
    components: {
      SubscribeForm,
    }
  };
</script>

<style scoped lang="scss">
  header {
    min-height: 100vh;
    position: relative;
    &.-with-promo {
      background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.9),
          rgba(0, 0, 0, 0.4)
        ),
        url("/images/banner.jpg");
      background-position: center;
      background-size: cover;
    }
  }
</style>
