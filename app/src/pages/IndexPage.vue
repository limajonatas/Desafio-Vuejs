<template>
  <q-layout view="lHh lpr lFf" class="column flex-center">
    <TheHeader/>
       <q-card class="mycard">
          <q-card-section>
              <div class="text-subtitle2">Totas de Casos Confirmados</div>
          </q-card-section>
          <BarChart/>
        </q-card>
  </q-layout>
</template>

<script>
import TheHeader from 'app/src/components/TheHeader'
import BarChart from 'app/src/components/BarChart'

export default ({
  name: 'IndexPage',
  components: { TheHeader, BarChart }
})

</script>

<style lang="css" scoped>
  .mycard{
    background-color: rgb(206, 195, 195);
    font-family: 'Oswald', sans-serif;
    width: 98%;
    padding: 1%;
  }
</style>
