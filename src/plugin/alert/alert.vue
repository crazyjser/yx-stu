<template>
	<div id="alert" v-show="is_show">
		<transition name="slide">
		<div class="alert-wrapper" v-show="is_show">
			<div class="alert-title">
				<div class="title">{{title}}</div>
				<span class="close-btn" @click="hide()">&times;</span>
			</div>
			<div class="alert-content">
				{{content}}
			</div>
			<div class="operation-bar">
				<span @click="hide()">{{canselContent}}</span>
				<span @click="sure()">{{sureContent}}</span>
			</div>
		</div>
		</transition>
	</div>
</template>
<script>
	export default {
    data() {
      return {
      	 title : "警告",
      	 is_show:false,
      	 content: '内容',
      	 sureContent:'确定',
      	 canselContent:'取消'
      }
    },
    methods: {
    	show:function(params){
    		this.title = (params.title || this.title);
    		this.content = (params.content || this.content);
    		this.is_show = true;
    		this.sureCallback = params.sureCallback && params.sureCallback;
    	},
    	hide(){
    		this.is_show = false;
    	},
    	sure(){
    		this.is_show = false;
    		this.sureCallback && this.sureCallback(true);	
    	}	
    }
  }
</script>
<style scoped>
	.slide-enter-to,.slide-leave{
		opacity: 1;
	}
	.slide-enter-active,.slide-leave-active{
		transition: all .5s ease
	}
	.slide-enter,.slide-leave-to{
		opacity: 0;
	}
	#alert{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0,0,0,.1);
	}
	.alert-wrapper{
		position: absolute;
		left: 50%;
		top: 50%;
		margin-top: -100px;
		margin-left: -210px;
		width: 420px;
		height: 200px;
		background-color: #fff;
		border-radius: 4px;
		border: 1px solid #e6ebf5;
		font-size: 18px;
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
		text-align: left;
		overflow: hidden;
		padding: 10px;
		box-sizing: border-box;
	}
	.alert-title{
		padding-bottom:20px; 
		overflow: hidden;
		white-space: nowrap;
		text-align: center;
		position: relative;
	}
	.title{
		display: inline-block;
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.close-btn{
		position: absolute;
		right: 10px;
		cursor: pointer;
	}
	.alert-content{
		width: 100%;
		height: 60%;
		overflow: hidden;
	}
	.operation-bar{
		display: flex;
	}
	.operation-bar span{
		flex: 1;
		text-align: center;
		cursor: pointer;
	}
</style>