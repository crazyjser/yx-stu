<template>
  <div class="hello">
    <button @click="loading()">显示loading</button>
    <button @click="alert()">显示alert</button>
    <button @click="toast()">提示</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    loading(){
      this.$loading.show();
      setTimeout(()=>{this.$loading.hide()},3000)
    },
    alert(){
      this.$alert.show({
        sureCallback:(force)=>{
          console.log(force)
        }
      });
    },
    toast(){
      this.$toast.show();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
