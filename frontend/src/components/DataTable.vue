<script>
export default {
  name: 'DataTable',
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
  <div>
    <table>
      <thead>
      <tr>
        <th></th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Participation</th>
      </tr>
      </thead>
        <tbody>
          <tr v-for="(p,index) in users" v-bind:key="p.id">
            <td>{{index+1}}</td>
            <td>{{p.firstName}}</td>
            <td>{{p.lastName}}</td>
            <td>{{((p.participation / totalParticipation) * 100).toFixed(2)}}%</td>
          </tr>
      </tbody>
    </table>
  </div>

</template>

<style>

table, thead, th,td {
  border: 1px;
}
</style>