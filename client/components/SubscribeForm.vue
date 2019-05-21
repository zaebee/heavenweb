<template>
  <div :class="classList">
    <transition>
      <b-alert
        dismissible
        :show="!!subscriberEmail"
        variant="success">Спасибо за подписку!</b-alert>
    </transition>
    <b-form
      inline
      v-if="!subscriberEmail"
      @submit.stop.prevent="subscribeForm"
      :class="{'px-5': large, 'px-0': !large}"
      class="card-body col-12 no-gutters">
      <div v-if="large" class="col-md-6 col-sm-12">
        <h3>Как увеличить продажи?</h3>
        <p>
          Мы подготовили для вас отличную информацию о том,
          как самостоятельно увеличить продажи через сайт!
          <br>Напишите адрес своей почты, чтобы скачать.
        </p>
      </div>

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
        <b-btn
          @click.prevent="subscribeForm"
          size="lg"
          class="col-sm-12 "
          variant="subscribe">{{btnGo}}</b-btn>
      </div>
    </b-form>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { mapGetters } from 'vuex'
  import { mapState } from 'vuex'

  export default {
    async fetch ({ store, params, error }) {
      // TODO get story by slug from api
    },
    props: ['large', 'btnGo'],
    components: {
    },
    data () {
      return {
        email: null,
        errors: {},
        subscriberEmail: null,
      }
    },
    computed: {
      classList () {
        return this.large ? 'row card' : ''
      },
      stateEmail () {
        return this.errors.subscriber_email ? false : true
      },
      invalidEmail () {
        if (this.errors.subscriber_email) {
          return this.errors.subscriber_email.join('; ')
        } else {
          return ''
        }
      },
      validEmail () {
        return this.errors.subscriber_email ? false : true
      },
    },
    methods: {
      subscribeForm () {
        this.subscriberEmail = true
        return
        console.log('subscribe')
        this.$store.dispatch('SUBSCRIBE', {subscriber_email: this.email}).then(
          response => {
            let isValid = _.every([
              this.errors,
              this.invalidEmail,
            ], _.isEmpty)
            if (isValid) {
              console.log('success subscribed')
              // this.handleSubmit(evt)
            }
          },
        )
      }
    },
    mounted () {
    }
  }
</script>

<style lang="scss">
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
    background-color: #ffffff;
  }
</style>
