<template>
  <div class="register">
    <form @submit="onSubmit">
      <input type="text" v-model="input_first_name" placeholder="First Name" >
      <input type="text" v-model="input_last_name" placeholder="Last Name">
      <input type=number v-model="input_participation" placeholder="Participation">
      <input type="submit" id="sendButton" value="SEND" v-on:click="registerParticipant" >
    </form>
    <p>
      o nome do cara é {{first_name}} {{last_name}} e sua participação foi {{participation}}%
    </p>
  </div>

  <h1>DATA</h1>
  <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
</template>
<script>
export default {
  name: 'ParticipantForm',
  data (){
    return{
      first_name: "",
      last_name: "",
      participation: null
    }
  },
  methods: {
    registerParticipant(e) {
        e.preventDefault();
        console.log(this.input_first_name);

        this.first_name = this.input_first_name
        this.last_name = this.input_last_name
        this.participation = this.input_participation
    }
  }
}
</script>