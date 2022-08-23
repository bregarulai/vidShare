import mongoose, { Document, Model } from 'mongoose';

interface IVideo extends Document {
  userId: string;
  title: string;
  description: string;
  imgUrl: string;
  videoUrl: string;
  views: number;
  tags?: [String];
  likes?: [String];
  dislikes?: [String];
  createdAt: Date;
  updatedAt: Date;
}

const VideoSchema = new mongoose.Schema<IVideo>(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String],
      default: [],
    },
    likes: {
      type: [String],
      default: [],
    },
    dislikes: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Video: Model<IVideo> = mongoose.model('Video', VideoSchema);

export default Video;
