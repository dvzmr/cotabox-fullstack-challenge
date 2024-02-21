

<script lang="js">
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Doughnut} from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'
import {data} from "./chartConfig.js";
import {settings} from "./chartConfig";


ChartJS.register(ArcElement, Tooltip, Legend)
ChartJS.defaults.plugins.legend.position = 'right'


export default {
  name: 'DoughnutChart',
  methods: {
    settings,
    data() {
      return data
    }
  },
  components: {
    Doughnut
  },
  data() {
    return chartConfig
  }
}
</script>

<template>
  <Doughnut :data="data" :options="settings"  />
</template>