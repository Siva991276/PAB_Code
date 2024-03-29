const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const middleware = require("./Middlware");
const userData = require("./Model/userData");
const BrowseData = require("./Model/browswedata");
const ApplyNow = require("./Model/ApplyNow");
const SaveJobsNow = require("./Model/SaveJobs");
// const changepassword = require("./Model/ChangePassword");
const RecruitersData = require("./Model/RecruitersData");
const PostAJobData = require("./Model/PostaJob");

const bodyParser = require("body-parser");

const app = express();
const port = 4005;

const mogoURL =
  "mongodb+srv://badasiva22:Siva991276@cluster0.iis7lrd.mongodb.net/ResumeDetails?retryWrites=true&w=majority";

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

//initalizing mongodb to node
mongoose
  .connect(mogoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log(e.message));

app.get("/", (req, res) => {
  res.send("Welcome to developer hubs server");
});

// Register API
// app.post("/register", middleware, async (req, res) => {
//   try {
//     const { fullname, radioSection, State, Currentlocation, mobile, emailE1 } =
//       req.body;
//     //checking user whether it is exits or not
//     const isUserExist = await userData.findOne({ emailE1: emailE1 });

//     if (isUserExist) {
//       return res.send("User Already Registered");
//     } else {
//       //generating encrypted password for user
//       let newUser = new userData({
//         fullname,
//         radioSection: radioSection,
//         State,
//         Currentlocation,
//         mobile,
//         emailE1,
//       });

//       newUser.save(); //saving mongodb collections
//       return res.send("user Created Successfully");
//     }
//   } catch (e) {
//     console.log(e.message);
//     res.send("Inernal server error");
//   }
// });

