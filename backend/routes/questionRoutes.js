const express = require("express");
const multer = require("multer");
const {
  uploadQuestions,
  getAllCompanies,
  getQuestionsByCompanyName,
} = require("../controllers/questionController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Route to upload questions
//router.post("/upload", upload.single("file"), uploadQuestions);

// Route to get all companies
router.get("/companies", getAllCompanies);

// Route to get questions by company name
router.get("/questions/:companyName", getQuestionsByCompanyName);

module.exports = router;
