import Timepiece from '../../timepiece-core/src/index'

function plugin (Vue) {}

plugin.install = function (Vue) {
  Vue.prototype.$timepiece = Timepiece
}

export default plugin
