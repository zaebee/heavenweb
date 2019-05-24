<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Вход</h2>

          <Notification :message="error" v-if="error"/>

          <form method="post" @submit.prevent="login">

            <div class="field">
              <label class="label">Имя пользователя</label>

              <div class="control">
                <input
                  type="text"
                  class="input"
                  name="username"
                  v-model="username"
                >
              </div>
            </div>

            <div class="field">
              <label class="label">Пароль</label>

              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="password"
                >
              </div>
            </div>

            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Войти</button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">
            <p>
              Нет аккаунта? <nuxt-link to="/register">Регистрация</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Notification from '~/components/Notification';

export default {
  middleware: 'guest',

  components: {
    Notification,
  },

  data() {
    return {
      username: '',
      password: '',
      error: null,
    };
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            username: this.username,
            password: this.password,
          },
        });

        this.$router.push('/');
      } catch (e) {
        this.error = e.response.data;
      }
    },
  },
};
</script>

