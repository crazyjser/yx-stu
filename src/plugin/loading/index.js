import Loading from './loading.vue'

export default {
  /**
   * 每个插件都有的install方法，用于安装插件
   * @param {Object} Vue - Vue类
   * @param {Object} [pluginOptions] - 插件安装配置
   */
  install(Vue, pluginOptions = {}) {
    // 创建"子类"方便挂载
    const VueLoading = Vue.extend(Loading)
    let loading = null

    /**
     * 初始化并显示loading
     * @returns {Promise} Promise实例
     */
    let $loading = {
      show:function(){
        if (!loading) {
          loading = new VueLoading()
          // 手动创建一个未挂载的实例
          loading.$mount()
          // 挂载
          
        }
        // 显示loading
        loading.show(pluginOptions)  
      },
      hide:function(){
        if(loading){
          loading.hide();
        }
      }  
    } 

    Vue.prototype.$loading = $loading
  }
}