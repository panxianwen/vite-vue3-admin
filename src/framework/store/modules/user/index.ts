import { RootState } from '/@/store'
import { UserState } from './state'
import type { state } from './state'
import { Mutations, mutations } from './mutations'
import { Actions, actions } from './actions'
import { CommitOptions, DispatchOptions, Module, Store as VuexStore } from 'vuex'

export { UserState }

export type UserStore<S = UserState> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions, P extends Parameters<Actions[K]>[1]>(
    key: K,
    payload: P,
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
}

export const store: Module<UserState, RootState> = {
  state,
  mutations,
  actions
}
