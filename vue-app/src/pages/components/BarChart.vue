<script>
	import Vue from 'vue';
	import VueFusionCharts from 'vue-fusioncharts';
	import FusionCharts from 'fusioncharts';
	import Column2D from 'fusioncharts/fusioncharts.charts';
	import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

	Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme);

	//const chartData = [];
	const dataSourceBig = {
		chart: {
			caption: "7 Países com mais casos",
			subcaption: "",
			xaxisname: "Países",
			yaxisname: "Casos confirmados",
			numbersuffix: "",
			theme: "fusion"
		},
		data: []//chartData
	};
	const dataSourceTotal = {
		chart: {
			caption: "Casos de COVID-19",
			subcaption: "",
			xaxisname: "Países",
			yaxisname: "Casos confirmados",
			numbersuffix: "",
			theme: "fusion"
		},
		data: []//chartData
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
			response: Array// ou Array, acho que é Array ; Object
		},
		/**/
		methods: {
			transformDataTotal: function (total) {
				var pais;
				var qtd;
				for (var i=0; i<total.length; i++){
					pais = total[i].Country
					qtd = total[i].TotalConfirmed
					//total.push({label:pais, value:qtd})
					this.dataSourceTotal.data.push({label:pais, value:qtd})
				}
			},
			get7Big: function (maiores){// Mudar, fazer sem o deletar
				var indexm = 0
				for (var i = 0; i < 7; i++){
					var maior = {label:'', value:0}
					for (var j = 0; j < maiores.length; j++){
						if (maiores[j].TotalConfirmed > maior.value){
							maior.label = maiores[j].Country
							maior.value = maiores[j].TotalConfirmed
							indexm = j
						}
					}
					maiores.splice(indexm, 1);
					
					this.dataSourceBig.data.push(maior)
				}
				
			}
		},
		/**/
		mounted(){
			// criar aqui o metodo para transformar os dados 
			//this.dataSourceTotal.data = this.response
			// Criar metodos
			this.transformDataTotal(this.response)
			this.get7Big(this.response)
			console.log(this.dataSourceTotal.data)
		}
	}

</script>

<template>
	<div class="chart-container" >
		<div class = "card-chart">
			<fusioncharts class='teste'
			:type="type"
			:width="width"
			:height="height"
			:dataFormat="dataFormat"
			:dataSource="dataSourceTotal"
			/>
		</div>
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
	.card-chart{
		margin-top: 32px;
		width:80%;
		
	}

</style>