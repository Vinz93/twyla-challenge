import mongoose from 'mongoose';
import paginate from 'mongoose-paginate';
import uniqueValidator from 'mongoose-unique-validator';
import fieldRemover from 'mongoose-field-remover';

const { Schema } = mongoose;

/**
 * @swagger
 * definition:
 *   User:
 *     properties:
 *       userName:
 *         type: string
 *     required:
 *       - userName
 */

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: 'the username is already taken',
    uniqueCaseInsensitive: true,
    sparse: true,
    trim: true,
  },

});

UserSchema.plugin(fieldRemover, '__v');
UserSchema.plugin(uniqueValidator);
UserSchema.plugin(paginate);

export default mongoose.model('User', UserSchema);
