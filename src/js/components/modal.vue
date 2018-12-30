<template lang="pug">
  transition
    .c-modal__overlay
      .c-modal__content
        i.fas.fa-snowflake.fa-spin
        p {{ greeting }}
        .c-modal__close(@click="$emit('close')")
          i.fas.fa-times
      .c-modal__background(@click="$emit('close')")
</template>

<script>
export default{
  data (){
    return{
      greeting: 'こんにちは',
    }
  },
}
</script>

<style scoped>
  .fa-snowflake {
    color: cornflowerblue;
    font-size: 3rem;
  }
  .v-enter-active, v-leave-active{
    transition: opacity .3s
  }
  .v-enter, v-leave-to{
    opacity: 0
  }
</style>
