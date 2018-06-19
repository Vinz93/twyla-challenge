import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import User from '../models/user';
import { appConfig } from '../config/vars';

passport.serializeUser((obj, done) => {
  done(null, obj);
});
passport.deserializeUser(async (userName, done) => {
  const user = await User.find({ userName });
  done(null, user);
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: appConfig.passportSecret,
};

const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    done(null, payload);
  } catch (err) {
    return done(err, false);
  }
});

passport.use(jwtLogin);
