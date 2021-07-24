<template>
  <div class="flex">
    <button id="buttons" class="square_btn" v-on:click="sortCountries">Ordem Crescente</button>
    <button class="square_btn" v-on:click="sortAlfa">Ordem Alfabética</button>      
    <div id="chart-container">
      <fusioncharts 
      :type="type"
      :width="width"
      :height="height"
      :dataformat="dataFormat"
      :dataSource="dataSource"
      >
      </fusioncharts>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import ScrollColumn2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import api from '../services/api.js';

Vue.use(VueFusionCharts, FusionCharts, ScrollColumn2D, FusionTheme);

export default {
  name: 'Collumn',
  data() {
    return {
      "type": "scrollcolumn2d",
      "renderAt": "chart-container",
      "width": "1200",
      "height": "650",
      "dataFormat": "json",
      dataSource: {
        chart: {
          caption: "Número de casos COVID-19 confirmados",
          subcaption: "Por Países",
          yaxisname: "Quantidade de Pessoas",
          numvisibleplot: "12",
          theme: "candy"
        },
        categories: [
          {
            category: [
              {
                label: ""
              }
            ]
          }
        ],
        dataset: [
          {
            seriesname: "",
            data: [
              {
                value: ""
              }
            ]
          }
        ]
      }
    } 
  },
  mounted(){
    api.get('/summary').then(response => {
      this.dataSource.categories[0].category = response.data.Countries.map(x => {return {label: x.Country}});
      this.dataSource.dataset[0].data = response.data.Countries.map(x => {return {value: x.TotalConfirmed}});
    }).catch(error => {
      this.errorMessage = error.message;
      console.error("Houve um Error!", error);
    });
  },
  methods: {
    sortCountries: function() {
      api.get('/summary').then(response => {
        let items = [{ name:null ,value:null}];
        items = response.data.Countries.map(x => {return {name: x.Country, value: x.TotalConfirmed}});

        items.sort(function (a, b) {
          if (a.value > b.value) {
            return -1;
          }
          if (a.value < b.value) {
            return 1;
          }
          return 0;
        });

        this.dataSource.categories[0].category = items.map(x => {return {label: x.name}});
        this.dataSource.dataset[0].data = items.map(x => {return {value: x.value}});
      })
      .catch(error => {
        this.errorMessage = error.message;
        console.error("Houve um Error!", error);
      });
    },
    sortAlfa: function() {
      api.get('/summary').then(response => {
        let items = [{ name:null ,value:null}];
        items = response.data.Countries.map(x => {return {name: x.Country, value: x.TotalConfirmed}});
        items.sort(function (a, b) {
          if (a.nome > b.nome) {
            return -1;
          }
          if (a.nome < b.nome) {
            return 1;
          }
          return 0;
        });

        this.dataSource.categories[0].category = items.map(x => {return {label: x.name}});
        this.dataSource.dataset[0].data = items.map(x => {return {value: x.value}});
      });
    } 
  }
}

</script>
<style scoped>

  .flex {
    text-align: start;
  }

  #buttons {
    opacity: initial;
    display: inline; 
    justify-content: center;
    margin-bottom: 15px;
    margin-right: 20px;
    margin-left: 10px;
  }

  .square_btn{
    width: 100px;
    position: relative;
    display: inline-block;
    font-weight: bold;
    padding: 0.5em 1em;
    text-decoration: none;
    border-left: solid 4px #e1f3ff;
    border-right: solid 4px #e1f3ff;
    border-radius: 20px;
    color: #fff;
    background: #272727;
    transition: .4s;
  }

  .square_btn:hover {
      background: #ffffffb3;
      color: #272727;
  }
</style>