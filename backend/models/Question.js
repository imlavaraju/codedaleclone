const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  img: { type: String, required: true }, // URL for the image
  questions: [
    {
      ID: { type: Number, required: true },
      Title: { type: String, required: true },
      Acceptance: { type: String, required: true },
      Difficulty: { type: String, required: true },
      Frequency: { type: Number, required: true },
      LeetcodeQuestionLink: { type: String, required: true },
    },
  ],
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
