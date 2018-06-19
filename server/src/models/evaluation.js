import mongoose from 'mongoose';
import paginate from 'mongoose-paginate';
import fieldRemover from 'mongoose-field-remover';

const Schema = mongoose.Schema;

/**
 * @swagger
 * definition:
 *   Book:
 *     properties:
 *       rate:
 *         type: string
 *       comment:
 *         type: string
 *       user:
 *         type: string
 *       book:
 *         type: string
 *     required:
 *       - rate
 *       - comment
 *       - user
 *       - book
 */

const EvaluationSchema = new Schema({
  rate: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  book: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Book',
  },
});

EvaluationSchema.plugin(paginate);
EvaluationSchema.plugin(fieldRemover, '__v');

export default mongoose.model('Evaluation', EvaluationSchema);
