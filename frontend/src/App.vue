<script>
import ParticipantForm from "@/components/SendParticipantForm.vue";
import DoughnutChart from "@/components/ChartComponent.vue";
import DataTable from "@/components/DataTable.vue";
import getDataTable from "@/getData";
import axios from "axios";


export default {
  name: 'App',
  components: {
    DoughnutChart,
    ParticipantForm,
    DataTable

  },
  methods: {
    async deleteParticipation(id) {
      console.log(id)

      await axios.delete(`http://localhost:3000/participants/${id}`)
      this.response = await getDataTable();

    }
  },
  data() {
    return {
      response: null
    }
  },
  async created() {
    this.response = await getDataTable();
  }
}
</script>
<template>
  <header>
    <ParticipantForm/>
  </header>
  <body>
    <h1 class="titleText">DATA</h1>
    <h2 class="subTitleText">Tracks participation in %</h2>
    <div class="row">

      <div class="column">
        <DataTable @delete-participant="deleteParticipation" :users="response"/>
      </div>
      <div class="column" >
        <DoughnutChart :users="response" style=" "/>
      </div>
    </div>
  </body>
</template>

<style>

html, body {
  padding: 0;
  margin: 0;
}

canvas {
  max-height: 30vh;
  padding-right: 1em;
  margin-right: 10em;
}

.titleText {
  padding-bottom: 3em;
  font-size: 2.2rem;
  font-weight: bolder;
  margin-bottom: -3.3em;
  margin-top: ;
}

.subTitleText {
  font-size: 1rem;
  font-weight: inherit;
}

</style>
