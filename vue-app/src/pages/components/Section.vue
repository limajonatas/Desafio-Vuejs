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

    import api from '../../services/api'

    export default {
        name: 'Section',
        data(){
            return {
                isLoading: true,
                isError: false,
                respData: []// colocar a response aqui
            }
        },
        components: {
            BarChart,
            DialogLoading,
            DialogError
        },
        mounted(){
            
            // Fazer a requisição para API
            api.get("/summary").then(response =>{
                this.respData = response.data.Countries
                //console.log(response.status)
            }).catch( ()=> {
                this.isError = true
            }).finally(() => {this.isLoading = false})
            // Passar como parametro para BarChart
            }
            
        }
    
</script>

<style scoped>

</style>
