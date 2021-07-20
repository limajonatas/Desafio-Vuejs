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

<script>
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme);

const chartData = [];

const dataSource = {
  chart: {
    caption: "Casos de COVID-19",
    subcaption: "",
    xaxisname: "Países",
    yaxisname: "Casos confirmados",
    numbersuffix: "",
    theme: "fusion"
  },
  data: chartData
  };

export default {
  name: 'BarChart',
  data() {
    return {
      "type": "column2d",
      "renderAt": "chart-container",
      "width": "100%",
      "height": "350",
      "dataFormat": "json",
      dataSource
    }
  }
}
</script>

