import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
    },
  },
  { toJSON: { virtuals: true } }
);

postSchema.virtual("short_content").get(function () {
  return this.content.substring(0, 100) + "...";
});

export default mongoose.models.Post || mongoose.model("Post", postSchema);
