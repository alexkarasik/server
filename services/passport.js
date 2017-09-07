const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    })
});

//clientID 650778914974-99h8s6lhbv97u0k2de64m747i61q3gda.apps.googleusercontent.com
//CLIENT SECRET 1A46sPzRyqi52FVreeUJnMXb
console.log(keys);


passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
async(accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({googleId: profile.id});
    if (existingUser) {
        //we already have a record with the give profileId
        done(null, existingUser);
    } else {
        // we don't have a user record with this ID, make a new record
        new User({googleId: profile.id}).save().then(user => done(null, user));
    }

}));
