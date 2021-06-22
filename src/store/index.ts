import { createStore } from 'vuex'
import { modules, plugins } from '/@/framework/store/index'

export interface RootState {
  modules
}

export const store = createStore({
  modules: {
    ...modules
  },
  plugins: plugins,
  strict: process.env.NODE_ENV !== 'production'
})

export function useStore() {
  return store
}
