<template>
  <v-layout row wrap>
    <v-flex xs12> <div v-text="message"></div> </v-flex>
    <v-flex xs12>
      <v-btn color="primary" v-on:click="reply">Reply</v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      message: "6666",
    };
  },
  methods: {
    reply() {
      this.message = "I'm doing great. Thank You!";
    },
  },
};
</script>