app.post("/register", middleware, async (req, res) => {
  console.log(req.body);
  // res.send("hello db")
  try {
    const user = await userData.findOne({ emailE1: req.body.emailE1 }); // mongo db condition
    // console.log(user)
    if (!user) {
      // or if(user === undefined)
      // user not found excutes below code
      const newUser = {
        fullname: req.body.fullname,
        radioSection: req.body.radioSection,
        State: req.body.State,
        Currentlocation: req.body.Currentlocation,
        mobile: req.body.mobile,
        emailE1: req.body.emailE1,
      };
      const userDetails = await userData.create(newUser); //  POSTING TO COLLECTION OR MODEL
      console.log(userDetails);

      res.status(200).send("user created successfully");
    } else {
      // if user mail id is founded send below response
      res.status(400).json("user already registered");
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json("message: e.message");
  }
});

//Registration Details
app.post("/RegistrationDetails", async (req, res) => {
  console.log(req.body);
  // res.send("hello db")
  try {
    const user = await userData.findOne({ email: req.body.email }); // mongo db condition
    // console.log(user)
    if (!user) {
      // or if(user === undefined)
      // user not found excutes below code
      const newUser = {
        Typesection: req.body.Typesection,
        name: req.body.name,
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        password: req.body.password,
        originalPassword: req.body.originalPassword,
      };
      const userDetails = await userData.create(newUser); //  POSTING TO COLLECTION OR MODEL
      console.log(userDetails);

      res.status(200).send("user created successfully");
    } else {
      // if user mail id is founded send below response
      res.status(400).json("user already registered");
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json("message: e.message");
  }
});

//Registration Details
app.post("/Recruitersjobposting1", async (req, res) => {
  console.log(req.body);
  // res.send("hello db")
  try {
    const user = await PostAJobData.findOne({ email: req.body.email }); // mongo db condition
    // console.log(user)
    if (!user) {
      const {
        Typesection,
        name,
        email,
        contactNumber,
        password,
        originalPassword,
        jobtitle,
        positionavailable,
        jobtype,
        jobexperience,
        maxsalaryperannum,
        techinicalskill,
        region,
        joblocation,
        jobdeadling,
        youreducation,
        jobdiscriptionA1,
      } = req.body;
      // or if(user === undefined)
      // user not found excutes below code
      // const Rejobposting = {
      //   Typesection: req.body.Typesection,
      //   name: req.body.name,
      //   email: req.body.email,
      //   contactNumber: req.body.contactNumber,
      //   password: req.body.password,
      //   originalPassword: req.body.originalPassword,
      // };
      let Rejobposting = new PostAJobData({
        Typesection,
        name,
        email,
        contactNumber,
        password,
        originalPassword,
        jobtitle,
        positionavailable,
        jobtype,
        jobexperience,
        maxsalaryperannum,
        techinicalskill,
        region,
        joblocation,
        jobdeadling,
        youreducation,
        jobdiscriptionA1,
      });

      Rejobposting.save();
      //  POSTING TO COLLECTION OR MODEL
      console.log(Rejobposting);

      res.status(200).send("user created successfully");
    } else {
      // if user mail id is founded send below response
      res.status(400).json("user already registered");
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json("message: e.message");
  }
});

//Get All Recruiters Data
app.get("/allRecruitersData", middleware, async (req, res) => {
  const allRecruitersData = await RecruitersData.find({});
  return res.json(allRecruitersData);
});
//login
// app.post("/login", async (req, res) => {
//   const { email, password} = req.body;
//   const isUserExist = await userData.findOne({ email });

//   if (isUserExist) {
//     const isPasswordMatched = await bcrypt.compare(
//       password,
//       isUserExist.password
//     ); //compare two password
//     if (isPasswordMatched) {
//       let payload = {
//         user: isUserExist.id,
//       };
//       jwt.sign(
//         payload,
//         "jwtpassword",
//         { expiresIn: 360000000 },
//         (err, token) => {
//           if (err) throw err;
//           return res.json({ token }); // this token generated by jwt
//         }
//       );
//     } else {
//       return res.send("password not matched");
//     }
//   } else {
//     res.send("User Not Found");
//   }
// });
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // const isUserExist = await userData.findOne({ email, password });

  // if (isUserExist) {
  //   if (password === isUserExist.password) {
  //     let payload = {
  //       user: isUserExist.id,
  //     };
  //     jwt.sign(
  //       payload,
  //       "jwtpassword",
  //       { expiresIn: 36000000 },
  //       (err, token) => {
  //         if (err) throw err;
  //         return res.json({ token });
  //       }
  //     );
  //   } else {
  //     return res.send("password not matched");
  //   }
  // }
  try {
    const user = await userData.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Email not found" });
    }
    if (password !== user.password) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    const payload = {
      user: user.id,
    };
    jwt.sign(payload, "jwtpassword", { expiresIn: 36000000 }, (err, token) => {
      if (err) {
        throw err;
      }

      res.json({ token });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred on the server. Please try again later.",
    });
  }
});
//Recruiters Login Page
app.post("/loginRecruiters", async (req, res) => {
  const { email, password } = req.body;

  // const isUserExist = await userData.findOne({ email, password });

  // if (isUserExist) {
  //   if (password === isUserExist.password) {
  //     let payload = {
  //       user: isUserExist.id,
  //     };
  //     jwt.sign(
  //       payload,
  //       "jwtpassword",
  //       { expiresIn: 36000000 },
  //       (err, token) => {
  //         if (err) throw err;
  //         return res.json({ token });
  //       }
  //     );
  //   } else {
  //     return res.send("password not matched");
  //   }
  // }
  try {
    const user = await RecruitersData.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Email not found" });
    }
    if (password !== user.password) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    const payload = {
      user: user.id,
    };
    jwt.sign(payload, "jwtpassword", { expiresIn: 36000000 }, (err, token) => {
      if (err) {
        throw err;
      }

      res.json({ token });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred on the server. Please try again later.",
    });
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
//code
//Applynow button
// app.post("/ApplyNow", middleware, async (req, res) => {
//   try {
//     const {
//       companynameE2,
//       contactnumberE2,
//       emailE2,
//       stateE2,
//       countryE2,
//       experienceE2,
//       salaryE2,
//       roleE2,
//       no_of_applicationsE2,
//       ImageE2,
//     } = req.body;
//     let newUser1 = new ApplyNow({
//       companynameE2: companynameE2,
//       contactnumberE2: contactnumberE2,
//       emailE2: emailE2,
//       stateE2: stateE2,
//       countryE2: countryE2,
//       experienceE2: experienceE2,
//       salaryE2: salaryE2,
//       roleE2: roleE2,
//       no_of_applicationsE2: no_of_applicationsE2,
//       ImageE2: ImageE2,
//     });

//     const isUserExist = await ApplyNow.findOne({ emailE2: emailE2 });
//     if (isUserExist) {
//       return res.send("user already registered");
//     }

//     newUser1.save(); //saving to mongodb collections
//     res.send("user created succesfully");
//   } catch (e) {
//     console.log(e.message);
//     res.send("internal server error");
//   }
// });
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

    // Check if the user with the same email already exists in your database
    const isUserExist = await ApplyNow.findOne({ emailE2: emailE2 });
    if (isUserExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    // If the user doesn't exist, create a new user
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

    newUser1.save(); // Save the new user to your MongoDB collection

    res.status(201).json({ message: "User created successfully" });
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: "Internal server error" });
  }
});
//SaveJobData
// app.post("/SaveJobsNow", middleware, async (req, res) => {
//   try {
//     const {
//       companynameE2,
//       contactnumberE2,
//       emailE2,
//       stateE2,
//       countryE2,
//       experienceE2,
//       salaryE2,
//       roleE2,
//       no_of_applicationsE2,
//       ImageE2,
//     } = req.body;
//     let newUser2 = new SaveJobsNow({
//       companynameE2: companynameE2,
//       contactnumberE2: contactnumberE2,
//       emailE2: emailE2,
//       stateE2: stateE2,
//       countryE2: countryE2,
//       experienceE2: experienceE2,
//       salaryE2: salaryE2,
//       roleE2: roleE2,
//       no_of_applicationsE2: no_of_applicationsE2,
//       ImageE2: ImageE2,
//     });

