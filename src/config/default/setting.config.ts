import { RouterMode } from '/@/enums/settingsEnum'

/**
 * 设置属性
 */
export interface Settings {
  title: string //页面显示名称
  baseURL?: string //基础URL
  copyright?: boolean //pro版本copyright是否可修改
  keepAliveMaxNum?: number //缓存路由的最大个数
  routerMode?: RouterMode //路由模式：hash | history
  routesWhiteList?: string[] //不经过token校验的
}
