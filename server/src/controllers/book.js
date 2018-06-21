import httpStatus from 'http-status';
import Promise from 'bluebird';

import { APIError } from '../helpers/errors';
import Book from '../models/book';
import Evaluation from '../models/evaluation';

const BookController = {
/**
   * @swagger
   * /books:
   *   get:
   *     tags:
   *      - Book
   *     description: Show all books
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
   *         description: return an array of books'
   */

  async readAll(req, res) {
    const books = await Book.find({}).populate('addedBy');
    const response = await Promise.map(books, async (book) => {
      const select = {
        rate: 1,
        comment: 1,
        user: 1,
      };
      const reviews = await Evaluation.find({ book: book.id }, select)
        .populate('user', 'userName');
      return {
        book,
        reviews,
      };
    });
    res.status(httpStatus.OK).json(response);
  },

  /**
   * @swagger
   * /books:
   *   post:
   *     tags:
   *      - Book
   *     description: create a book
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: book
   *         description: Book object.
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Book'
   *       - name: Authorization
   *         description: Bearer token
   *         in: header
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: return the created book'
   */

  async create(req, res) {
    const { id } = req.user;
    const book = await Book.findOne({ isbn: req.body.isbn });
    if (book !== null) throw new APIError('isbn is already taken', httpStatus.BAD_REQUEST);
    const newBook = await Book.create({
      ...req.body,
      addedBy: id,
    });
    res.status(httpStatus.CREATED).json(newBook);
  },

  /**
   * @swagger
   * /books/{id}/review:
   *   post:
   *     tags:
   *      - Book
   *     description: create a book review
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Book id
   *         in: path
   *         required: true
   *         type: string
   *       - name: book
   *         description: Book object.
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Evaluation'
   *       - name: Authorization
   *         description: Bearer token
   *         in: header
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: return the created book'
   */
  async review(req, res) {
    const { id: bookId } = req.params;
    const { id: userId } = req.user;
    const review = await Evaluation.create({
      ...req.body,
      user: userId,
      book: bookId,
    });
    res.status(httpStatus.CREATED).json(review);
  },

  /**
   * @swagger
   * /books/{id}/review:
   *   get:
   *     tags:
   *      - Book
   *     description: get books review
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Book id
   *         in: path
   *         required: true
   *         type: string
   *       - name: Authorization
   *         description: Bearer token
   *         in: header
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: return the created book'
   */
  async readReviews(req, res) {
    const reviews = await Evaluation.find({
      book: req.params.id,
    });
    res.status(httpStatus.OK).json(reviews);
  },
};

export default BookController;
