<template>
  <div class="home" style="padding-bottom:72px">
    <v-sheet tile color="grey darken-4" dark>
      <v-responsive>
        <v-img
          src="https://picsum.photos/1920/1080?random"
          gradient="to top, rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.62)"
        >
          <v-container class="px-4" fill-height style="padding: 96px 0px">
            <v-row class="pb-12" align="center">
              <v-col cols="12" md="5">
                <h1 class="font-weight-bold">
                  Movie and Book
                  <v-spacer></v-spacer>
                  rating app
                </h1>
                <v-divider class="mb-3"></v-divider>
                <p>
                  Write a recommendation for your favorite book or movie, give
                  your score and share it with your friends.
                </p>
                <v-btn dark large color="red" to="/users/login"  v-if="!current_user">Sign in</v-btn>
                <v-btn dark large color="grey" to="/users/register" v-if="!current_user">Sign up</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
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
  props:{
    'current_user':Object,
  }
}
</script>