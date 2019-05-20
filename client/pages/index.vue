<template>
  <div>
    <header class="mb-5">
      <div class="text-box">
        <h1>Создание и продвижение сайтов</h1>
        <p class="mt-3">Приведем клиентов для вашего бизнеса</p>
        <nuxt-link class="btn btn-lg btn-info btn-header text-center text-md-left mt-4" to="/recipes">
          Оставить заявку&rarr;
        </nuxt-link>
      </div>
    </header>

    <nofear></nofear>
    <subscribe-form></subscribe-form>

    <b-container class="pt-4">
      <h3 class="pb-3 text-md-left text-center">Кейсы по продвижению сайтов</h3>
      <b-card-group deck>
        <case-card
          caption="115 заявок по 173 р «Продажа квартир в Турции»"
          img-alt="115 заявок по 173 р «Продажа квартир в Турции»"
          img-src="https://pp.userapi.com/c849132/v849132847/e05b5/7hz6fRIyh1I.jpg"
          link="https://vk.com/@mudrrrr-keis-rsya-kviz-115-zayavok"
          text="На текущий момент результат с 3-х квизов — 115 заявок по 173 рубля. Я не собираюсь останавливаться и буду продолжать оптимизировать показатели до тех пор пока не состоится первая продажа."
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

      <b-card-group class="pt-3">
        <b-card
          overlay
          class="card-hidden"
          img-src="https://pp.userapi.com/c830308/v830308666/16686f/rOpBocDh8_o.jpg"
          text-variant="white"
          body-class="py-5 shadow"
          title="Яндекс Директ для гостиницы Измайлово, г. Москва."
          img-alt="Яндекс Директ для гостиницы Измайлово, г. Москва."
        >
          <p>Заказчик: OOO «Luxe-tour» — туроператор гостиницы Измайлово, г. Москва.</p>
          <p>Цель: Бронь номеров в гостинице Измайлово через модуль онлайн бронирования Travelline.</p>
          <b-button
            rel="nofollow"
            href="https://vk.com/@mudrrrr-keis-yandeks-direkt-dlya-gostinicy-izmailovo-g-moskva"
            size="lg"
            target="_blank"
            variant="subscribe btn-subscribe-white"
            class="mt-5">
            Читать полностью
          </b-button>
        </b-card>
      </b-card-group>
    </b-container>

    <action-block></action-block>

    <b-container class="pt-4 pb-4">
      <h3 class="pb-3 text-md-left text-center">Создание и продвижение сайтов</h3>
      <b-row>
        <b-col lg="6" md="6" sm="12" class="mt-3">
          <div class="hovereffect">
            <b-img-lazy
              fluid
              height="300"
              class="img-responsive"
              src="/images/portfolio/bemeta_mainpage.png"
              alt="">
            </b-img-lazy>
            <div class="overlay">
              <div class="h3 mt-5 text-white">Создание сайта</div>
              <div class="h2 text-white">Bemeta</div>
              <p class="text-white">Сервис поиска психотерапевтов</p>
              <div class="case-footer">
                <a href="#" class="btn btn-lg btn-outline-light">Посмотреть работу</a>
                <span class="text-white">bemeta.co</span>
              </div>
            </div>
          </div>
        </b-col>

        <b-col lg="6" md="6" sm="12" class="mt-3">
          <div class="hovereffect">
            <b-img-lazy
              fluid
              height="300"
              class="img-responsive"
              src="/images/portfolio/whatwhere_mainpage.png"
              alt="">
            </b-img-lazy>
            <div class="overlay">
              <div>
                <div class="h3 mt-5 text-white">Создание сайта</div>
                <div class="h2 text-white">WhatWhere</div>
                <p class="text-white">Лучшие события рядом и по всему миру</p>
                <div class="case-footer">
                  <a href="#" class="btn btn-lg btn-outline-light">Посмотреть работу</a>
                  <span class="text-white">whatwhere.world</span>
                </div>
              </div>
            </div>
          </div>
        </b-col>

        <div class="w-100"></div>

        <b-col lg="6" md="6" sm="12" class="mt-0">
          <div class="hovereffect">
            <b-img-lazy
              fluid
              height="300"
              class="img-responsive"
              src="/images/portfolio/happify_mainpage.png"
              alt="">
            </b-img-lazy>
            <div class="overlay">
              <div>
                <div class="h3 mt-5 text-white">Создание сайта</div>
                <div class="h2 text-white">Happify</div>
                <p class="text-white">Социальная сеть, чтобы стать счастливым</p>
                <div class="case-footer">
                  <a href="#" class="btn btn-lg btn-outline-light">Посмотреть работу</a>
                  <span class="text-white">happify.com</span>
                </div>
              </div>
            </div>
          </div>
        </b-col>

        <b-col lg="6" md="6" sm="12" class="mt-0">
          <div class="hovereffect">
            <b-img-lazy
              fluid
              height="300"
              class="img-responsive"
              src="/images/portfolio/mebelstock_catalog.png"
              alt="">
            </b-img-lazy>
            <div class="overlay">
              <div>
                <div class="h3 mt-5 text-white">Создание сайта</div>
                <div class="h2 text-white">mebelstock</div>
                <p class="text-white">Магазин антиквариата и мебели для дома</p>
                <div class="case-footer">
                  <a href="#" class="btn btn-lg btn-outline-light">Посмотреть работу</a>
                  <span class="text-white">mebelstock.com</span>
                </div>
              </div>
            </div>
          </div>
        </b-col>

      </b-row>
    </b-container>

    <b-container>
      <footer-nav/>
    </b-container>
  </div>
</template>

<script>
  import Nofear from '~/components/Nofear.vue'
  import SubscribeForm from '~/components/SubscribeForm.vue'
  import ActionBlock from '~/components/ActionBlock.vue'
  import MainSlider from '~/components/MainSlider.vue'
  import CaseCard from '~/components/CaseCard.vue'
  import FooterNav from '~/components/FooterNav.vue'

  export default {
    head() {
      return {
        title: "Веб-студия разработки сайтов и рекламного продвижения"
      };
    },
    components: {
      Nofear,
      SubscribeForm,
      ActionBlock,
      MainSlider,
      CaseCard,
      FooterNav
    }
  };
</script>

<style scoped>
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
  .shadow {
    background: rgba(0,0,0,.38);
  }
</style>
