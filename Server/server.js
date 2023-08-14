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
//profileSummaryDetails
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
//keySkills
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
//EmploymentDetails
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
//EducationDetails
app.post("/EducationDetails", async (req, res) => {
  try {
    const { Degree, University, Year } = req.body;

    let newUser = new userData({
      Degree: Degree,
      University: University,
      Year: Year,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});
// Project Details

app.post("/ProjectDetails", async (req, res) => {
  try {
    const { ProjectTitle, Description, GitHubLink } = req.body;

    let newUser = new userData({
      ProjectTitle: ProjectTitle,
      Description: Description,
      GitHubLink: GitHubLink,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});
//WorkSample
app.post("/workSample", async (req, res) => {
  try {
    const { WorkSample } = req.body;

    let newUser = new userData({
      WorkSample: WorkSample,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});
//Research Details

app.post("/ResearchDetails", async (req, res) => {
  try {
    const { ResearchTitle, Authors, PublicationDate } = req.body;

    let newUser = new userData({
      ResearchTitle: ResearchTitle,
      Authors: Authors,
      PublicationDate: PublicationDate,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});
//PresentationDetails
app.post("/PresentationDetails", async (req, res) => {
  try {
    const { PresentationTittle, Speaker, PresentationDate } = req.body;

    let newUser = new userData({
      PresentationTittle: PresentationTittle,
      Speaker: Speaker,
      PresentationDate: PresentationDate,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});
//Patent
app.post("/PatentDetails", async (req, res) => {
  try {
    const { Patent } = req.body;

    let newUser = new userData({
      Patent: Patent,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});
//Certification
app.post("/CertificationDetails", async (req, res) => {
  try {
    const { CertificationName, Organization, Date } = req.body;

    let newUser = new userData({
      CertificationName: CertificationName,
      Organization: Organization,
      Date: Date,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});

//Desired career Profile
app.post("/careerProfile", async (req, res) => {
  try {
    const {
      DesireIndustry,
      Preferedlocation,
      designation1,
      Expectedctcsalary,
      Desiredshift,
      Employmenttype,
    } = req.body;

    let newUser = new userData({
      DesireIndustry: DesireIndustry,
      Preferedlocation: Preferedlocation,
      designation1: designation1,
      Expectedctcsalary: Expectedctcsalary,
      Desiredshift: Desiredshift,
      Employmenttype: Employmenttype,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});

//Personal Details
app.post("/PersonalDetails", async (req, res) => {
  try {
    const { DateOfBirth, MaritalStatus, Age, Languages, Gender, Address } =
      req.body;

    let newUser = new userData({
      DateOfBirth: DateOfBirth,
      MaritalStatus: MaritalStatus,
      Age: Age,
      Languages: Languages,
      Gender: Gender,
      Address: Address,
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
