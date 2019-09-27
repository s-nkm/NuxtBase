<template lang="pug">
section.l-sample
  .login You are {{ isLogin }}
  .message {{ message }} {{ sample }}
  Sample(message="This is message.")
  .dayjs {{ $dayjs().format('YYYY/MM/DD (ddd)') }}
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Sample from '~/components/Sample.vue'
export default {
  layout: 'noauth',
  data: function () { return {
    message: "Hello!"
  }},
  async asyncData({ $axios }){ 
  },
  computed: {
    ...mapGetters('sample', ['sample']),
    isLogin(){
      return this.$auth0.isAuthenticated() ? 'logined.' : 'not logined.' 
    }
  },
  methods: {
    ...mapActions('sample', ['setSample']),
  },
  components: { Sample }
}
</script>

<style lang="scss">
.l-sample {
  padding: 1rem;
}
</style>a
