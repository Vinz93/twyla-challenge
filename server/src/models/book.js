import mongoose from 'mongoose';
import paginate from 'mongoose-paginate';
import fieldRemover from 'mongoose-field-remover';

const { Schema } = mongoose;

/**
 * @swagger
 * definition:
 *   Book:
 *     properties:
 *       title:
 *         type: string
 *       isbn:
 *         type: string
 *       addedBy:
 *         type: string
 *     required:
 *       - title
 *       - isbn
 */

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
    unique: 'the isbn is already taken',
  },
  addedBy: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
}, {
  timestamps: true,
});

BookSchema.plugin(paginate);
BookSchema.plugin(fieldRemover, '__v');

export default mongoose.model('Book', BookSchema);
