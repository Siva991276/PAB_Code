const mongoose = require("mongoose");

const userData = new mongoose.Schema({
  fullname: {
    type: String,
    require: true,
  },
  State: {
    type: String,
    require: true,
  },
  Currentlocation: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },
  resumeheading: {
    type: String,
    require: true,
  },
  profileSummary: {
    type: String,
    require: true,
  },
  KeySkills: {
    type: String,
    require: true,
  },
  TotalExperience: {
    type: String,
    require: true,
  },
  CurrentCTC: {
    type: String,
    require: true,
  },
  YourDesignation: {
    type: String,
    require: true,
  },
  YourOrganizationCategory: {
    type: String,
    require: true,
  },
  Type: {
    type: String,
    enum: ["yes", "no"],
    require: true,
  },
  StartedWorkingFrom: {
    type: String,
    require: true,
  },
  WorkedTill: {
    type: String,
    require: true,
  },
  Describe: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("userData.data", userData);
