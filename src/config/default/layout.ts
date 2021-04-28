/**
 * 布局配置
 */
interface LayoutSettings {
  showSettings: boolean // Controls settings panel display
  showTagsView: boolean // Controls tagsview display
  showSiderbarLogo: boolean // Controls siderbar logo display
  fixedHeader: boolean // If true, will fix the header components
  siderarTextTheme: boolean // If true, will change active text color for siderbar based on theme
}

const layoutSettings: LayoutSettings = {
  showSettings: true,
  showTagsView: true,
  showSiderbarLogo: true,
  fixedHeader: false,
  siderarTextTheme: true
}

export default layoutSettings
