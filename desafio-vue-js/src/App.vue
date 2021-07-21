<script>
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import ScrollColumn2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import api from './services/api.js';

Vue.use(VueFusionCharts, FusionCharts, ScrollColumn2D, FusionTheme);

export default {
  name: 'app',
  data() {
    return {
      "type": "scrollcolumn2d",
      "renderAt": "chart-container",
      "width": "100%",
      "height": "540",
      "dataFormat": "json",
      dataSource: {
        chart: {
          caption: "Número de casos COVID-19 confirmados",
          subcaption: "Por Países",
          yaxisname: "Quantidade de Pessoas",
          numvisibleplot: "8",
          labeldisplay: "auto",
          theme: "fusion"
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
      console.log(this.dataSource.categories);
    }).catch(error => {
      this.errorMessage = error.message;
      console.error("Houve um Error!", error);
    });
  }
}
</script>

<template>
  <div id="app">
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