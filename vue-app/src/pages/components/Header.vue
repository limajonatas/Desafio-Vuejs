<template>
  <header>
    <nav class = 'container'>
        <h1>Desafio GolFarma</h1>
        <a target="_blank" href= "https://golfarma.com.br/quem-somos/">Sobre</a>
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
    }
    nav{
        display: flex;
        align-items: center;
    }

    h1{
        margin: 0 auto;
    }

</style>