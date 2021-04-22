<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-button class="primary" @click="increment">count is: {{ count }}</el-button>
  </div>
</template>

<script>
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  import { key } from '../store'
  import { ElButton } from 'element-plus'

  export default defineComponent({
    name: 'HelloWorld',
    components: {
      ElButton
    },
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
