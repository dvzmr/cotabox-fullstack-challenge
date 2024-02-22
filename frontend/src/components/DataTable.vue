<script>
import  FontAwesomeIcon  from '@fortawesome/vue-fontawesome'
import faHouse from "@fortawesome/free-solid-svg-icons";
import ParticipantForm from "@/components/SendParticipantForm.vue";


export default {
  name: 'DataTable',
  components: FontAwesomeIcon, faHouse, ParticipantForm,
  props: {
    users: []
  },
  computed: {
    totalParticipation() {
     return this.users.reduce((acc,user) => acc + user.participation,0);
    }
  }
}


</script>

<template>
  <FontAwesomeIcon :icon="faHouse" />
  <div >
    <table class="a">
      <thead>
        <tr>
          <th class="cellA"></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Participation</th>
          <th ></th>
        </tr>
      </thead >
        <tbody>
          <tr v-for="(p,index) in users" v-bind:key="p._id">
            <td>{{index+1}}</td>
            <td>{{p.firstName}}</td>
            <td>{{p.lastName}}</td>
            <td>{{((p.participation / totalParticipation) * 100).toFixed(2)}}%</td>
              <td > <font-awesome-icon icon="fa-solid fa-trash-can"  v-on:click="$emit('deleteParticipant',p._id)" /> </td>

          </tr>
      </tbody>
    </table>
  </div>

</template>

<style>

table.a{
  margin-top: 2em;
  table-layout: auto;
  min-width: 80%;
  min-height: 80%;
  border: 1px solid black;
  border-spacing: 2px;
  border-collapse: collapse;

}

th.cellA{
  border : transparent;
  width: 2.255em;
  border-spacing: 2px;
  border-collapse: collapse;
}

th{
  border-spacing: 2px;
  border-collapse: collapse;
}

</style>