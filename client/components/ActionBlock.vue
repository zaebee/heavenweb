<template>
  <b-container fluid>

    <div class="row mb-5">
      <div class="col-md-12">
        <b-container fluid class="pt-5 pb-5">
          <b-row class="align-items-center">
            <b-col md="2" class="text-center">
              <div class="pb-2">
                <img class="rounded-circle" src="/experts/expert-first-small.jpg" alt="Эксперты Меты готовы помочь"/>
                <img class="rounded-circle" src="/experts/expert-second-small.jpg" alt="Помощь экспертов Меты"/>
                <img class="rounded-circle" src="/experts/expert-third-small.jpg" alt="Мы всегда рядом"/>
              </div>
            </b-col>
            <b-col md="6">
              <div class="pb-2">
                <span><b>НЕ ЗНАЕТЕ С ЧЕГО НАЧАТЬ?</b><br/> ответьте на несколько вопросов, <br class="d-none d-md-block"/>и вы узнаете, чем мы можем быть полезны</span>
              </div>
            </b-col>
            <b-col md="4">
              <div class="pb-2 text-center">
                <a href="#"
                   @click.prevent="$root.$emit('bv::show::modal', 'requestModal', $event.target)"
                   class="d-none d-md-block btn btn-info btn-lg button subscribe__button">Подберите мне психолога</a>
              </div>
            </b-col>
          </b-row>
        </b-container>

      </div>
    </div>
  </b-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapState } from 'vuex'

  export default {
    scrollToTop: true,
    async fetch ({ store, params, error }) {
      // TODO get story by slug from api
      // await store.dispatch('GET_TOPICS')
      // await store.dispatch('GET_STORIES')

    },
    components: {
    },
    data () {
      return {
        email: null,
        titles: ['психолог и психотерапевт', 'психолога и психотерапевта', 'психологов и психотерапевтов']
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

<style lang="scss">
</style>
