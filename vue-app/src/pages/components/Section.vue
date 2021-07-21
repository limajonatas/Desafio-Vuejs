<template>
    <section>
        <BarChart :response="{aaa:123}"/>//
        <DialogLoading />
        <DialogError />
    </section>
</template>

<script>
    import BarChart from './BarChart'
    import DialogLoading from './Loading'
    import DialogError from './Error'

    export default {
    name: 'Section',
    components: {
        BarChart,
        DialogLoading,
        DialogError
    },
    mounted(){
        // Fazer a requisição para API
        // Passar como parametro para BarChart
        console.log('aqui')
        }
    }
</script>

<style scoped>

</style>
