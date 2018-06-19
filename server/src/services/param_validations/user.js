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
      userName: Joi.string().required(),
    },
  },
  readByMe: {
    headers: {
      authorization: Joi.string().required(),
    },
  },
};
