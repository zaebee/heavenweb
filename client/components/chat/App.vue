<template>
  <main
    id="app"
    class="chat-animate"
    :class="{'collapsed': close}">

    <TopHead
      v-if="app"
      :app="app"
      @close-chat="close = true"
      >
    </TopHead>

    <vue-scroll :ops="ops">
      <section class="bot-container chat-container">

        <Welcome
          v-if="messages.length == 0"
          :app="app">
        </Welcome>

        <!-- Messages Table -->
        <section class="messages">
          <table v-for="m in messages" class="message">
            <tr>
              <!-- My message -->
              <td>
                <Bubble
                  :text="m.queryResult.queryText"
                  from="me"
                />
              </td>
            </tr>

            <!-- Component iterator (Dialogflow Gateway Feature) -->
            <tr v-for="component in m.queryResult.fulfillmentMessages"
              :key="component.content.title">
                <td>
                  <!-- Default / Webhook bubble -->
                  <Bubble
                    v-if="component.name == 'DEFAULT'"
                    :text="component.content"/>

                  <!-- Simple Response -->
                  <Bubble
                    v-if="component.name == 'SIMPLE_RESPONSE'"
                    :text="component.content.displayText || component.content.textToSpeech"/>

                  <!-- Card -->
                  <Card
                    v-if="component.name == 'CARD'"
                    :title="component.content.title"
                    :subtitle="component.content.subtitle"
                    :image="component.content.image"
                    :text="component.content.formattedText"
                    :button="component.content.buttons[0]"
                    />

                  <!-- Carousel layout and cards -->
                  <div
                    v-if="component.name == 'CAROUSEL_CARD'"
                    class="carousel"
                    >
                      <div class="carousel-panel">
                      <vue-scroll :ops="carouselOps">
                        <Card
                        v-for="card in component.content"
                        @click.native="send(card.info.key)"
                        :key="card.info.key"
                        :title="card.title"
                        :image="card.image"
                        :subtitle="card.subtitle"
                        :text="card.description"
                        />
                      </vue-scroll>
                      </div>
                  </div>

                  <!-- List -->
                  <List
                    v-if="component.name == 'LIST'"
                    @select="send"
                    :items="component.content.items"
                    :title="component.content.title"
                    />

                  <!-- Webhook Image -->
                  <Picture
                    v-if="component.name == 'IMAGE'"
                    :image="component.content"
                    />
              </td>
            </tr>
          </table>
          <table class="message" v-if="loading">
            <tr>
              <!-- My message (Loading) -->
              <td><Bubble text="..." from="me" /></td>
            </tr>
            <tr>
              <!-- Default / Webhook bubble (Loading) -->
              <td><Bubble text="..." /></td>
            </tr>
          </table>
        </section>
      </section>

      <!-- #bottom is the anchor, we need, when new messages arrive, to scroll down -->
      <div id="bottom"></div>
    </vue-scroll>

    <!-- ChatInput is made for submitting queres and displaying suggestions -->
    <ChatInput
      @submit="send"
      @show-chat="close = false"
      :suggestions="suggestions"
      :close="close">
    </ChatInput>

  </main>
</template>

<script src="./App.js"></script>
<style lang="sass" src="./App.sass"></style>
