import Alert from './alert.vue'

export default {
  /**
   * 每个插件都有的install方法，用于安装插件
   * @param {Object} Vue - Vue类
   * @param {Object} [pluginOptions] - 插件安装配置
   */
  install(Vue, pluginOptions = {}) {
    // 创建"子类"方便挂载
    const VueAlert = Vue.extend(Alert)
    let alert = null

    /**
     * 初始化并显示loading
     * @returns {Promise} Promise实例
     */
    let $alert = {
      show:function(params={}){
        if (!alert) {
          alert = new VueAlert()
          // 手动创建一个未挂载的实例
          alert.$mount()
          // 挂载
          document.querySelector('body').appendChild(alert.$el);
        }
        // 显示loading
        alert.show(params)  
      },
      hide:function(){
        if(alert){
          alert.hide();
        }
      }  
    } 

    Vue.prototype.$alert = $alert
  }
}