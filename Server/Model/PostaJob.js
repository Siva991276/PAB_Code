const mongoose = require("mongoose");

const PostAJobData = new mongoose.Schema({
  jobtitle: {
    type: String,
    require: true,
  },
  positionavailable: {
    type: String,
    require: true,
  },
  jobtype: {
    type: String,
    require: true,
  },
  jobexperience: {
    type: String,
    require: true,
  },
  maxsalaryperannum: {
    type: String,
    require: true,
  },
  techinicalskill: {
    type: String,
    require: true,
  },
  region: {
    type: String,
    require: true,
  },
  joblocation: {
    type: String,
    require: true,
  },
  jobdeadling: {
    type: String,
    require: true,
  },
  youreducation: {
    type: String,
    require: true,
  },
  jobdiscriptionA1: {
    type: String,
    require: true,
  },
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
module.exports = mongoose.model("PostAJobData.data", PostAJobData);
