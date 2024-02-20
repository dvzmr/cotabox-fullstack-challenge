<template>
  <div class="register">
    <form @submit="onSubmit">
      <input type="text" v-model="input_first_name" placeholder="First Name" required >
      <input type="text" v-model="input_last_name" placeholder="Last Name" required>
      <input type=number v-model="input_participation" placeholder="Participation" required>
      <input type="submit" id="sendButton" value="SEND" v-on:click="registerParticipantion" >
    </form>

  </div>

  <h1>DATA</h1>
  <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
</template>
<script>
// import participantController.js from '../cota'
import axios from 'axios';
export default {
  name: 'ParticipantForm',
  data (){
    return{
      input_first_name: "",
      input_last_name: "",
      input_participation: null
    }
  },
  methods: {
    async registerParticipantion() {
      let result = {
        firstName: this.input_first_name,
        lastName: this.input_last_name,
        participation: this.input_participation
      }

      console.log(JSON.stringify(result))
      await axios.post("http://localhost:3000/participants",result)
    }
  },
}
</script>