<template>
  <div class="overlay" v-if="app">

    <!-- Agent Icon -->
    <img
      :alt="app.displayName"
      class="app-icon"
      :src="app.avatarUri"
      v-if="app.avatarUri" />
    <img
      :alt="app.displayName"
      class="app-icon"
      src="/images/heaven.svg"
      v-else />

    <!-- Agent Title -->
    <h1 class="app-title">
      {{config.i18n[sel_lang].welcomeTitle}} {{app.displayName}}
    </h1>

    <!-- Agent Description -->
    <p class="app-description">{{app.description}}</p>

    <!-- Language picker, when your Agent supports more than one Language -->
    <div v-if="app && app.supportedLanguageCodes !== undefined && app.supportedLanguageCodes.length > 0">
      <span
        class="language-picker"
        @click="sel_lang = app.defaultLanguageCode"
        :class="{'picked': sel_lang == app.defaultLanguageCode}">
        {{ app.defaultLanguageCode | toLang }}
      </span>

      <span
        class="language-picker"
        @click="sel_lang = language"
        v-for="language in app.supportedLanguageCodes"
        :class="{'picked': sel_lang == language}">
        {{ language | toLang }}
      </span>
    </div>
  </div>
</template>

<script src="./Welcome.js"></script>
<style scoped lang="sass" src="./Welcome.sass"></style>
