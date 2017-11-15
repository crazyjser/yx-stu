import Toast from './toast.vue'

export default {
  /**
   * 每个插件都有的install方法，用于安装插件
   * @param {Object} Vue - Vue类
   * @param {Object} [pluginOptions] - 插件安装配置
   */
  install(Vue, pluginOptions = {}) {
    // 创建"子类"方便挂载
    const VueToast = Vue.extend(Toast)
    let toast = null

    /**
     * 初始化并显示loading
     * @returns {Promise} Promise实例
     */
    let $toast = {
      show:function(params={}){
        if (!toast) {
          toast = new VueToast()
          // 手动创建一个未挂载的实例
          toast.$mount()
          // 挂载
          document.querySelector('body').appendChild(toast.$el);
        }
        // 显示loading
        toast.show(params)  
      } 
    } 

    Vue.prototype.$toast = $toast
  }
}