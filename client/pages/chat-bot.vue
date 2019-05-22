<template>
  <div>
    <header-nav
      btn-go="Отправить"
      :large="false"
      :show-promo="false"
      h1="Чат с девушкой ботом онлайн"
      slogan="Разрабатываем и внедряем дружелюбных ботов. <br/>Статистика, аналитика, общение. Интеграция с telegram и vk."
      :visible-form="visibleForm"
      @show-lead="showLeadForm"
      @hide-lead="hideLeadForm"
    />

    <b-container fluid>
      <action-block></action-block>
    </b-container>

    <b-container>
      <footer-nav/>
    </b-container>

    <chat/>

  </div>
</template>

<script>
  import HeaderNav from '~/components/HeaderNav.vue'
  import Nofear from '~/components/Nofear.vue'
  import SubscribeForm from '~/components/SubscribeForm.vue'
  import ActionBlock from '~/components/ActionBlock.vue'
  import MainSlider from '~/components/MainSlider.vue'
  import CaseCard from '~/components/CaseCard.vue'
  import CaseLink from '~/components/CaseLink.vue'
  import SlideBlock from '~/components/SlideBlock.vue'
  import FooterNav from '~/components/FooterNav.vue'
  import Chat from '~/components/chat/App.vue'

  export default {
    head() {
      return {
        title: "Heavenweb.me - разработка чат-ботов и настройка с CRM системой"
      };
    },
    components: {
      HeaderNav,
      Nofear,
      SubscribeForm,
      ActionBlock,
      MainSlider,
      CaseCard,
      CaseLink,
      SlideBlock,
      FooterNav,
      Chat,
    },
    data () {
      return {
        visibleForm: null
      }
    },
    methods: {
      showLeadForm (source) {
        this.visibleForm = true
        console.log('show', source)
      },
      hideLeadForm (source) {
        this.visibleForm = false
        console.log('hide', source)
      }
    }
  };
</script>

<style scoped>
</style>
