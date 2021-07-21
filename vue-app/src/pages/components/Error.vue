<template>
    <div class= "container">
        <div id = "error-dialog">
            <p><b>Oops, Surgiu algum problema</b></p>
            <p>Tente atualizar a página</p>
        </div>
    </div>
</template>

<script>

    export default {
    name: 'DialogError',
    }

</script>

<style scoped>
#error-dialog{
    background-color: #fff;
    width: 50vw;
    height: 30vh;
    text-align: center;
    border-radius: 10px;
}
</style>