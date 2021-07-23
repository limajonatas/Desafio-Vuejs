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
</style>
