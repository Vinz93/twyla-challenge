import express from 'express';
import validate from 'express-validation';
import passport from 'passport';

import './services/passport';

import User from './controllers/user';
import Book from './controllers/book';
import userValidator from './services/param_validations/user';
import bookValidator from './services/param_validations/book';
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

router.route('/books')
  .post(validate(bookValidator.create), requireAuth, catchErrors(Book.create))
  .get(validate(bookValidator.readAll), catchErrors(Book.readAll));

router.route('/books/:id/review')
  .get(validate(bookValidator.readReviews), requireAuth, catchErrors(Book.readReviews))
  .post(validate(bookValidator.review), requireAuth, catchErrors(Book.review));


export default router;
