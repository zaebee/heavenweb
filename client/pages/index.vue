<template>
  <div>
    <header class="mb-5">
      <div class="text-box">
        <h1>Создание и продвижение сайтов</h1>
        <p class="mt-3">Приведем клиентов для вашего бизнеса</p>
        <nuxt-link class="btn btn-large btn-info button header__button" to="/recipes">
          Оставить заявку<span class="ml-2">&rarr;</span>
        </nuxt-link>
      </div>
    </header>
    <nofear></nofear>
    <subscribe-form></subscribe-form>
    <action-block></action-block>
  </div>
</template>

<script>
  import Nofear from '~/components/Nofear.vue'
  import SubscribeForm from '~/components/SubscribeForm.vue'
  import ActionBlock from '~/components/ActionBlock.vue'
  export default {
    head() {
      return {
        title: "Веб-студия разработки сайтов и рекламного продвижения"
      };
    },
    components: {
      Nofear,
      SubscribeForm,
      ActionBlock
    }
  };
</script>

<style>
  header {
    min-height: 100vh;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.9),
        rgba(0, 0, 0, 0.4)
      ),
      url("/images/banner.jpg");
    background-position: center;
    background-size: cover;
    position: relative;
  }
  .text-box {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    color: #fff;
  }
  .text-box h1 {
    font-size: 4rem;
  }
  .text-box p {
    font-size: 2rem;
    font-weight: lighter;
  }
</style>
