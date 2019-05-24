<template>
  <div class="marquiz__container marquiz__container_inline">
  <a
    class="marquiz__button marquiz__button_blicked marquiz__button_rounded marquiz__button_shadow"
    href="#popup:marquiz_5ce7e16460940800446dd14e"
    data-fixed-side=""
    data-alpha-color="rgba(211, 64, 133, 0.5)"
    data-color="#d34085"
    data-text-color="#ffffff">Пройти тест</a>
  </div>
</template>

<script>
  export default {
    render (){
      Marquiz.init({
        id: '5ce7e16460940800446dd14e',
        autoOpen: false,
        autoOpenFreq: 'once',
        openOnExit: false
      });
    }
  }
</script>
