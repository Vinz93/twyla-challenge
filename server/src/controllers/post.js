import httpStatus from 'http-status';

import { paginate } from '../helpers/utils';
import { APIError } from '../helpers/errors';
import Book from '../models/book';
import User from '../models/user';



export const readAll = async (req, res) => {
  const offset = paginate.offset(req.query.offset);
  const limit = paginate.limit(req.query.limit);

  const find = req.query.find || {};
  const sort = req.query.sort || {
    createdAt: 1,
  };

  const posts = await Post.paginate(find, {
    sort,
    offset,
    limit,
  });
  res.json(posts);
};


export const create = async (req, res) => {
  const user = await User.findById(req.body.author);
  if (!user) throw new APIError('user not found.', httpStatus.NOT_FOUND);
  const post = await Post.create(req.body);
  res.json(post);
};
