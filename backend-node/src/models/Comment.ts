import mongoose, { Document, Model } from 'mongoose';

interface IComment extends Document {
  userId: string;
  videoId: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  _doc: any;
}

const CommentSchema = new mongoose.Schema<IComment>(
  {
    userId: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Comment: Model<IComment> = mongoose.model('Comment', CommentSchema);

export default Comment;
