<script>
	import Vue from 'vue';
	import VueFusionCharts from 'vue-fusioncharts';
	import FusionCharts from 'fusioncharts';
	import Column2D from 'fusioncharts/fusioncharts.charts';
	import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

	Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme);

	// Dados para o gráfico com os 7 países com mais casos
	const dataSourceBig = {
		chart: {
			caption: "7 Países com mais casos",
			subcaption: "",
			xaxisname: "Países",
			yaxisname: "Casos confirmados",
			numbersuffix: "",
			theme: "fusion"
		},
		data: []
	};

	// Dados para o gráfico com todos os países 
	const dataSourceTotal = {
		chart: {
			caption: "Casos de COVID-19",
			subcaption: "",
			xaxisname: "Países",
			yaxisname: "Casos confirmados",
			numbersuffix: "",
			theme: "fusion"
		},
		data: []
	};

	export default {
		name: 'BarChart',
		/**/
		data() {
			return {
				"type": "column2d",
				"renderAt": "chart-container",
				"width": "100%",
				"height": "350",
				"dataFormat": "json",
				dataSourceTotal,
				dataSourceBig
			}
		}, 
		/**/
		props: {
			response: Array
		},
		/**/
		methods: {
			// Este método, insere os dados no formato requerido pelo fusion chart
			transformDataTotal: function (data, vetor) {
				
				var country; // nome do país
				var qtd;	 // quantidade de casos
				for (var i=0; i < data.length; i++){
					country = data[i].Country
					qtd = data[i].TotalConfirmed
					vetor.push({label:country, value:qtd})
				}
			},
			// Este método pega os países com mais casos confirmados
			getBiggerCases: function (dataAllCountries){
				// Obtendo uma cópia da lista para evitar danos futuros
				var copyData = dataAllCountries.slice(0, dataAllCountries.length);
				// Inicializando variáveis para controle
				var lisInter = []
				var index = 0
				var maior = 0
				// Repete 7 vezes
				for (var i = 0; i < 7; i++){
					index = 0
					maior = 0
					// Percorre lista inteira
					for (var j = 0; j < copyData.length; j++){
						// Se o valor dos casos for maior, então será o novo maior
						if (copyData[j].TotalConfirmed > maior){
							maior = copyData[j].TotalConfirmed
							index = j // para não repetir o mesmo elemento data7Countries
						}
					}
					lisInter.push(copyData[index])
					copyData.splice(index, 1);// Para não passar pelo mesmo elemento novamente
				}
				this.transformDataTotal(lisInter,this.dataSourceBig.data) // Adequa o dado para o formato requerido
			}
		},
		/**/
		mounted(){
			// criar aqui o metodo para transformar os dados 
			//this.dataSourceTotal.data = this.response
			// Criar metodos
			this.transformDataTotal(this.response, this.dataSourceTotal.data)// transforma os dados no formato pedido pelo chart
			this.getBiggerCases(this.response)// cria uma lista com os 7 maiores
		}
	}

</script>

<template>
	<div class="chart-container" >
		<!-- Gráfico para todos os países-->
		<div class = "card-chart">
			<fusioncharts class='teste'
			:type="type"
			:width="width"
			:height="height"
			:dataFormat="dataFormat"
			:dataSource="dataSourceTotal"
			/>
		</div>
		<!-- Gráfico para os sete países com mais casos-->
		<div class = "card-chart">
			<fusioncharts
			:type="type"
			:width="width"
			:height="height"
			:dataFormat="dataFormat"
			:dataSource="dataSourceBig"
			/>
		</div>
	</div>
</template>

<style scoped>
	.chart-container{
		display:flex;
		flex-direction: column;
		width:100%;
		align-items: center
	}
	.chart-container:last-child{
		margin-bottom: 32px;
	}
	.card-chart{
		margin-top: 32px;
		width:80%;
	}

</style>
