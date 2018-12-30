import Vue from 'vue'
import Modal from './components/modal.vue'

new Vue({
  el: '#app',
  data: {
    message: "⛄👓",
    showModal: false
  },
  components: {
    Modal,
  },
})
