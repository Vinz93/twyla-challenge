import express from 'express';
import validate from 'express-validation';
import passport from 'passport';

import './services/passport';

import User from './controllers/user';
import userValidator from './services/param_validations/user';
import { catchErrors } from './helpers/errors';

const requireAuth = passport.authenticate('jwt', { session: true });

const router = express.Router(); // eslint-disable-line new-cap

validate.options({
  allowUnknownBody: false,
});

router.route('/users')
  .get(validate(userValidator.readAll), catchErrors(User.readAll))
  .post(validate(userValidator.create), catchErrors(User.create));

router.route('/users/me')
  .get(validate(userValidator.readByMe), requireAuth, User.readByMe);


export default router;
