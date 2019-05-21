<template>
  <div>
    <header-nav
      btn-go="Отправить"
      :large="false"
      :visible-form="visibleForm"
      @show-lead="showLeadForm"
      @hide-lead="hideLeadForm"
    />

    <nofear></nofear>

    <b-container fluid class="pt-3 pb-5">
      <subscribe-form
        btn-go="Хочу"
        :large="true"
        ></subscribe-form>
    </b-container>

    <b-container class="pt-4">
      <h2 class="pb-4 text-center">Кейсы по продвижению сайтов</h2>
      <b-card-group deck>
        <case-card
          caption="115 заявок по 173 р «Продажа квартир в Турции»"
          img-alt="115 заявок по 173 р «Продажа квартир в Турции»"
          link="https://vk.com/@mudrrrr-keis-rsya-kviz-115-zayavok"
          text="На текущий момент результат с 3-х квизов — 115 заявок по 173 рубля. Я не собираюсь останавливаться и буду продолжать оптимизировать показатели до тех пор пока не состоится первая продажа."
          img-src="https://pp.userapi.com/c849132/v849132847/e05b5/7hz6fRIyh1I.jpg"
        ></case-card>

        <case-card
          caption="«Продажа теплиц». Внедряем квиз в сайт, поднимаем конверсию."
          link="https://vk.com/@mudrrrr-prodazha-teplic-vstraivaem-kviz-v-sait-podnimaem-otkryvaemos"
          text="Дано: Два рабочих сайта. Сезон в разгаре. Трафик уже запущен, качество и количество заявок устраивает, но хочется больше. Задача: На живую внедрить квизы и добиться конверсий."
          img-src="https://pp.userapi.com/c849032/v849032748/160ffa/nc4LWnftWlE.jpg"
        ></case-card>

        <case-card
          caption="«Домокомплекты из бруса» Квиз и РСЯ — 116 заявок за 1 месяц"
          link="https://vk.com/@mudrrrr-domokomplekty-iz-brusa-kviz-i-rsya-116-zayavok-za-mesyac"
          text="В первой части я писал, как совместно со Светлицей мы создали квиз-сайт, пустили на него трафик из РСЯ и почти сразу получили лиды."
          img-src="https://pp.userapi.com/c845321/v845321373/1a1ca1/nJQR1nRGD0Q.jpg"
        ></case-card>

      </b-card-group>

      <b-card-group class="pt-5">
        <b-card
          overlay
          text-variant="white"
          body-class="py-5 shadow-overlay"
          class="card-hidden"
          title="Яндекс Директ для гостиницы Измайлово, г. Москва."
          img-alt="Яндекс Директ для гостиницы Измайлово, г. Москва."
          img-src="https://pp.userapi.com/c830308/v830308666/16686f/rOpBocDh8_o.jpg"
        >
          <p class="d-none d-md-block">Заказчик: OOO «Luxe-tour» — туроператор гостиницы Измайлово, г. Москва.</p>
          <p class="d-none d-md-block">Цель: Бронь номеров в гостинице Измайлово через модуль онлайн бронирования Travelline.</p>
          <!-- // TODO show more text -->
          <b-button
            size="lg"
            target="_blank"
            rel="nofollow"
            variant="outline-light"
            href="https://vk.com/@mudrrrr-keis-yandeks-direkt-dlya-gostinicy-izmailovo-g-moskva"
            class="mt-2 mt-md-5">
            Читать полностью
          </b-button>
        </b-card>
      </b-card-group>
    </b-container>

    <b-container fluid>
      <action-block></action-block>
    </b-container>

    <b-container class="pt-4 pb-4">
      <h2 class="pb-4 text-center">Создание и продвижение сайтов</h2>
      <b-row class="no-gutters">
        <slide-block
          name="Be meta"
          domain="bemeta.co"
          slogan="Сервис поиска психотерапевтов"
          img-src="/images/portfolio/bemeta_mainpage.png"
          link="/prejects/initial"
        />
        <slide-block
          name="What where"
          domain="whatwhare.world"
          slogan="Лучшие события рядом и по всему миру"
          img-src="/images/portfolio/whatwhere_mainpage.png"
          link="/prejects/ww"
        />

        <div class="w-100"></div>

        <slide-block
          name="happy"
          domain="happify.com"
          slogan="Социальная сеть, чтобы стать счастливым"
          img-src="/images/portfolio/happify_mainpage.png"
          link="/prejects/happy"
        />
        <slide-block
          name="Mebel stock"
          domain="mebelstock.com"
          slogan="Магазин антиквариата и мебели для дома"
          img-src="/images/portfolio/mebelstock_catalog.png"
          link="/prejects/stock"
        />
      </b-row>
      <case-link/>
    </b-container>

    <b-container>
      <footer-nav/>
    </b-container>
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
        title: "Команда разработки web-сайтов и рекламного продвижения в direct/adwords"
      };
    },
    data () {
      return {
        visibleForm: false
      }
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
      Chat
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
