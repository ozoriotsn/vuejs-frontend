<template>

  <pulse-loader :loading="loading" :color="color" :size="size" class="loader-spinner text-center"></pulse-loader>

</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader'
export default {
  name: 'LoaderSpinner',
  components: { PulseLoader },
  props: ['loading'],
  data () {
    return {
      color: '#35495e',
      height: '35px',
      width: '4px',
      margin: '2px',
      radius: '2px',
      size: '12px'
    }
  }
}
</script>

<style scoped>

</style>
