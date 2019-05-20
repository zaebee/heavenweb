<template>
  <div id="contacts" class="pb-5 pt-5">
    <h3 class="pt-3 pb-3">Свяжитесь с нами</h3>
    <b-row class="pb-3">
      <b-col md="6" sm="12" class="pb-3">
        <h4 v-if="!noPhone">
          <a class="no-color" href="tel:+79535105359">+7 953 510 53 50</a>
        </h4>
        <p>
          <a class="no-color" href="mailto:mail@heavenweb.me">mail@heavenweb.me</a>
        </p>
        <p v-if="!noPhone">По будням с 8 до 20 часов по Москве</p>
        <nuxt-link
          to="/quiz"
          class="btn btn-subscribe mt-4 d-none d-md-inline-block"
          >Обратный звонок<span class="d-none d-md-inline"> &rarr; </span>
        </nuxt-link>
      </b-col>
      <div class="col-md">
        <ul class="list-unstyled">
          <li class="">
            <a
              rel="nofollow"
              href=""
              target="_blank">Реквизиты</a>
          </li>
          <li class="">
            <a rel="nofollow" href="" target="_blank">Положение о защите персональных данных</a>
          </li>
          <li class="">
            <span>ИП Громов · ИНН 352827679495 · ОГРН 3193525000076</span>
          </li>
        </ul>
        <ul class="list-inline footer-social">
          <li class="list-inline-item">
            <a href="">VK</a>
          </li>
          <li class="list-inline-item">
            <a href="">FB</a>
          </li>
        </ul>
      </div>
    </b-row>
  </div>
</template>

<script>
  export default {
    props: [
      'noPhone'
    ]
  }
</script>

<style scoped>
  a.no-color {
    color: #000;
  }
  li a {
    display: block;
    padding: 5px 0;
  }
</style>
