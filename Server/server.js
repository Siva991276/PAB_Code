const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const middleware = require("./Middlware");
const userData = require("./Model/userData");
const BrowseData = require("./Model/browswedata");
const ApplyNow = require("./Model/ApplyNow");

 
 
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
app.post("/register", middleware, async (req, res) => {
  try {
    const { fullname, radioSection, State, Currentlocation, mobile, emailE1 } =
      req.body;
    //checking user whether it is exits or not
    const isUserExist = await userData.findOne({ emailE1: emailE1 });

    if (isUserExist) {
      return res.send("User Already Registered");
    } else {
      //generating encrypted password for user
      let newUser = new userData({
        fullname,
        radioSection: radioSection,
        State,
        Currentlocation,
        mobile,
        emailE1,
      });

      

      newUser.save(); //saving mongodb collections
      return res.send("user Created Successfully");
    }
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});

//Registration Details
app.post("/RegistrationDetails", async (req, res) => {
  try {
    const {
      Typesection,
      name,
      email,
      contactNumber,
      password,
      originalPassword,
    } = req.body;
    const isUserExist = await userData.findOne({ email: email });
    if (isUserExist) {
      return res.send("User Already Registered");
    }
    if (password !== originalPassword) {
      return res.send("password not matched");
    }
    const Hashedpassword = await bcrypt.hash(password, 10);
    let newUser = new userData({
      Typesection,
      name,
      email,
      contactNumber,
      password: Hashedpassword,
      originalPassword: Hashedpassword,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});
//login
app.post("/login", async (req, res) => {
  const { email: email, password: password } = req.body;
  const isUserExist = await userData.findOne({ email });

  if (isUserExist) {
    const isPasswordMatched = await bcrypt.compare(
      password,
      isUserExist.password
    ); //compare two password
    if (isPasswordMatched) {
      let payload = {
        user: isUserExist.id,
      };
      jwt.sign(
        payload,
        "jwtpassword",
        { expiresIn: 360000000 },
        (err, token) => {
          if (err) throw err;
          return res.json({ token }); // this token generated by jwt
        }
      );
    } else {
      return res.send("password not matched");
    }
  } else {
    res.send("User Not Found");
  }
});

// get all developers data
app.get("/alldevelopers", middleware, async (req, res) => {
  const alldevelopers = await userData.find({});

  return res.json(alldevelopers);
});

//resume heading post
app.post("/resumeheding1", middleware, async (req, res) => {
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
app.post("/profileSummaryDetails", middleware, async (req, res) => {
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
app.post("/keySkills", middleware, async (req, res) => {
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
app.post("/EmploymentDetails", middleware, async (req, res) => {
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
app.post("/EducationDetails", middleware, async (req, res) => {
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

app.post("/ProjectDetails", middleware, async (req, res) => {
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
app.post("/workSample", middleware, async (req, res) => {
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

app.post("/ResearchDetails", middleware, async (req, res) => {
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
app.post("/PresentationDetails", middleware, async (req, res) => {
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
app.post("/PatentDetails", middleware, async (req, res) => {
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
app.post("/CertificationDetails", middleware, async (req, res) => {
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
app.post("/careerProfile", middleware, async (req, res) => {
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
app.post("/PersonalDetails", middleware, async (req, res) => {
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

//browse job api
app.post("/browsejobs123", middleware, async (req, res) => {
  try {
    const {
      companynameE2,
      contactnumberE2,
      emailE2,
      descriptionE2,
      stateE2,
      countryE2,
      experienceE2,
      salaryE2,
      roleE2,
      no_of_applicationsE2,
      ImageE2,
    } = req.body;
    let newUser1 = new BrowseData({
      companynameE2: companynameE2,
      contactnumberE2: contactnumberE2,
      emailE2: emailE2,
      descriptionE2: descriptionE2,
      stateE2: stateE2,
      countryE2: countryE2,
      experienceE2: experienceE2,
      salaryE2: salaryE2,
      roleE2: roleE2,

      no_of_applicationsE2: no_of_applicationsE2,
      ImageE2: ImageE2,
    });

    const isUserExist = await BrowseData.findOne({ emailE2: emailE2 });
    if (isUserExist) {
      return res.send("user already registered");
    }

    newUser1.save(); //saving to mongodb collections
    res.send("user created succesfully");
  } catch (e) {
    console.log(e.message);
    res.send("internal server error");
  }
});
//Applynow button
app.post("/ApplyNow", async (req, res) => {
  try {
    const {
      companynameE2,
      contactnumberE2,
      emailE2,
      stateE2,
      countryE2,
      experienceE2,
      salaryE2,
      roleE2,
      no_of_applicationsE2,
      ImageE2,
    } = req.body;
    let newUser1 = new ApplyNow({
      companynameE2: companynameE2,
      contactnumberE2: contactnumberE2,
      emailE2: emailE2,
      stateE2: stateE2,
      countryE2: countryE2,
      experienceE2: experienceE2,
      salaryE2: salaryE2,
      roleE2: roleE2,
      no_of_applicationsE2: no_of_applicationsE2,
      ImageE2: ImageE2,
    });

    const isUserExist = await ApplyNow.findOne({ emailE2: emailE2 });
    if (isUserExist) {
      return res.send("user already registered");
    }

    newUser1.save(); //saving to mongodb collections
    res.send("user created succesfully");
  } catch (e) {
    console.log(e.message);
    res.send("internal server error");
  }
});

app.get("/allusers", async (req, res) => {
  const allusers = await BrowseData.find({});
  res.status(200).send(allusers);
});


app.get("/ApplyNowData", async (req, res) => {
  const Apply = await ApplyNow.find({});
  res.status(200).send(Apply);
});



app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
