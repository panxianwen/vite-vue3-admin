import { ActionContext, ActionTree } from 'vuex'
import { state, UserState } from './state'
import { Mutations } from './mutations'
import { RootState } from '/@/store'
import { useStore } from '/@/store/index'
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<UserState, RootState>, 'commit'>

export interface Actions {
  USER_ACTION_LOGIN(
    { commit }: AugmentedActionContext,
    userInfo: { username: string; password: string }
  ): void
  USER_ACTION_RESET_TOKEN({ commit }: AugmentedActionContext): void
  USER_ACTION_GET_USER_INFO({ commit }: AugmentedActionContext): void
  USER_ACTION_CHANGE_ROLES({ commit }: AugmentedActionContext, role: string): void
  USER_ACTION_LOGIN_OUT({ commit }: AugmentedActionContext): void
}

export const actions: ActionTree<UserState, RootState> & Actions = {
  USER_ACTION_LOGIN(
    { commit }: AugmentedActionContext,
    userInfo: { username: string; password: string }
  ) {
    const { username, password } = userInfo
    console.log(username.trim(), password)
    //TODO: token请求验证
    if (username.trim() === 'admin' && password === '123456') {
      const token = `lx@${username.trim()}`
      commit('USER_SET_TOKEN', token)
    }
  },

  USER_ACTION_RESET_TOKEN({ commit }: AugmentedActionContext) {
    //TODO: 重置token方法
    commit('USER_SET_TOKEN', '')
    commit('USER_SET_ROLES', [])
  },

  USER_ACTION_GET_USER_INFO({ commit }: AugmentedActionContext) {
    if (state.token === '') {
      throw Error('token is undefined')
    }
    //TODO: 请求人员信息
    let data: any
    commit('USER_SET_NAME', data.name)
    commit('USER_SET_AVATAR', data.avatar)
    commit('USER_SET_EMAIL', data.email)
    commit('USER_SET_INTRODUCTION', data.introduction)
    commit('USER_SET_ROLES', data.roles)
  },

  async USER_ACTION_CHANGE_ROLES({ commit }: AugmentedActionContext, role: string) {
    const token = role + '-token'
    const store = useStore()
    commit('USER_SET_TOKEN', token)
    //TODO: setToken(token)
    await store.dispatch('USER_ACTION_GET_USER_INFO', undefined)
    store.dispatch('USER_ACTION_SET_ROUTES', state.roles)
    /* store.state.permission.dynamicRoutes.forEach((item: RouteRecordRaw) => {
      router.addRoute(item)
    }) */
  },

  USER_ACTION_LOGIN_OUT({ commit }: AugmentedActionContext) {
    //TODO: removeToken()
    commit('USER_SET_TOKEN', '')
    commit('USER_SET_ROLES', [])
    //resetRouter()
  }
}
