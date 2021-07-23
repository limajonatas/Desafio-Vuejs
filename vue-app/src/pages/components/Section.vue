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
                respData: []
            }
        },
        components: {
            BarChart,
            DialogLoading,
            DialogError
        },
        mounted(){
            
            // Faz a requisição para API
            api.get("/summary").then(response =>{
                this.respData = response.data.Countries
            }).catch( ()=> {
                this.isError = true
            }).finally(() => {this.isLoading = false})
            }
            
        }
    
</script>

<style scoped>

</style>
