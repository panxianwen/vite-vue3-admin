export interface UserState {
  token: string
  name: string
  avatar: string
  introduction: string
  roles: string[]
  email: string
}

export const state: UserState = {
  token: '',
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  email: ''
}
