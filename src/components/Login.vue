<template>
  <div class="login" style="padding-bottom: 72px">
    <v-sheet tile color="grey darken-4" dark>
      <v-responsive>
        <v-img
          src="https://picsum.photos/1920/1080?random"
          gradient="to top, rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.62)"
        >
          <v-container class="px-4" fill-height style="padding: 96px 0px">
            <v-row>
              <v-col>
                <v-card color="transparent">
                  <h1>Sign In</h1>
                  <v-spacer> </v-spacer>
                  <v-card color="transparent">
                    <v-form v-model="valid" ref="form" lazy-validation>
                      <v-text-field
                        label="Email"
                        v-model="email"
                        :rules="emailRules"
                        required
                      ></v-text-field>

                      <v-text-field
                        label="Password"
                        v-model="password"
                        :rules="passwordRules"
                        required
                      ></v-text-field>

                      <v-btn
                        @click="submit"
                        :disabled="!valid"
                        color="grey"
                        large
                      >
                        submit
                      </v-btn>
                      <v-btn @click="clear" color="grey" large>clear</v-btn>
                    </v-form>
                  </v-card>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-responsive>
    </v-sheet>
  </div>
</template>

<script>
import axios from "axios";
import bus from "./../bus";
export default {
  data: () => ({
    valid: true,
    email: "",
    password: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /\S+@\S+\.\S+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [(v) => !!v || "Password is required"],
  }),
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        return axios({
          method: "post",
          data: { email: this.email, password: this.password },
          url: "http://localhost:8081/users/login",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => {
            window.localStorage.setItem("auth", response.data.token);
            this.$swal("Great!", "You are ready to start!", "success");
            bus.$emit("refreshUser");
            this.$router.push({ name: "Movies" });
          })
          .catch((error) => {
            const message = error.response.data.message;
            this.$swal("Oh oo!", `${message}`, "error");
            this.$router.push({ name: "Login" });
          });
      }
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>