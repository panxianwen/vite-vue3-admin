<template>
  <div>
    <span>{{ msgAbout }}</span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'About',
    setup() {},
    data() {
      return {
        msgAbout: 'About Page'
      }
    }
  })
</script>
