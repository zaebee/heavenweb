const langs = require('langs')

export default {
  name: 'welcome',
  props: ['app'],
  data(){
    return {
      sel_lang: 'ru'
    }
  },
  watch: {
    // Check, if we have a translation for the selected language,
    // if not -> fallback to default language
    sel_lang(value) {
        if (!this.config.i18n[value]) {
          alert('No translation is currently available for this language')
          this.sel_lang = this.config.app.fallback_lang
        } else {
          if( this.history) {
            localStorage.setItem('lang', this.sel_lang)
          } else {
            this.config.app.fallback_lang = this.sel_lang
          }
        }
    }
  },
  filters: {
    // This filter turns language code to the local language name
    // using the langs dependency (example "en" -> "English")
    toLang(code) {
      return langs.where('1', code).local
    }
  },
  computed: {
    config() {
      return this.$store.state.config
    },
    history() {
      try {
        localStorage.getItem('check')
        return true
      }
      catch {
        return false
      }
    },
    lang() {
      if (this.history) {
        return localStorage.getItem('lang') || this.config.app.fallback_lang
      } else {
        return this.config.app.fallback_lang
      }
    },
  }
}
