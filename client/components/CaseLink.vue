<template>
  <b-row class="re-cases-links">
    <b-col md="8" sm="12">
      <a class="offer" href="/images/kp_website.pdf" target="_blank"><span>Коммерческое предложение по созданию сайта</span></a>
      <a class="brief" href="/images/brif.pdf" target="_blank"><span>Скачать бриф</span></a>
      <a class="offer" href="/images/kp_seo.pdf" target="_blank"><span>Коммерческое предложение по продвижению сайтов</span></a>
    </b-col>
    <b-col md="4" sm="12">
      <!--
      <b-btn
        size="lg"
        href="/portfolio"
        variant="outline-lite">Посмотреть больше работ</b-btn>
      -->
    </b-col>
  </b-row>
</template>

<script>

  export default {
    components: {
    },
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
    },
    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  .re-cases-links {
    margin: 2rem 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    .offer {
      background-image: url(/images/result.svg);
    }
    .brief {
      background-image: url(/images/brand.svg);
    }
    .brief, .offer {
      font-size: 14px;
      color: #28a745;
      text-transform: uppercase;
      background-position: 0 50%;
      background-size: auto 33px;
      background-repeat: no-repeat;
      display: inline-block;
      height: 50px;
      line-height: 50px;
      padding-left: 36px;
      margin-right: 4rem;
      span {
        display: inline-block;
        border-bottom: 1px dotted #28a745;
        line-height: 1.6;
      }
    }
  }

</style>
