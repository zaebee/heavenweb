<template>
  <div>
    <div class="mx-3 mx-md-0" :class="classList">
      <h1>{{h1}}</h1>
      <p class="mt-3" v-html="slogan"></p>
      <nuxt-link
        class="btn btn-lg btn-info btn-header text-center text-md-left mt-4"
        to="/chat-bot">
        {{cta}}&rarr;
      </nuxt-link>
    </div>
    <transition name="page">
      <subscribe-form
        v-if="visibleForm"
        :large="large"
        :btn-go="btnGo"
        :close-btn="true"
        :class="{'open': visibleForm}"
        @hide-lead="$emit('hide-lead')"
        ></subscribe-form>
    </transition>
  </div>
</template>

<script>
  import SubscribeForm from '~/components/SubscribeForm.vue'
  export default {
    props: {
      large: {
        default: true,
        type: Boolean,
      },
      visibleForm: {
        default: true,
        type: Boolean
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
        default: 'Заполнить бриф',
        type: String
      },
      btnGo: {
        default: 'Хочу',
        type: String
      },
    },
    components: {
      SubscribeForm,
    },
    computed: {
      classList () {
        return {
          'text-box': this.showPromo,
          'jumbotron': !this.showPromo && !this.large
        }
      }
    },
    methods: {
    }
  };
</script>

<style scoped lang="scss">
</style>
