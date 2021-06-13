<template>
  <div class="movies" style="padding-bottom:72px">
    <v-sheet tile color="red  darken-1" dark>
      <v-responsive>
        <v-container class="px-4" fill-height style="padding: 96px 0px">
          <!-- 轮播图 -->

          <v-card elevation="10">
            <v-carousel
              cycle
              height="550"
              hide-delimiter-background
              show-arrows-on-hover
            >
              <v-carousel-item v-for="(img, i) in imgs" :key="i">
                <v-img :src="imgs[i]" height="100%" bottom-gradient> </v-img>
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-container>
      </v-responsive>
    </v-sheet>

    <v-card
      class="mx-auto py-6 mb-2"
      light
      elevation="24"
      style="max-width: 95%; margin-top: -64px"
    >
      <v-layout row class="ma-2">
        <v-flex  v-for="(movie,i) in movies" :key="movie._id" sm4 >
          <v-card class="my-4 d-flex flex-no-wrap justify-space-between" color="grey  lighten-5" v-bind:to="`/movies/${movie._id}`">
            <v-card-title primary-title>
              <v-row>
                <div class="headline">
                  {{
                    movie.name
                  }}
                </div>
                <span class="grey--text"
                  >{{ movie.release_year }} ‧ {{ movie.genre }}</span
                >
              </v-row>
              <!-- TO DO show the rating in here -->
              <v-card-text> {{ movie.description }} </v-card-text>
            </v-card-title>
            
            <v-avatar
                class="ma-3"
                size="125"
                tile
                
              >

                <v-img  :src="imgs[i]"></v-img>
              </v-avatar>
          </v-card>
        </v-flex>
      </v-layout>
      <div class="text-center">
      <v-pagination
        color="red"
        v-model="page"
        :length="1+movies.length/6"
      ></v-pagination>
    </div>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Movies",
  data() {
    return {
      imgs: [
        "https://picsum.photos/1920/1080?random=1",
        "https://picsum.photos/1920/1080?random=2",
        "https://picsum.photos/1920/1080?random=3",
        "https://picsum.photos/1920/1080?random=4",
        "https://picsum.photos/1920/1080?random=5",
      ],
      movies: [],
      page:1,
    };
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
