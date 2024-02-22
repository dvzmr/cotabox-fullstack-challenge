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
          <th class="cellA"></th>
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




</style>