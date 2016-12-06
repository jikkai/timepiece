/**
 * 封装为Vue插件
 */
import timepiece from '../index'

function plugin (Vue) {}

plugin.install = function (Vue) {
  Vue.prototype.$timepiece = timepiece
}

export default plugin
