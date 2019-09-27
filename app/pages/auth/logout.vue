<template lang="pug">
section.l-auth-logout
  nuxt-link(to="/auth/login") Logout...
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  layout: 'noauth',
  mounted() {
    this.$auth0.unsetToken();
    this.$router.replace('/auth/login')
  }
}
</script>

<style lang="scss">
.l-auth-logout{
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: auto;
}
</style>
