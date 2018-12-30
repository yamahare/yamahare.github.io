import Vue from 'vue'
import Test from './components/test.vue'

const app = new Vue({
  el: '#app',
  data: {
    message: "🌆🍷🙆",
    showModal: false
  },
  components: {
    Test,
  },
})
