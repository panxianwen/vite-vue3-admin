import { createLogger } from 'vuex'
import { store as user } from '/@/framework/store/modules/user'

export const modules = {
  user
}

const debug = process.env.NODE_ENV !== 'production'
export const plugins = debug ? [createLogger({})] : []
