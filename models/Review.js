const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
  reviews: [
    {
      name: String,
      email: String,
      reviewTitle: String,
      rating: Number,
      review: String
    }
  ]
});

const Review = mongoose.model("User", reviewSchema);

module.exports = Review;
