<script lang="js">
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Doughnut} from 'vue-chartjs'
import {createData} from "./chartConfig";
import {settings} from "./chartConfig";


ChartJS.register(ArcElement, Tooltip, Legend)
ChartJS.defaults.plugins.legend.position = 'right'


export default {
  name: 'DoughnutChart',
  methods: {
    settings,
  },
  props:{
    users: []
  },
  computed: {
    dataParticipant() {
      return createData(this.users)
    }
  },
  components: {
    Doughnut
  },
  data() {

    return createData(this.users)
  }
}
</script>

<template>
  <Doughnut :data="dataParticipant" :options="settings"/>
</template>