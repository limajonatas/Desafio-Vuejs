<template>
    <section>
        <DialogError v-if="isError"/>
        <DialogLoading v-else-if="isLoading" />
        <BarChart v-else :response="respData"/>
    </section>
</template>

<script>
    import BarChart from './BarChart'
    import DialogLoading from './Loading'
    import DialogError from './Error'

    export default {
        name: 'Section',
        data(){
            return {
                isLoading: true,
                isError: false,
                respData: []
            }
        },
        components: {
            BarChart,
            DialogLoading,
            DialogError
        },
        mounted(){
            /*
            // Fazer a requisição para API
            api.get("https://api.covid19api.com/summary").then(response =>{

            }).catch(error => {
                this.isError = true
            }).finally(() => this.isLoading = false)
            // Passar como parametro para BarChart
            }*/
            console.log('aqui')
        }
    }
</script>

<style scoped>

</style>
