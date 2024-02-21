<script>
import ParticipantForm from "@/components/SendParticipantForm.vue";
import DoughnutChart from "@/components/ChartComponent.vue";
import DataTable from "@/components/DataTable.vue";
import getDataTable from "@/getData";



export default {
  name: 'App',
  components: {
    DoughnutChart,
    ParticipantForm,
    DataTable

  },
  data(){
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
  <header class="form">
  <ParticipantForm/>
  </header>
  <h1>DATA</h1>
  <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
  <div class="row">

    <div class="column" style="padding-left: 30em">
      <DataTable :users="response"/>
    </div>
    <div class="column" style="padding-right: 5em">
      <DoughnutChart style=" "/>
    </div>
  </div>

</template>

<style>

html, body {
  padding: 0;
  margin: 0;
}




</style>
