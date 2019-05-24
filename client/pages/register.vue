<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Регистрация</h2>

          <Notification :message="error" v-if="error"/>

          <form method="post" @submit.prevent="register">

            <div class="field">
              <label class="label">Имя пользователя</label>

              <div class="control">
                <input
                  type="text"
                  class="input"
                  name="username"
                  v-model="username"
                  required
                >
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>

              <div class="control">
                <input
                  type="email"
                  class="input"
                  name="email"
                  v-model="email"
                  required
                >
              </div>
            </div>

            <div class="field">
              <label class="label">Пароль</label>

              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password1"
                  v-model="password1"
                  required
                >
              </div>
            </div>

            <div class="field">
              <label class="label">Пароль еще раз</label>

              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password2"
                  v-model="password2"
                  required
                >
              </div>
            </div>

            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Зарегистрироваться</button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">
            Есть аккаунт? <nuxt-link to="/login">Вход</nuxt-link>
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
      email: '',
      password1: '',
      password2: '',
      error: null,
    };
  },

  methods: {
    async register() {
      try {
        await this.$axios.post('rest-auth/registration/', {
          username: this.username,
          email: this.email,
          password1: this.password1,
          password2: this.password2,
        });

        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
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

