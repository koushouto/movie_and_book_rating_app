<template>
  <v-layout row wrap>
    <v-flex xs4 v-for="movie in movies" :key="movie._id">
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">
              <v-btn flat v-bind:to="`/movies/${movie._id}`">{{movie.name}}</v-btn>
            </div>
            <span class="grey--text">{{ movie.release_year }} ‧ {{ movie.genre }}</span>
          </div>
          <!-- TO DO show the rating in here -->
        </v-card-title>
        <v-card-text> {{ movie.description }} </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";
export default {
  name: "Movies",
  data() {
    return { movies: [] };
  },
  mounted() {
    this.fetchMovies();
  },
  
  methods: {
    async fetchMovies() {
      const token = window.localStorage.getItem("auth");
      return axios({
        method: "get",
        url: "http://localhost:8081/movies",
        headers: {
          //send the JWT token while making a request to the movie listing page
          Authorization: `JWT ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          this.movies = response.data.movies;
          this.current_user = response.data.current_user;
        })
        .catch(() => {});
    },
  },
};
</script>
