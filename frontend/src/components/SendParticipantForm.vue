<template>
  <header>
    <form>
      <input class="field" type="text" v-model="input_first_name" placeholder="First Name" required >
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
    }
  },
}
</script>

<style>

.sendButton {
  padding-right: 2em;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>