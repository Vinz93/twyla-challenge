import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import User from '../models/user';
import { appConfig } from '../config/vars';

passport.serializeUser((userName, done) => {
  console.log("serialize userName ->", userName);
  done(null, userName);
});
passport.deserializeUser(async (userName, done) => {
  console.log("deserialize ->", userName);
  const user = await User.find({ userName });
  done(null, user);
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: appConfig.passportSecret,
};

const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const { userName } = payload;
    done(null, userName);
  } catch (err) {
    return done(err, false);
  }
});

passport.use(jwtLogin);
