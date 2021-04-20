<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="increment">count is: {{ count }}</button>
  </div>
</template>

<script>
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  import { key } from '../store'

  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: {
        type: String,
        default: 'vue3.0'
      }
    },
    setup() {
      const store = useStore(key)
      const count = computed(() => store.state.count)
      return {
        count,
        increment: () => {
          store.commit('increment')
        }
      }
    }
  })
</script>
