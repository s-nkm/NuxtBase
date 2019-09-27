<template lang="pug">
section.l-auth-login
  .wrapper
    #show-auth
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  layout: 'noauth',
  mounted() {
    this.$auth0.showLock("show-auth");
  }
}
</script>

<style lang="scss">
.l-auth-login{
  display: grid;
  align-items: center;
  justify-content: center;
}
</style>
