<template>
	<div id="app">
		<Header />
		<Section />
	</div>
</template>

<script>
	import Header from './components/Header'
	import Section from './components/Section'
  
	export default {
		name: 'Index',
		components: {
			Header,
			Section
		}
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
