<template>
  <header class="app-head">
    <b-btn-close
      class="float-left"
      @click="$emit('close-chat')"/>

    <div class="app-info">
      <div class="app-name">{{app.displayName}}</div>
    </div>
    <img :alt="app.displayName" class="app-icon" :src="app.avatarUri" v-if="app.avatarUri" />
  </header>
</template>

<style lang="sass" scoped>
.app-head
  z-index: 666
  padding: 16px
  position: fixed
  width: 500px
  background-color: white
  text-align: right;
  border-bottom: 1px solid #F1f3f4

  .close
    font-size: 32px
  .app-icon
    border-radius: 50%
    width: 30px
    height: 30px
    object-fit: cover

  .app-info
    display: inline-block
    margin-left: 10px
    .app-name
      font-size: 18px
      font-weight: 500
      color: #202124

</style>

<script>
export default {
    name: 'TopHead',
    props: ['app']
}
</script>
