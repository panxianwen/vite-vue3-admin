import {
  Environment,
  Language,
  RouterMode,
  RouterSource,
  TokenStorageName
} from '/@/enums/settingsEnum'

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
  loadingText?: string //加载时显示的文字
  tokenName?: string //token名称
  tokenKeyName?: string //token存储的key值
  storage?: TokenStorageName //token的存储位置
  recordRoute?: true //token失效回到登录页面时是否记住本次路由
  logo?: true //是否显示 logo
  i18n?: Language //语言类型 zh en
  errorLog?: Environment //哪个环境下显示错误高亮
  loginInterception?: true //是否开启登录拦截
  loginRSA?: false //是否开启登录RSA加密
  routerSource?: RouterSource //fontEnd 和 backEnd 两种方式
  rolesControl?: boolean //是否开启roles字段进行角色权限控制 设置false时不处理路由中的roles字段
  uniqueOpened?: boolean //设置布局的页面中是否只保持一个子菜单的展开
  defaultOpeneds?: string[] //vertical布局默认展开的菜单path, 使用逗号隔开建议只展开一个
  debounce?: string[] //加Loading层的请求，防止重复提交
  templateFolder?: string //代码生成在view下的文件夹名称
  openFirstMenu?: boolean //是否点击一级菜单默认开启二级菜单
  version: string //版本
}

const settings: Settings = {
  title: 'Vue3',
  version: '1.0'
}

export default settings
