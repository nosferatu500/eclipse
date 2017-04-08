<template>
  <div id="app">
  	
    <router-view></router-view>
    <router-view name="lastWorks"></router-view>
    <router-view name="features"></router-view>
    <router-view name="portfolio"></router-view>
    <router-view name="banner"></router-view>
    <router-view name="footer"></router-view>
  
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">

@import "libs/bootstrap-grid/bootstrap-grid"

#app 
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  
html, body
	height: 100%

body
	font-size: 16px
	min-width: 320px
	position: relative
	line-height: 1.75
	font-family: 'Avenir', Helvetica, Arial, sans-serif
	overflow-x: hidden
	opacity: 1

</style>
