<template>
  <header
    class="mb-5"
    :class="{'header-with-promo': showPromo, 'header-small': !large}">
     <!-- Image and text -->

    <b-navbar variant="" type="">
      <b-navbar-brand href="/">
        <b-img width="36" src="/images/heaven.svg" class="d-inline-block align-top" alt="heavenweb - разработка и
          сопровождение чат ботов и рекламных компаний"/>
          Heaven.web &mdash; дружим с ботами и чатами
      </b-navbar-brand>
      <b-collapse id="nav-text-collapse" is-nav>
        <div class="w-100">
          <b-navbar-nav align="right" class="mt-1">
            <b-nav-item active>
              Команда
            </b-nav-item>
            <b-nav-item>
              Проекты
            </b-nav-item>
            <b-nav-item>
              Продвижение
            </b-nav-item>
            <b-nav-item>
              Разработка
            </b-nav-item>
            <b-nav-item>
              Контакты
            </b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav align="right" class="my-3">
            <b-nav-item
              href="tel:+79535105359"
              class="font-weight-bolder">
             +7 953 510 53 59
            </b-nav-item>
            <b-btn
              variant="subscribe"
              size="sm"
              class="my-2 my-sm-0"
              @click="$emit('show-lead')">
              Обратный звонок
            </b-btn>
          </b-navbar-nav>
        </div>
      </b-collapse>
    </b-navbar>

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
