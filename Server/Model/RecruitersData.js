const mongoose = require("mongoose");

const RecruitersData = new mongoose.Schema({
  //Recruiters Registration Form
  Typesection: {
    type: String,
    enum: ["applicant", "recruiter"],
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  contactNumber: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  originalPassword: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("RecruitersData.data", RecruitersData);
