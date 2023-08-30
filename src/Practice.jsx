import React from "react";
import { useState } from "react";
import "./Practice.css"

function PracticeSection() {
  const studentDetails = [
    {
      id: "1",
      Name: "Siva koteswara Rao",
      CollegeName: "Universal College of Engineering And Technologies",
      RollNo: "19NFA0301",
      Address: "Guntur",
      CollegeImage:
        "https://images.collegedunia.com/public/college_data/images/appImage/28864_UNIVERSAL_APP.jpg",
    },
    {
      id: "2",
      Name: "Ravi Kumar",
      CollegeName: "chalapati engineering college",
      RollNo: "18NF785R2",
      Address: "Vijayawada",
      CollegeImage:
        "https://content.jdmagicbox.com/comp/guntur/p9/9999px863.x863.090610183331.f8p9/catalogue/chalapathi-institute-of-technology-mothadaka-guntur-engineering-colleges-tvevkir59c.jpg?clr=",
    },
    {
      id: "3",
      Name: "Kishore",
      CollegeName: "Vignan's Lara Institute of Technology & Science",
      RollNo: "18JH8D214",
      Address: "tenali",
      CollegeImage:
        "https://media.getmyuni.com/azure/college-image/big/vignans-lara-institute-of-technology-science-guntur.jpg",
    },
    {
      id: "4",
      Name: "Sai Krishna",
      CollegeName: "VVIT Guntur",
      RollNo: "17NH850308",
      Address: "Guntur",
      CollegeImage:
        "https://timess3spore.s3.amazonaws.com/ndata/media/Counsellor/CollegeImage/2023/04/03/1680506268.jpg",
    },
    {
      id: "5",
      Name: "Bhavana",
      CollegeName: "KKR AND KSR Institute Of Technology And Sciences",
      RollNo: "14Nh2A0308",
      Address: "Visakhapatnam",
      CollegeImage: "https://www.addressguru.in/images/840767996.jpg",
    },
    {
        id: "6",
        Name: "Mounika Devi",
        CollegeName: "Kallam Haranadhareddy Institute of Technology",
        RollNo: "15UF5F0305",
        Address: "Kadapa",
        CollegeImage: "https://images.shiksha.com/mediadata/images/1588244870phpanyulN.jpeg",
      },
  ];
  const [display, setdisplay] = useState("");

  const handleBlogClick = (blog) => {
    setdisplay(blog);
  };
  console.log(display);
  console.log(studentDetails.length);

  return (
    <div className="container">
        <div className="row">
        <h1>Student Details</h1>
            <div className="col-12 col-md-5">
                
            <div className=" ">

                {studentDetails.map((blog)=>
               <div className="card mb-4 cardcontainer1">
                <h1 className="nameh1">{blog.Name}</h1>
                <h4 className="text-start mx-2 roll1">{blog.RollNo}</h4>
                <h4 className="text-start mx-2 roll1">{blog.CollegeName}</h4>
                <h4 className="text-start mx-2 roll1">{blog.Address}</h4>
               </div>
                )}
               
            </div>
           

            </div>

        </div>

    </div>
  )
}
export default PracticeSection;

// import React, { useState } from 'react';
//  const PracticeSection = () => {
//   const dummyBlogs = [
//     {
//       id: 1,
//       title: 'Graphic Desingner ',
//       heading:'Job Description',
//       button:'download',
//       para:'Angel Broking',
//       content: 'Full time hyderabad/secundrabad,telangana fresher.',
//       income:'4.5-6 LPA',
//       image_url:'https://techcrunch.com/wp-content/uploads/2012/04/microsoft-logo.jpg',
//       para1:'Posted: Few Hours Ago Openings:1Job Application:580',
//       para2:'Openings:1Job',
//       para3:'Application:580',
//       description:'Illustrating concepts by designing examples of art arrangement, size, type size, and style and submitting them for approvalor product illustrations, company logos, social media Banners, artwork, and websites with software such as Photoshop.  Creating new graphics for social media, Email Marketing, Brochures, Labels & Stickers for products, Catalogues, etc., using Adobe tools like Photoshop, illustration, and InDesign Coordinating with Artworks, web designer, marketing, printers, and colleagues as necessary. Contributing to team efforts by accomplishing tasks as needed  iewing final layouts and suggesting improvements when necessary.'

