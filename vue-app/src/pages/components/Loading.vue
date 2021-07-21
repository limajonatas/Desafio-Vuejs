<template>
    <div class= "background_transparent">
        <div id = "loading-dialog">
            <p><b>Aguarde, página carregando</b></p>
            <div class='loader'></div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'DialogLoading',
    }

</script>

<style scoped>
    #loading-dialog{
        background-color: #fff;
        width: 50vw;
        height: 30vh;
        text-align: center;
        border-radius: 10px;
    }

    /* Trecho para adicionar efeito rotativo*/
    .loader{
        animation: rotating 1s infinite;
        border: 6px solid #bfbfbf;
        border-radius: 50%;
        border-top-color: #d93f44;
        height: 50px;
        width: 50px;
        margin: auto;
    }
    @keyframes rotating {
        to {
            transform: rotate(360deg);
        }
    }
</style>
