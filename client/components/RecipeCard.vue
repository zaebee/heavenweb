
<template>
  <div class="card recipe-card">
    <img :src="post.picture" class="card-img-top" >
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <div v-html="post.content"></div>
      <div class="action-buttons">
        <nuxt-link :to="`/posts/${post.id}/`" class="btn btn-sm btn-success"> Просмотр </nuxt-link>
        <nuxt-link :to="`/posts/${post.id}/edit/`" class="btn btn-sm btn-primary"> Редактировать </nuxt-link>
        <button @click="onDelete(post.id)"  class="btn btn-sm btn-danger">Удалить</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: ["post", "onDelete"]
};
</script>
<style>
.recipe-card {
    box-shadow: 0 1rem 1.5rem rgba(0,0,0,.6);
}
</style>
