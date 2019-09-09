<template lang="pug">
.c-sample
  | This is sample component.
  | {{ message }}
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  props: {
    message: { default: '', type: String },
  },
  computed: {
    ...mapGetters('sample', ['sample']),
  },
  methods: {
    ...mapActions('sample', ['setSample']),
  },
}
</script>

<style lang="scss" scoped>
.c-sample {
  background: $theme-color;
  color: white;
  padding: 1rem;
}
</style>