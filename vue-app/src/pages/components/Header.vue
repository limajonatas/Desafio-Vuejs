<template>
	<header>
		<nav class = 'container center'>
			<h1>Desafio GolFarma</h1>
			<a target="_blank" href= "https://golfarma.com.br/quem-somos/">
				<b>Sobre</b>
			</a>
		</nav>
	</header>
</template>

<script>

	export default {
		name: 'Header'
	}
</script>

<style scoped>
	header{
		background-color:#009640;
		color: #fff;
		width: 100%;
		height: 100px;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 8px solid #67bd00;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	nav{
		display: flex;
		align-items: center;
	}

	h1{
		position: absolute;
		margin: 0 auto;
	}
	a{
		position: absolute;
		right: 30px;
		padding: 14px;
	}
	a:hover{
		background-color: #12c48c;
		border-radius: 22px;
	}

	@media (max-width: 470px){
		nav{

			flex-direction: column;
		}
		h1{
			position: relative;
			margin-top:22px;
		}
		a{
			position: relative;
			right:0px;

		}
	}
	/*
			position: absolute;
			top:50%;
			margin: 0 auto;
			padding: 8px;
	*/
</style>
