const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const middleware = require("./Middlware");
const userData = require("./Model/userData");

// const resumeheading =require("./Model/userData");

const app = express();
const port = 4005;

const mogoURL =
  "mongodb+srv://badasiva22:Siva991276@cluster0.iis7lrd.mongodb.net/ResumeDetails?retryWrites=true&w=majority";

app.use(express.json());
app.use(cors({ origin: "*" }));

//initalizing mongodb to node
mongoose
  .connect(mogoURL)
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log(e.message));

app.get("/", (req, res) => {
  res.send("Welcome to developer hubs server");
});

// Register API
app.post("/register", async (req, res) => {
  try {
    const { fullname, State, Currentlocation, mobile, email } = req.body;
    //checking user whether it is exits or not
    const isUserExist = await userData.findOne({ email: email });

    if (isUserExist) {
      return res.send("User Already Registered");
    } else {
      //generating encrypted password for user
      let newUser = new userData({
        fullname,
        State,
        Currentlocation,
        mobile,
        email,
      });

      newUser.save(); //saving mongodb collections
      return res.send("user Created Successfully");
    }
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});

// get all developers data
app.get("/alldevelopers", async (req, res) => {
  const alldevelopers = await userData.find({});

  return res.json(alldevelopers);
});

//resume heading post
app.post("/resumeheding1", async (req, res) => {
  try {
    const { resumeheading } = req.body;

    let newUser = new userData({
      resumeheading: resumeheading,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});

app.post("/profileSummaryDetails", async (req, res) => {
  try {
    const { profileSummary } = req.body;

    let newUser = new userData({
      profileSummary: profileSummary,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});

app.post("/keySkills", async (req, res) => {
  try {
    const { KeySkills } = req.body;

    let newUser = new userData({
      KeySkills: KeySkills,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});

app.post("/EmploymentDetails", async (req, res) => {
  try {
    const {
      TotalExperience,
      CurrentCTC,
      YourDesignation,
      YourOrganizationCategory,
      Type,
      StartedWorkingFrom,
      WorkedTill,
      Describe,
    } = req.body;

    let newUser = new userData({
      TotalExperience: TotalExperience,
      CurrentCTC: CurrentCTC,
      YourDesignation: YourDesignation,
      YourOrganizationCategory: YourOrganizationCategory,
      Type: Type,
      StartedWorkingFrom: StartedWorkingFrom,
      WorkedTill: WorkedTill,
      Describe: Describe,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});































app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
