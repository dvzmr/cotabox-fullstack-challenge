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
  <h1>DATA</h1>
  <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
  <div class="row">

    <div class="column">
      <DataTable @delete-participant="deleteParticipation" :users="response"/>
    </div>
    <div class="column" >
      <DoughnutChart :users="response" style=" "/>
    </div>
  </div>

</template>

<style>

html, body {
  padding: 0;
  margin: 0;
}



</style>
