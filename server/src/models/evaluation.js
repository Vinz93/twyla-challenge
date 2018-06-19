import mongoose from 'mongoose';
import paginate from 'mongoose-paginate';
import fieldRemover from 'mongoose-field-remover';

const Schema = mongoose.Schema;

/**
 * @swagger
 * definition:
 *   Evaluation:
 *     properties:
 *       rate:
 *         type: integer
 *       comment:
 *         type: string
 *       user:
 *         type: string
 *       book:
 *         type: string
 *     required:
 *       - rate
 *       - comment
 */

const EvaluationSchema = new Schema({
  rate: {
    type: Number,
    min: 1,
    max: 5,
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
