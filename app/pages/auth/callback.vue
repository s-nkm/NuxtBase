<template lang="pug">
section.l-auth-callback
  nuxt-link(to="/") Login...
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  layout: 'noauth',
  mounted() {
    this.$auth0.setTokenByQuery()
    this.$router.push('/sample')
  },
  asyncData(){
  }
}
</script>

<style lang="scss">
.l-auth-callback{
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: auto;
}
</style>
