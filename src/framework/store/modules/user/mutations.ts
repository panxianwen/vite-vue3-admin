import { MutationTree } from 'vuex'
import { UserState } from './state'

export interface Mutations<S = UserState> {
  USER_SET_TOKEN(state: S, token: string): void
  USER_SET_NAME(state: S, name: string): void
  USER_SET_AVATAR(state: S, avatar: string): void
  USER_SET_INTRODUCTION(state: S, introduction: string): void
  USER_SET_ROLES(state: S, roles: string[]): void
  USER_SET_EMAIL(state: S, email: string): void
}

export const mutations: MutationTree<UserState> & Mutations = {
  USER_SET_TOKEN(state: UserState, token: string) {
    state.token = token
  },
  USER_SET_NAME(state: UserState, name: string) {
    state.name = name
  },
  USER_SET_AVATAR(state: UserState, avatar: string) {
    state.avatar = avatar
  },
  USER_SET_INTRODUCTION(state: UserState, introduction: string) {
    state.introduction = introduction
  },
  USER_SET_ROLES(state: UserState, roles: string[]) {
    state.roles = roles
  },
  USER_SET_EMAIL(state: UserState, email: string) {
    state.email = email
  }
}
