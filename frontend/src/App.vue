<template>
  <ParticipantForm/>
</template>
<script>
import ParticipantForm from "@/components/SendParticipantForm.vue";

export default {
  name: 'App',
  components: {
    ParticipantForm
  }
}
</script>
<style>
.logo {
  width: 40rem;
}

.register input {
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