//     },
//     {
//       id: 2,
//       title: 'Desingner ',
//       heading:'Job Description',
//       button:'download',
//       para:'Wipro',
//       content: 'Full time hyderabad/secundrabad,telangana fresher.',
//       income:'4.5-6 LPA',
//       image_url:'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg',
//       para1:'Posted: Few Hours Ago Openings:1Job Application:580',
//       para2:'Openings:1Job',
//       para3:'Application:580',
//       description:'Illustrating concepts by designing examples of art arrangement, size, type size, and style and submitting them for approvalor product illustrations, company logos, social media Banners, artwork, and websites with software such as Photoshop.  Creating new graphics for social media, Email Marketing, Brochures, Labels & Stickers for products, Catalogues, etc., using Adobe tools like Photoshop, illustration, and InDesign Coordinating with Artworks, web designer, marketing, printers, and colleagues as necessary. Contributing to team efforts by accomplishing tasks as needed  iewing final layouts and suggesting improvements when necessary.'
//     },
//     {
//       id: 3,
//       title: 'Developer IMB',
//       para:'IBM',
//       button:'download',
//       heading:'Job Description',
//       content: 'Full time\n hyderabad/secundrabad,telangana\n fresher.',
//       income:'4.5-6 LPA',
//       image_url:'https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1',
//       para1:'Posted: Few Hours Ago Openings:1Job Application:580',
//       para2:'Openings:1Job',
//       para3:'Application:580',
//       description:'Illustrating concepts by designing examples of art arrangement, size, type size, and style and submitting them for approvalor product illustrations, company logos, social media Banners, artwork, and websites with software such as Photoshop.  Creating new graphics for social media, Email Marketing, Brochures, Labels & Stickers for products, Catalogues, etc., using Adobe tools like Photoshop, illustration, and InDesign Coordinating with Artworks, web designer, marketing, printers, and colleagues as necessary. Contributing to team efforts by accomplishing tasks as needed  iewing final layouts and suggesting improvements when necessary.'
//     },
//     {
//       id: 4,
//       title: 'web Desingner  ',
//       para:'pab solutions',
//       heading:'Job Description',
//       button:'download',
//       content: 'Full time hyderabad/secundrabad,telangana fresher.',
//       income:'4.5-6 LPA',
//       image_url:'https://techcrunch.com/wp-content/uploads/2012/04/microsoft-logo.jpg',
//       para1:'Posted: Few Hours Ago Openings:1Job Application:580',
//       para2:'Openings:1Job',
//       para3:'Application:580',
//       description:'Illustrating concepts by designing examples of art arrangement, size, type size, and style and submitting them for approvalor product illustrations, company logos, social media Banners, artwork, and websites with software such as Photoshop.  Creating new graphics for social media, Email Marketing, Brochures, Labels & Stickers for products, Catalogues, etc., using Adobe tools like Photoshop, illustration, and InDesign Coordinating with Artworks, web designer, marketing, printers, and colleagues as necessary. Contributing to team efforts by accomplishing tasks as needed  iewing final layouts and suggesting improvements when necessary.'
//     },
//     {
//       id: 5,
//       title: 'Digital marketing  ',
//       para:'pab solutions',
//       button:'download',
//       heading:'Job Description',
//       content: 'Full time hyderabad/secundrabad,telangana fresher.',
//       income:'4.5-6 LPA',
//       image_url:'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg',
//       para1:'Posted: Few Hours Ago Openings:1Job Application:580',
//       para2:'Openings:1Job',
//       para3:'Application:580',
//       description:'Illustrating concepts by designing examples of art arrangement, size, type size, and style and submitting them for approvalor product illustrations, company logos, social media Banners, artwork, and websites with software such as Photoshop.  Creating new graphics for social media, Email Marketing, Brochures, Labels & Stickers for products, Catalogues, etc., using Adobe tools like Photoshop, illustration, and InDesign Coordinating with Artworks, web designer, marketing, printers, and colleagues as necessary. Contributing to team efforts by accomplishing tasks as needed  iewing final layouts and suggesting improvements when necessary.'
//     },
//     {
//       id: 6,
//       title: 'web Designer',
//       button:'download',
//       para:'SRT solutions',
//       heading:'Job Description',
//       content: 'Full time hyderabad/secundrabad,telangana fresher.',
//       income:'4.5-6 LPA',
//       image_url:'https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1',
//       para1:'Posted: Few Hours Ago Openings:1Job Application:580',
//       para2:'Openings:1Job',
//       para3:'Application:580',
//       description:'Illustrating concepts by designing examples of art arrangement, size, type size, and style and submitting them for approvalor product illustrations, company logos, social media Banners, artwork, and websites with software such as Photoshop.  Creating new graphics for social media, Email Marketing, Brochures, Labels & Stickers for products, Catalogues, etc., using Adobe tools like Photoshop, illustration, and InDesign Coordinating with Artworks, web designer, marketing, printers, and colleagues as necessary. Contributing to team efforts by accomplishing tasks as needed  iewing final layouts and suggesting improvements when necessary.'
//     },
//     {
//       id: 7,
//       title: 'web Designer',
//       button:'download',
//       para:'SRT solutions',
//       heading:'Job Description',
//       content: 'Full time hyderabad/secundrabad,telangana fresher.',
//       income:'4.5-6 LPA',
//       image_url:'https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1',
//       para1:'Posted: Few Hours Ago Openings:1Job Application:580',
//       para2:'Openings:1Job',
//       para3:'Application:580',
//       description:'Illustrating concepts by designing examples of art arrangement, size, type size, and style and submitting them for approvalor product illustrations, company logos, social media Banners, artwork, and websites with software such as Photoshop.  Creating new graphics for social media, Email Marketing, Brochures, Labels & Stickers for products, Catalogues, etc., using Adobe tools like Photoshop, illustration, and InDesign Coordinating with Artworks, web designer, marketing, printers, and colleagues as necessary. Contributing to team efforts by accomplishing tasks as needed  iewing final layouts and suggesting improvements when necessary.'
//     },
//       ];

//   const [visibleBlogId, setVisibleBlogId] = useState(null);
//   // Function to handle the onClick event and toggle the visibility of blog content
//   const handleBlogClick = (blog) => {
//     setVisibleBlogId(blog);
//   };

//   console.log(visibleBlogId);
//   console.log(dummyBlogs.length)

//   return (
//     <div className='container'>
//       <div className='row'>
//         <div className='col-12 text-center'>
//             <h1>Browse Jobs</h1>
//         </div>
//         <ul className='col-12 col-md-4 '>
//           {dummyBlogs.map((blog)=>
//           <div className="d-flex flex-row justify-content-between card mb-3 p-2 shadow"
//             onClick={((e)=>handleBlogClick(blog))}>
//             <div>
//             <h4>{blog.title}</h4>
//             <p>{blog.para}</p>
//             <p>{blog.content}</p>
//             </div>
//             <h4>{blog.income}</h4>
//           </div>)}
//         </ul>
//         <div className='col-md-8 card '>
         
//         </div>
//       </div>
//     </div>
//   );
// };
// export default PracticeSection;
