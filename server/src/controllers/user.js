import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';

import { paginate } from '../helpers/utils';
import { appConfig } from '../config/vars';
import User from '../models/user';

const UserController = {
  /**
   * @swagger
   * /users:
   *   get:
   *     tags:
   *      - User
   *     description: Show all users
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: limit
   *         description: pagination limit.
   *         in: query
   *         required: false
   *         type: string
   *       - name: offset
   *         description: pagination offset.
   *         in: query
   *         required: false
   *         type: string
   *     responses:
   *       200:
   *         description: return an array of users'
   */

  async readAll(req, res) {
    const offset = paginate.offset(req.query.offset);
    const limit = paginate.limit(req.query.limit);

    const find = req.query.find || {};
    const sort = req.query.sort || {
      createdAt: 1,
    };

    const users = await User.paginate(find, {
      sort,
      offset,
      limit,
    });
    res.status(httpStatus.OK).json(users);
  },

  /**
   * @swagger
   * /users:
   *   post:
   *     tags:
   *      - User
   *     description: Create users
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: user
   *         description: User object.
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/User'
   *     responses:
   *       200:
   *         description: Successfully created
   *         schema:
   *           allOf:
   *              - $ref: '#/definitions/User'
   *              - properties:
   *                  id:
   *                    type: string
   *                  createdAt:
   *                    type: string
   *                    format: date-time
   *                  updatedAt:
   *                    type: string
   *                    format: date-time
   */
  async create(req, res) {
    const newUser = await User.create(req.body);
    const token = jwt.sign({
      userName: newUser.userName,
    }, appConfig.passportSecret);
    return res.status(httpStatus.CREATED).json({
      newUser,
      token,
    });
  },

  /**
   * @swagger
   * /users/me:
   *   get:
   *     tags:
   *      - User
   *     description: user info
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: Authorization
   *         description: Bearer token
   *         in: header
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: user information'
   */

  readByMe(req, res) {
    return res.json({ userName: req.user });
  },

};

export default UserController;