//     const isUserExist = await SaveJobsNow.findOne({ emailE2: emailE2 });
//     if (isUserExist) {
//       return res.send("user already registered");
//     }

//     newUser2.save(); //saving to mongodb collections
//     res.send("user created succesfully");
//   } catch (e) {
//     console.log(e.message);
//     res.send("internal server error");
//   }
// });

app.post("/SaveJobsNow", middleware, async (req, res) => {
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

    // Check if the user with the same email already exists in your database
    const isUserExist = await SaveJobsNow.findOne({ emailE2: emailE2 });
    if (isUserExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    // If the user doesn't exist, create a new user
    let newUser2 = new SaveJobsNow({
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

    newUser2.save(); // Save the new user to your MongoDB collection

    res.status(201).json({ message: "User created successfully" });
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/allusers", async (req, res) => {
  const allusers = await BrowseData.find({});
  res.status(200).send(allusers);
});

app.get("/ApplyNowData", middleware, async (req, res) => {
  const Apply = await ApplyNow.find({});
  res.status(200).send(Apply);
});

app.get("/SaveJobData", middleware, async (req, res) => {
  const Apply = await SaveJobsNow.find({});
  res.status(200).send(Apply);
});
//change Password
// app.post("/api/changePassword", (req, res) => {
//   const { oldPassword, newPassword } = req.body;
//   if (newPassword === userData.password) {
//     res.status(400).json("New passwords do not match");
//     return;
//   } else if (oldPassword !== userData.password) {
//     userData.password = newPassword;
//     res.status(200).json("Password changed successfully");
//   } else {
//     res.status(401).json("Old password is incorrect");
//   }
//   console.log(oldPassword);
//   console.log(newPassword);
// });
// app.post("/api/changePassword", (req, res) => {
//   const { oldPassword, newPassword } = req.body;

//   // Check if the old password is correct
//   if (oldPassword !== userData.password) {
//     return res.status(401).json({ message: "Old password is incorrect" });
//   }

//   // Check if the new password is the same as the old password
//   if (newPassword === oldPassword) {
//     return res.status(400).json({ message: "New password can't be the same as the old password" });
//   }

//   // Update the password only if old password is correct
//   userData.password = newPassword;
//   return res.status(200).json({ message: "Password changed successfully" });
// });

// app.post("/api/changePassword", (req, res) => {
//   const { oldPassword, newPassword } = req.body;

//   // Check if the old password is correct
//   if (oldPassword === userData.password) {
//     return res.status(401).json({ message: "Old password is incorrect" });
//   }

//   // Check if the new password is the same as the old password
//   if (newPassword !== oldPassword) {
//     return res.status(400).json({ message: "New password can't be the same as the old password" });
//   }

//   // Update the password only if old password is correct
//   userData.password = newPassword;
//   return res.status(200).json({ message: "Password changed successfully" });
// });
// app.post("/api/changePassword", (req, res) => {
//   const { oldPassword, newPassword } = req.body;
//   if (oldPassword !== userData.password) {
//     return res.status(401).json({ message: "Old password is incorrect" });
//   }
//    if (newPassword === oldPassword) {
//     return res.status(400).json({ message: "New password can't be the same as the old password" });
//   }
//    userData.password = newPassword;
//   return res.status(200).json({ message: "Password changed successfully" });
// });

app.post("/api/changePassword", async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  try {
    if (oldPassword !== userData.password) {
      return res.status(401).json({ message: "Old password is incorrect" });
    }
    if (newPassword === oldPassword) {
      return res.status(400).json({
        message: "New password can't be the same as the old password",
      });
    }
    userData.password = newPassword;
    await userData.save();

    return res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
////////////////////////Recruiters backend Data//////////////////////////

// app.post("/Recruitersjobposting", middleware, async (req, res) => {
//   try {
//     const {
//       jobtitle,
//       positionavailable,
//       jobtype,
//       jobexperience,
//       maxsalaryperannum,
//       techinicalskill,
//       region,
//       joblocation,
//       jobdeadling,
//       youreducation,
//       jobdiscriptionA1,
//     } = req.body;

//     let Rejobposting = new PostAJobData({
//       jobtitle,
//       positionavailable,
//       jobtype,
//       jobexperience,
//       maxsalaryperannum,
//       techinicalskill,
//       region,
//       joblocation,
//       jobdeadling,
//       youreducation,
//       jobdiscriptionA1,
//     });

//     Rejobposting.save(); //saving mongodb collections
//     return res.send("user Created Successfully");
//   } catch (e) {
//     console.log(e.message);
//     res.send("Inernal server error");
//   }
// });

app.get("/PostData", middleware, async (req, res) => {
  const Apply = await PostAJobData.find({});
  res.status(200).send(Apply);
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
