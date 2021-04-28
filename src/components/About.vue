<template>
  <div>
    <input type="text" speech x-webkit-speech onwebkitspeechchange="alert(this.value)" />
    <span>{{ msgAbout }}</span>
    <div
      v-for="(item, idx) in list"
      :key="idx"
      :ref="
        (el) => {
          divs[idx] = el
        }
      "
    >
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    ref,
    reactive,
    computed,
    onBeforeMount,
    onMounted,
    onUpdated,
    onUnmounted,
    readonly,
    watchEffect,
    onRenderTracked,
    onRenderTriggered,
    provide,
    inject,
    InjectionKey,
    onBeforeUpdate,
    toRef,
    toRefs
  } from 'vue'

  export default defineComponent({
    name: 'About',
    setup() {
      const count = ref(1)
      let msgAbout = ref('About Page')
      const original = reactive({ count: 0 })
      const copy = readonly(original)
      const stop = watchEffect(() => {
        console.log('watchEffect->', copy.count)
      })
      stop() //显式调用返回值，停止侦停
      original.count++ //会触发copy上的侦听
      copy.count + 1 //readonly 只读属性修改不成功
      console.log('copyval->', copy.count)

      const reCount = computed({
        get: () => count.value,
        set: (val) => (count.value = val - 1)
      })
      onMounted(() => {
        console.log(2)
        watchEffect(
          () => {
            console.log(copy.count)
          },
          {
            onTrack(e) {
              console.log('ontrack', e)
            },
            onTrigger(e) {
              console.log('ontrigger', e)
            }
          }
        )
      })
      onBeforeMount(() => {
        console.log('before mount')
      })
      onUpdated(() => {
        console.log('updated')
      })
      onUnmounted(() => {
        console.log('destroy unmouned')
      })
      onRenderTracked((e) => {
        console.log('onRenderTracked', e)
        //debugger
      })
      onRenderTriggered((e) => {
        console.log('onRenderTriggered', e)
        debugger
      })
      //reCount.value++
      //console.log(reCount.value)
      reCount.value = 2
      //console.log(reCount.value)

      //const ThemeSymbol = Symbol()
      const key: InjectionKey<string> = Symbol()
      //提供者
      const themeRef = ref('dark').value
      //provide(ThemeSymbol, themeRef)
      provide(key, themeRef)

      //使用者
      //const theme = inject(ThemeSymbol, ref('light'))
      //const theme = inject(ThemeSymbol, ref('light'))
      const theme = inject(key, 'light')
      watchEffect(() => {
        console.log(`theme set to: ${theme}`)
      })

      const list = reactive([1, 5, 3])
      const divs = ref([])
      // 确保在每次变更之前重置引用
      onBeforeUpdate(() => {
        console.log('before update->')
        divs.value = []
      })

      const state = reactive({
        foo: 1,
        bar: 2
      })
      const refStatus = toRef(state, 'foo')
      state.foo++
      console.log(refStatus.value)
      refStatus.value = 5
      console.log(state.foo)

      const refsAllStatus = toRefs(state)
      refsAllStatus.bar.value++
      console.log(state.bar)
      state.bar++
      console.log(refsAllStatus.bar.value)
      return {
        list,
        divs,
        msgAbout
      }
    }
    // data() {
    //   return {
    //     msgAbout: 'About Page'
    //   }
    // }
  })
</script>
