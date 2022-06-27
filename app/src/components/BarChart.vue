<template>
    <Bar ref="bar"
      :chart-options="chartOptions"
      :chart-data="chartData"
    />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { api } from 'boot/axios'

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale)

export default ({
  name: 'BarChart',
  components: { Bar },
  data () {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Total de Casos',
            backgroundColor: '#f87979',
            data: []
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  async mounted () {
    try {
      // faz requisição À API
      const data = await api.get('summary')
      const countries = []
      const totalConfirmed = []
      data.data.Countries.forEach(function (nome) {
        countries.push(nome.Country)
        totalConfirmed.push(nome.TotalConfirmed)
      })
      // insere os dados ao gráfico
      this.chartData = {
        labels: countries,
        datasets: [
          {
            label: 'Total de Casos',
            backgroundColor: '#32CD32',
            data: totalConfirmed
          }
        ]
      }
    } catch (error) {
      console.log('Ocorreu um erro: ', error)
    }
  }
})
</script>
