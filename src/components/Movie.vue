<template>
  <div class="movie" style="padding-bottom: 72px">
    <v-sheet tile color="red  darken-1" style="padding: 45px 0px">
      <v-responsive>
        <v-container class="px-4" fill-height>
          <v-layout row>
              <v-card class="mx-auto my-12">
                <v-img
                  class="my-4"
                  height="250"
                  src="https://picsum.photos/1920/1080?random=10"
                ></v-img>

                <v-card-title>
                  <div>
                    <div class="headline">{{ movie.name }}</div>
                    <span class="grey--text"
                      >{{ movie.release_year }} ‧ {{ movie.genre }}
                    </span>
                  </div>
                </v-card-title>

                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>

                    <div class="grey--text ms-4">4.5 (413)</div>
                  </v-row>

                  <v-card-text> {{ movie.description }} </v-card-text>
                </v-card-text>

                <v-card-actions>
                  <v-btn class="card-title" @click="rate" color="red" dark>Rate this movie</v-btn>
                </v-card-actions>
              </v-card>
            
          </v-layout>
        </v-container>
      </v-responsive>
    </v-sheet>
  </div>
</template> 
<script>
import axios from "axios";
import Vue from "vue";
import StarRating from "vue-star-rating";

const wrapper = document.createElement("div");
// shared state
const state = { note: 0 };
// crate component to content
const RatingComponent = Vue.extend({
  data() {
    return { rating: 0 };
  },
  watch: {
    rating(newVal) {
      state.note = newVal;
    },
  },
  template: `
  <div class="rating">
    Please choose your rating!
    <star-rating v-model="rating" :show-rating="false"></star-rating>
  </div>`,
  components: { "star-rating": StarRating },
});
const component = new RatingComponent().$mount(wrapper);

export default {
  name: "Movie",
  data() {
    return { movie: [] };
  },
  mounted() {
    this.fetchMovie();
  },
  methods: {
    async rate() {
      this.$swal({
        content: component.$el,
        buttons: { confirm: { value: 0 } },
      }).then(() => {
        const movieId = this.$route.params.id;
        return axios({
          method: "post",
          data: { rate: state.note },
          url: `http://localhost:8081/movies/movierating/${movieId}`,
          headers: { "Content-Type": "application/json" },
        })
          .then(() => {
            this.$swal(`Thank you for rating! ${state.note}`, "success");
          })
          .catch((error) => {
            const message = error.response.data.message;
            this.$swal("Oh oo!", `${message}`, "error");
          });
      });
    },

    async fetchMovie() {
      return axios({
        method: "get",
        url: `http://localhost:8081/movies/${this.$route.params.id}`,
      })
        .then((response) => {
          this.movie = response.data;
        })
        .catch(() => {});
    },
  },
};
</script>