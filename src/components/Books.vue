<template>
  <div class="books" style="padding-bottom: 72px">
    <v-sheet tile color="red  darken-1" dark>
      <v-responsive>
        <v-container class="px-4" fill-height style="padding: 96px 0px">
          <v-row>
          <v-sheet class="mx-auto" elevation="10" color="grey lighten-5">
            <v-slide-group
            light
              v-model="model"
              class="pa-4"
              center-active
              show-arrows
            >
              <v-slide-item
                v-for="n in 15"
                :key="n"
                v-slot="{ active, toggle }"
              >
                <v-img
                  :src="imgs[n]"
                  
                  class="ma-4"
                  height="200"
                  width="130"
                  @click="toggle"
                >
                  <v-row class="fill-height" align="center" justify="center">
                    <v-scale-transition>
                      <v-icon
                        v-if="active"
                        color="red"
                        size="48"
                        v-text="'mdi-check'"
                      ></v-icon>
                    </v-scale-transition>
                  </v-row>
                </v-img>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
          </v-row>
        </v-container>
      </v-responsive>
    </v-sheet>

    <v-card
      
      class="mx-auto py-6 mb-2"
      light
      elevation="24"
      style="max-width: 95%; margin-top: -64px"
    >
      <v-sheet class="mx-auto py-0 py-md-6" style="max-width: 1000px">
        <v-card-title
          class="justify-center font-weight-bold grey--text text--darken-3 mb-3 text-center display-1"
          >Join us today and Sharing your mine</v-card-title
        >
        <v-card-text
          class="text-left text-md-center title font-weight-light mx-auto mb-5"
          >This is a web app where you can write more details about your
          favorite book or movie. Keep your thinking engaged by providing
          meaningful information. Remember that by this time, Sharing things is
          a good way to improve happiness. Feel free to register an account for
          your first sharing.
        </v-card-text>

        <v-container>
          <v-row>
            <v-col sm="6" md="4" cols="12">
              <div class="text-center">
                <v-icon class="mb-3 indigo--text" light style="font-size: 64px"
                  >mdi-message-text</v-icon
                >
                <p class="text-justify text-md-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud
                </p>
              </div>
            </v-col>
            <v-col sm="6" md="4" cols="12">
              <div class="text-center">
                <v-icon class="mb-3 green--text" light style="font-size: 64px"
                  >mdi-shield-plus</v-icon
                >
                <p class="text-justify text-md-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud
                </p>
              </div>
            </v-col>
            <v-col sm="6" md="4" cols="12">
              <div class="text-center">
                <v-icon class="mb-3 red--text" light style="font-size: 64px"
                  >mdi-widgets</v-icon
                >
                <p class="text-justify text-md-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud
                </p>
              </div>
            </v-col>
          </v-row>
          <v-divider class="my-5 mx-3" light></v-divider>

          <v-card-title
            class="justify-center font-weight-bold grey--text text--darken-3 mb-3 text-center display-1"
            >Welcome to pull requests!</v-card-title
          >
          <v-card-text
          class="text-left text-md-center title font-weight-light mx-auto mb-5"
          >This is also an open source application, very welcome your 
          <a href="https://github.com/koushouto/movie_rating_app/pulls" target="_blank" class="text-decoration-none" >pull request</a>
          .If you have any question,like the something wrong in the website.Feel free to ask question ,and here is <a href="https://github.com/koushouto/movie_rating_app/issues" target="_blank" class="text-decoration-none" >issue</a> link.
        </v-card-text>
        
        </v-container>
      </v-sheet>
    </v-card>
  </div>
</template>


<script>
export default {
  data: () => ({
    model: null,
    imgs: [
        "https://picsum.photos/1920/1080?random=1",
        "https://picsum.photos/1920/1080?random=2",
        "https://picsum.photos/1920/1080?random=3",
        "https://picsum.photos/1920/1080?random=4",
        "https://picsum.photos/1920/1080?random=5",
        "https://picsum.photos/1920/1080?random=6",
        "https://picsum.photos/1920/1080?random=7",
        "https://picsum.photos/1920/1080?random=8",
        "https://picsum.photos/1920/1080?random=9",
        "https://picsum.photos/1920/1080?random=10",
        "https://picsum.photos/1920/1080?random=11",
        "https://picsum.photos/1920/1080?random=12",
        "https://picsum.photos/1920/1080?random=13",
        "https://picsum.photos/1920/1080?random=14",
        "https://picsum.photos/1920/1080?random=15",
        "https://picsum.photos/1920/1080?random=16",
      ],
  }),
};
</script>
