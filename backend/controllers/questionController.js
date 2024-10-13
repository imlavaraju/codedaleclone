const Question = require("../models/Question");
const csv = require("csv-parser");
const fs = require("fs");

// Handle CSV upload and data saving
const uploadQuestions = (req, res) => {
  const companyName = req.body.companyName;
  const img = req.body.img;

  const questions = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (row) => {
      questions.push({
        ID: parseInt(row.ID),
        Title: row.Title,
        Acceptance: row.Acceptance,
        Difficulty: row.Difficulty,
        Frequency: parseFloat(row.Frequency),

        LeetcodeQuestionLink: row["Leetcode Question Link"],
      });
    })
    .on("end", async () => {
      try {
        const newQuestionSet = new Question({
          companyName,
          img,
          questions,
        });

        await newQuestionSet.save();
        res.status(201).json({ message: "Data saved successfully!" });
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({ message: "An error occurred while saving data." });
      } finally {
        fs.unlinkSync(req.file.path); // Remove uploaded file
      }
    });
};

// Get all companies
const getAllCompanies = async (req, res) => {
  try {
    const companies = await Question.find({}, "companyName img");
    res.status(200).json(companies);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching companies." });
  }
};

// Get questions by company name
const getQuestionsByCompanyName = async (req, res) => {
  const { companyName } = req.params;

  try {
    const companyData = await Question.findOne({ companyName });

    if (!companyData) {
      return res.status(404).json({ message: "Company not found." });
    }

    res.status(200).json(companyData);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching company data." });
  }
};

module.exports = {
  uploadQuestions,
  getAllCompanies,
  getQuestionsByCompanyName,
};
