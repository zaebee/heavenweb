<template>
  <div class="bottomchat" :class="{'collapsed': close}">
    <div class="bot-container py-3 chat-animate">

      <!-- Here are the suggestions -->
      <div v-if="!close" class="suggestions">
        <vue-scroll :ops="ops">
          <Suggestion
            v-if="suggestions.text_suggestions"
            v-for="(suggestion, index) in suggestions.text_suggestions"
            :key="index"
            @click.native="$emit('submit', suggestion)"
            :title="suggestion" />
          <Suggestion
            v-if="suggestions.link_suggestion"
            :title="suggestions.link_suggestion.destinationName"
            :url="suggestions.link_suggestion.uri" />
        </vue-scroll>
      </div>

      <div class="d-flex">
        <!-- Text input -->
        <div
          v-if="!close"
          class="input-container">
          <input
            type="text"
            class="input"
            v-model="query"
            :aria-label="config.i18n[lang].inputTitle"
            :placeholder="config.i18n[lang].inputTitle"
            @keypress.enter="submit()"
            />
        </div>

        <!-- Send message button (arrow button) -->
        <div
          class="button-container"
          v-if="!micro && query.length > 0 && !close"
          :aria-label="config.i18n[lang].sendTitle"
          :title="config.i18n[lang].sendTitle"
          @click="submit()">
            <i class="material-icons"
              aria-hidden="true">arrow_upward</i>
        </div>

        <!-- Microphone Button -->
        <div
          :aria-label="config.i18n[lang].microphoneTitle"
          :title="config.i18n[lang].microphoneTitle"
          class="button-container mic-button"
          :class="{'mic-active': micro}"
          @click="micro = !micro"
          v-else-if="!close">
            <i class="material-icons"
              aria-hidden="true">mic</i>
        </div>

        <!-- Show chat Button -->
        <div
          class="button-container show-button"
          v-if="close"
          @click="$emit('show-chat')">
            <i class="material-icons"
              aria-hidden="true">message</i>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" src="./ChatInput.sass" scoped></style>

<script src="./ChatInput.js"></script>
