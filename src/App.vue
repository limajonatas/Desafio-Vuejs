<template>
  <div id="app" class="border-shadow m-3">
    <div id="chart-container" class="p-3">
      <fusioncharts
        :type="type"
        :renderAt="renderAt"
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
import CovidApi from "./services/CovidAPI";

export default {
  name: "App",
  data() {
    return {
      type: "scrollbar2d",
      renderAt: "chart-container",
      width: "100%",
      height: "550",
      dataFormat: "json",
      dataSource: {
        chart: {
          captionFont: "Arial",
          captionFontSize: "24",
          captionFontColor: "#696969",
          captionFontBold: "1",
          subcaptionFont: "Arial",
          subcaptionFontSize: "18",
          subcaptionFontColor: "##696969",
          subcaptionFontBold: "0",
          caption: "Número de casos confirmados de COVID",
          captionalignment: "left",
          xaxisname: "Países",
          yaxisname:
            "Número de casos confirmados  <br>K (para milhares) e M (para milhões)",
          showvalues: "1",
          valuefontcolor: "#808080",
          valueFontSize: "14",
          numvisibleplot: "20",
          scrolltoend: "0",
          flatscrollbars: "0",
          scrollheight: "15",
          scrollwidth: "15",
          scrollshowbuttons: "1",
          scrollcolor: "#fff",
          plottooltext:
            "<div>País : <b>$label</b><hr> Casos confirmados : <b>$datavalue<b></div>",
          theme: "fusion",
        },
        categories: [{ transposeaxis: "0", decimals: "0", category: [] }],
        dataset: [
          {
            data: [],
          },
        ],
        annotations: {
          autoscale: "1",
          groups: [
            {
              items: [
                {
                  id: "dyn-label",
                  type: "text",
                  fillcolor: "#696969",
                  fontsize: "15",
                  bold: "1",
                  x: "$canvasEndX - 150",
                  y: "$canvasStartY + 115",
                  text: "",
                },
              ],
            },
          ],
        },
      },
    };
  },
  events: {},
  created() {
    CovidApi.getCountries((country) => {
      let countries = country;
      //Método ordena total de casos confirmados 
      const compare = (a, b) => b.TotalConfirmed - a.TotalConfirmed;
      countries.sort(compare);
      //Método retorna array com os dados especificados
      const getLabel = (label) => new Object({ label: label.Country });
      const getCountry = (country) =>
        new Object({ value: country.TotalConfirmed, color: "#696969" });
      this.dataSource.categories[0].category = countries.map(getLabel);
      this.dataSource.dataset[0].data = countries.map(getCountry);
    }),
      CovidApi.getGlobal((global) => {
        let TotalConfirmed = global.TotalConfirmed;
        let date = new Date(global.Date);
        //Formata a data
        let valueFormatted = `<html><b>Total Confirmados: ${TotalConfirmed}</b><br>Atualizado em: ${
          date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear()
        }</html>`;
        this.dataSource.annotations.groups[0].items[0].text = valueFormatted;
      })
  },
};
</script>

<style>
html {
  background-color: #d6d4db;
}

body {
  background-color: #d6d4db !important;
  margin-top: 5% !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}

.border-shadow {
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  background-color: rgb(253, 253, 253) !important;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.35) !important;
}
</style>
