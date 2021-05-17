const User = require("../models/User.js");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const jwt = require("jsonwebtoken");

const ExtractJwt = passportJWT.ExtractJwt;
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
jwtOptions.secretOrKey = "thisisthesecretkey";

module.exports.controller = app => {
  // register a user
  app.post("/users/register", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new User({ name, email, password });
    User.createUser(newUser, (error, user) => {
      if (error) {
        res.status(422).json({
          message: "Somthing went wrong. Please try again after some time!"
        });
      }
      res.send({ user });
    });
  });

  // local strategy
  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      (email, password, done) => {
        User.getUserByEmail(email, (err, user) => {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false);
          }
          User.comparePassword(password, user.password, (error, isMatch) => {
            if (isMatch) {
              return done(null, user);
            }
            return done(null, false);
          });
          return true;
        });
      }
    )
  );
  // user login
  app.post(
    "/users/login",
    passport.authenticate("local", { failureRedirect: "/users/login" }),
    (req, res) => {
      res.redirect("/");
    }
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  // // login a user
  // app.post("/users/login", (req, res) => {
  //   if (req.body.email && req.body.password) {
  //     const email = req.body.email;
  //     const password = req.body.password;
  //     User.getUserByEmail(email, (err, user) => {
  //       if (!user) {
  //         res.status(404).json({ message: "The user does not exist!" });
  //       } else {
  //         User.comparePassword(password, user.password, (error, isMatch) => {
  //           if (error) throw error;
  //           if (isMatch) {
  //             const payload = { id: user.id };
  //             const token = jwt.sign(payload, jwtOptions.secretOrKey);
  //             res.json({ message: "ok", token });
  //           } else {
  //             res.status(401).json({ message: "The password is incorrect!" });
  //           }
  //         });
  //       }
  //     });
  //   }
  // });
};
