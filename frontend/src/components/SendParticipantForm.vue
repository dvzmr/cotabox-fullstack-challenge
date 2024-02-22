<template>
  <header>
    <form>
      <input id="inputField" type="text" v-model="input_first_name" @input="validInput($event)" placeholder="First Name"
             maxlength="20" required>
      <input type="text" v-model="input_last_name" @input="validInput($event)" placeholder="Last Name" maxlength="20"
             required>
      <input type=number v-model="input_participation" @input="validParticipation($event)" placeholder="Participation"
             required>
      <input class="sendButton" type="submit" id="sendButton" value="SEND" v-on:click="registerParticipation">
    </form>
  </header>
</template>
<script>

import axios from 'axios';

export default {
  name: 'ParticipantForm',
  data() {
    return {
      input_first_name: "",
      input_last_name: "",
      input_participation: null
    }
  },
  methods: {

    validInput(event) {

      var regex = /^[a-zA-Z\s]*$/;

      if (!regex.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^a-zA-Z\s]/g, '');

      }
    },

    validParticipation(event) {

      var regex = /^(?:0|[1-9]\d*)(?:\.\d+)?$/;

      if (!regex.test(event.target.value)) {
        event.target.value = event.target.value.replace(/^(?:0|[1-9]\d*)(?:\.\d+)?$/, '');

      }
    },

    async registerParticipation() {
      let result = {
        firstName: this.input_first_name,
        lastName: this.input_last_name,
        participation: this.input_participation
      }

      console.log(JSON.stringify(result))
      await axios.post("http://localhost:3000/participants", result)
    }
  }
}
</script>

<style>

form {
  width: 100%;
  height: 5rem;
  background-color: #06B6D4;
  text-align: center;
  position: fixed;
  top: 0;
  overflow: hidden;
}

input {
  width: 25ch;
  min-height: 2rem;
  padding-left: 0.5rem;
  margin-right: 1rem;
}

.sendButton {
  width: 10ch;
  min-height: 2rem;
  background-color: deepskyblue;
  color: white;
  border: 2px solid white;
  padding-left: 1em;
  padding-bottom: 0.1em;
  font-weight: bolder;
}

input[type=number] {
  -moz-appearance: textfield;

}




</style>