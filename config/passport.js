/* const auth = require('./auth');

const GoogleOauthStrategy = require('passport-google-oauth20').Strategy;

module.exports = (passport) => {

    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((user, done) => done(null, user));
    passport.use(new GoogleOauthStrategy(
        {
          clientID: auth.client,
          clientSecret: auth.secret,
          callbackURL: auth.callback,
          // Set the correct profile URL that does not require any additional APIs
          userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
        },
        (token, refreshToken, profile, done) => done(null, {profile, token})));
} */