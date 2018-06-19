import objectId from 'joi-objectid';
import Joi from 'joi';

Joi.objectId = objectId(Joi);

export default {
  readAll: {
    query: {
      offset: Joi.number().integer(),
      limit: Joi.number().integer(),
    },
  },
  create: {
    body: {
      title: Joi.string().required(),
      isbn: Joi.string().required(),
    },
    headers: {
      authorization: Joi.string().required(),
    },
  },
  review: {
    body: {
      rate: Joi.number().required(),
      comment: Joi.string().required(),
    },
    path: {
      id: Joi.objectId().required(),
    },
    headers: {
      authorization: Joi.string().required(),
    },
  },
  readReviews: {
    path: {
      id: Joi.objectId().required(),
    },
    headers: {
      authorization: Joi.string().required(),
    },
  },
};
