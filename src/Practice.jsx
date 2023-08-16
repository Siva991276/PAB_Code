// app.post("/register", async (req, res) => {
//     try {
//       const { fullname, email, mobile, skills, password, confirmpassword } =
//         req.body;
//       //checking user whether it is exits or not
//       const isUserExist = await userData.findOne({ email: email });
  
//       if (isUserExist) {
//         return res.send("User Already Registered");
//       }
//       if (password !== confirmpassword) {
//         return res.send("password not matched");
//       } else {
//         const hashedPassword = await bcrypt.hash(password, 10); //generating encrypted password for user
//         let newUser = new userData({
//           fullname,
//           email,
//           mobile,
//           skills,
//           password: hashedPassword,
//           confirmpassword: hashedPassword,
//         });
  
//         newUser.save(); //saving mongodb collections
//         return res.send("user Created Successfully");
//       }
//     } catch (e) {
//       console.log(e.message);
//       res.send("Inernal server error");
//     }
//   });