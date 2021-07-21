<template>
    <div class= "container transparent">
        <div id = "loading-dialog">
            <p><b>Aguarde, página carregando</b></p>
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
</style>