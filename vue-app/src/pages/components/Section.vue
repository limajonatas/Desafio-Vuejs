<template>
    <section>
        <BarChart :response="{aaa:123}"/>//
        <DialogLoading/>
    </section>
</template>

<script>
    import BarChart from './BarChart'
    import DialogLoading from './Loading'
    export default {
    name: 'Section',
    components: {
        BarChart,
        DialogLoading
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
