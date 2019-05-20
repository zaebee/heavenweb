<template>
  <b-container fluid>

    <div class="row mb-5">
      <div class="col-md-12">
        <b-container class="pt-5 pb-5">
          <b-row class="align-items-center">
            <b-col md="2" offset="1" class="text-right">
              <div class="pb-2">
                <b-img thumbnail src="/images/thinking.svg" width="75" alt="Заполните бриф на разработку сайта" class="border-0"/>
              </div>
            </b-col>
            <b-col md="4">
              <div class="pb-2">
                <span>
                  <b>НЕ ЗНАЕТЕ С ЧЕГО НАЧАТЬ?</b>
                  <br/> Ответьте на несколько вопросов, <br class="d-none d-md-block"/>и вы узнаете, чем мы можем быть полезны
                </span>
              </div>
            </b-col>
            <b-col md="3">
              <div class="pb-2 text-center">
                <b-btn href="#"
                  @click.prevent="$root.$emit('bv::show::modal', 'requestModal', $event.target)"
                  size="lg"
                  variant="subscribe"
                  class="d-md-block">
                  Заполнить бриф
                </b-btn>
                  <span class="help-text">мы ответим в течение 12 часов</span>
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
