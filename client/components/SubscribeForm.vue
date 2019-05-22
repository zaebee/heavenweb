<template>
  <div :class="classList">
    <div>
    <transition name="page">
      <b-alert
        dismissible
        :show="!!subscribeSuccess"
        class="float-right my-3 mr-3"
        variant="info">Спасибо за подписку!</b-alert>
    </transition>
    </div>
    <b-form
      inline
      v-if="!subscribeSuccess"
      @submit.stop.prevent="subscribe"
      :class="{'px-5': large, 'px-2 py-0 bottom-0': !large}"
      class="card-body col-12 no-gutters justify-content-center">
      <div v-if="large" class="col-md-6 col-sm-12">
        <h3>Как увеличить продажи?</h3>
        <p>
          Мы подготовили для вас отличную информацию о том,
          как самостоятельно увеличить продажи через сайт!
          <br>Напишите адрес своей почты, чтобы скачать.
        </p>
      </div>

      <b-btn-close v-show="closeBtn" @click="$emit('hide-lead')"/>
      <div class="col-md-4 col-sm-12 mt-4 mb-4">
        <b-input-group
          :invalid-feedback="invalidEmail"
          :valid-feedback="validEmail"
          :state="stateEmail"
          class="mr-sm-2 mb-sm-0">
          <b-input
            size="lg"
            v-model="email"
            :state="stateEmail"
            id="subscribe_email"
            placeholder="example@yandex.ru" />
        </b-input-group>
        <div role="alert"
          v-show="!stateEmail"
          class="invalid-feedback d-block">{{invalidEmail}}</div>
      </div>

      <div class="col-md-2 col-sm-12 text-center">
        <b-button
          @click.prevent="subscribe"
          :disabled="disabled"
          size="lg"
          class="col-sm-12 "
          :class="{'btn-subscribe-active': !large}"
          value="btnGo"
          variant="subscribe">
          <b-spinner
            v-if="disabled"
            small
            type="grow"
            label="Сохраняем...">
          </b-spinner>
          <span v-if="!disabled">{{btnGo}}</span>
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { mapGetters } from 'vuex'
  import { mapState } from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    async fetch ({ store, params, error }) {
      console.log('FETCHED STORE', store)
      // TODO get story by slug from api
    },
    props: ['large', 'btnGo', 'closeBtn'],
    components: {
    },
    data () {
      return {
        // lead: this.$store.state.lead,
        errors: {},
        email: null,
        disabled: false,
        subscribeSuccess: false,
      }
    },
    computed: {
      ...mapState([
        'quiz',
        'lead'
      ]),
      classList () {
        return this.large ? 'row card' : ''
      },
      stateEmail () {
        return this.lead.email ? false : true
      },
      stateEmail () {
        let email = this.$store // let email = this.lead.email
        let validEmail = this.validateEmail(this.email)
        let empty = _.isString(email) && _.isEmpty(email)
        return (empty || !validEmail) ? false : true
      },
      validEmail () {
        console.log('validEmail', this.lead)
        // let errors = this.$store.state.lead.errors
        // return errors ? false : true
      },
      invalidEmail () {
        let errorMsg = ''
        let validEmail = this.validateEmail(this.email)
        if (!validEmail) {
          errorMsg = 'Напишите правильный email'
        }
        if (_.isEmpty(this.email)) {
          errorMsg = 'Напишите ваш email'
        }
        if (_.isEmpty(errorMsg)) {
          //this.$store.commit('errors', {})
        } else {
          //this.$store.commit('errors', {errors: errorMsg, email: this.email})
        }
        return errorMsg
      },
    },
    methods: {
      validateEmail (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      subscribe () {
        // TODO await this.$store.dispatch
        let isValid = _.every([
          this.errors,
          this.invalidEmail,
        ], _.isEmpty)
        if (isValid) {
          this.$store.dispatch('lead/save', {email: this.email})
          this.errors = {}
          this.subscribeSuccess = true
          // this.handleSubmit(evt)
        }
      }
    },
    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 3rem;
  }
  .open .card-body {
    position: absolute;
    bottom: 0;
    top: 0;
    width: 100%;
    background: #fff;
    z-index: 9;
  }
  form {
    label {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }
    input {
      border: none;
      &.is-invalid {
        border: none;
        border-bottom: 5px solid #f14040;
      }
    }
    .invalid-feedback {
      position: absolute;
      bottom: -20px;
    }
  }
  .card {
    box-shadow: 0 15px 40px 5px rgba(21, 24, 36, 0.12);
  }
</style>
