<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed v-model="drawer" temporary app>
      <v-list>
        <router-link
          v-for="([icon, text, path], i) in items"
          :key="i"
          :to="{ path: path }"
          class="side_bar_link"
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-app-bar
      fixed
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
      app
    >
    <v-app-bar-title>MABRA</v-app-bar-title>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      



      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon color="yellow" v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-toolbar-items class="hidden-sm-and-down">
            
            <v-btn
              flat
              v-bind:to="{ name: 'Register' }"
              v-if="!current_user"
              id="register_btn"
            >
              Register
            </v-btn>
            
          </v-toolbar-items>
        </v-list>
      </v-menu>

      
    </v-app-bar> -->

    <!-- <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="700"
    >
     
    <v-main>
      <v-container style="height: 1000px">
        <v-parallax src="https://picsum.photos/1920/1080?random">
        <div id="app"><router-view></router-view></div>
        </v-parallax>   
      </v-container>
    </v-main>
    </v-sheet> -->

    <v-app-bar
      v-scroll="onScroll"
      :color="color"
      :dark="!hasColor"
      :light="hasColor"
      elevate-on-scroll
      app
    >
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>

      <v-spacer class="hidden-sm-and-up"></v-spacer>

      <v-toolbar-title class="font-weight-bold headline"
        >MABRA
      </v-toolbar-title>

      <v-spacer class="hidden-xs-only"></v-spacer>

      <v-btn
        v-for="([, text, path], i) in items"
        :key="i"
        :to="{ path: path }"
        class="font-weight-light hidden-sm-and-down ml-2"
        large
        text
      >
        {{ text }}
      </v-btn>

      <v-menu bottom min-width="200px" offset-y v-if="current_user">
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            class="font-weight-light hidden-sm-and-down ml-2"
            large
            text
          >
            <v-avatar size="48">
              <v-icon dark> mdi-account-circle </v-icon>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
              </v-avatar>
              <h3>{{ current_user.name }}</h3>
              <p class="text-caption mt-1">
                {{ current_user.email }}
              </p>
              <!-- <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text> Edit Account </v-btn> -->
              <v-divider class="my-3"></v-divider>
              <v-btn
                id="add_movie_link"
                
                v-bind:to="{ name: 'AddMovie' }"
                depressed rounded text
              >
                Add Movie
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click="logout"> Disconnect </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>

      <!-- <v-btn id="user_email" flat v-if="current_user">
        <v-avatar color="red">
          <v-icon dark> mdi-account-circle </v-icon> </v-avatar
        >{{ current_user.email }}</v-btn
      >

      <v-btn id="logout_btn" flat v-if="current_user" @click="logout"
        >Logout</v-btn
      > -->



      <!-- <v-btn text class="font-weight-light hidden-sm-and-down" to="/"
        >Home</v-btn
      >

      <v-btn text  class="font-weight-light hidden-sm-and-down" to="/Movies"
        >Movies</v-btn
      >

      <v-btn text  class="font-weight-light hidden-sm-and-down" to="/Books"
        >Books</v-btn
      >

      <v-btn
        text
        dark
        class="font-weight-light hidden-sm-and-down"
        to="/Contact"
        >Contact</v-btn
      > -->
    </v-app-bar>

    <router-view></router-view>

    <v-footer
      absolute
      light
      color="transparent"
      class="my-3 mx-auto"
      style="max-width: 95%; left: 0px; right: 0px; bottom: 0px"
    >
      <v-row justify="center">
        <v-col cols="6" class="hidden-sm-and-down">
          <v-btn
            :to="{ path: path }"
            class="mx-auto"
            small
            text
            v-for="([, text, path], i) in items"
            :key="i"
          >
            {{ text }}
          </v-btn>
        </v-col>
        <v-col class="hidden-sm-and-down"><v-spacer></v-spacer> </v-col>
      </v-row>
      <v-col cols="12" class="hidden-md-and-up"></v-col>
      <v-btn
        color="red darken-1"
        dark
        href="https://github.com/koushouto/movie_rating_app"
        target="_blank"
      >
        link to github repositorie
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import axios from "axios";
import "./assets/stylesheets/main.css";
import bus from "./bus";

export default {
  data: () => ({
    items: [
      ["mdi-home", "Home", "/"],
      ["mdi-movie", "Movies", "/movies"],
      ["mdi-book", "Books", "/books"],
      ["mdi-email", "Contact", "/contact"],
    ],
    drawer: false,
    hasColor: false,
    current_user: null,
  }),
  props: { source: String },
  mounted() {
    this.fetchUser();
    this.listenToEvents();
  },
  computed: {
    color() {
      return this.hasColor ? "white" : "transparent";
    },
  },
  methods: {
    onScroll() {
      this.hasColor = window.scrollY > 50;
    },

    listenToEvents() {
      bus.$on("refreshUser", () => {
        this.fetchUser();
      });
    },
    async fetchUser() {
      return axios({
        method: "get",
        url: "http://localhost:8081/api/current_user",
      })
        .then((response) => {
          this.current_user = response.data.current_user;
        })
        .catch(() => {});
    },
    logout() {
      return axios({ method: "get", url: "http://localhost:8081/api/logout" })
        .then(() => {
          bus.$emit("refreshUser");
          this.$router.push({ name: "Home" });
        })
        .catch(() => {});
    },
  },
};
</script>