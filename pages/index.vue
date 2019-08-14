<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6 >
      <div class="text-center">
        This person is {{person.age}}. 
        <p>They are born in {{person.birthCountry}} 
        and this means that they <span class="red--text">{{isEligibleToVote()}}</span> Vote.</p>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
let person = {
  birthCountry: "USA",
  age: 22
}
import {isEligibleToVote} from '../src/voterService'



export default {
  data() {
    return {
      person
    }
  },
  components: {
  },
  methods: {
    isEligibleToVote() {
      if (isEligibleToVote(person)) {
        return "CAN";
      } else {
        return "CANT";
      }
    }
  }
}
</script>
