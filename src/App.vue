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
import CovidApi from "@/services/CovidAPI";

export default {
  name: "App",
  data() {
    return {
      type: "scrollbar2d",
      renderAt: "chart-container",
      width: "1000",
      height: "800",
      dataFormat: "json",
      dataSource: {
        chart: {
          captionFont: "Arial",
          captionFontSize: "24",
          captionFontColor: "#000000",
          captionFontBold: "1",
          subcaptionFont: "Arial",
          subcaptionFontSize: "18",
          subcaptionFontColor: "#696969",
          subcaptionFontBold: "0",
          caption: "Número de casos confirmados de COVID",
          subCaption: "Em milhões",
          xaxisname: "Países",
          yaxisname: "Número de Mortes (Milhões)",
          numbersuffix: "K",
          showvalues: "1",
          valuefontcolor: "#808080",
          valueFontSize:"14",
          useplotgradientcolor: "1",
          plotgradientcolor: "#6ECDF0",
          plotfillangle: "100",
          plotfillalpha: "80",
          plotfillratio: "0,80",
          theme: "fusion",
        },
        categories: [
          {
            category: [],
          },
        ],
        dataset: [
          {
            data: [],
          },
        ],
      },
    };
  },
  created() {
    CovidApi.getCountries((country) => {
      this.countries = country;
      const getLabel = (label) => new Object({ label: label.Country });
      const getCountry = (country) =>
        new Object({ value: country.TotalConfirmed });
      this.dataSource.categories[0].category = this.countries.map(getLabel);
      this.dataSource.dataset[0].data = this.countries.map(getCountry);
    }),
      CovidApi.getGlobal((global) => {
        this.TotalConfirmed = global.TotalConfirmed;
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
