<template>
  <header>
    <form>
      <input type="text" v-model="input_first_name" placeholder="First Name" required >
      <input type="text" v-model="input_last_name" placeholder="Last Name" required>
      <input type=number v-model="input_participation" placeholder="Participation" required>
      <input class="sendButton" type="submit" id="sendButton" value="SEND" v-on:click="registerParticipantion" >
    </form>
  </header>
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
    },

  },
}
</script>

<style>

form{
  width: 100%;
  height: 5rem;
  background-color: #06B6D4;
  text-align: center;
  position: fixed;
  top: 0;
  overflow: hidden;}

input {
  width: 25ch;
  min-height: 2rem;
  padding-left: 0.5rem;
  margin-right: 1rem;
}

.register #sendButton {
  width: 10ch;
  min-height: 2rem;
  background-color: deepskyblue;
  color: white;
  border-color: white;
}
.sendButton {
  padding-right: 2em;
}


</style>