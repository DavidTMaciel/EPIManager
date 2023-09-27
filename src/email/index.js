import 'dotenv/config';
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {

      user: process.env.API_EMAIL,
      pass: process.env.API_PASSWORD
    }
  });

export const sendEmailNewUser = async (userEmail, userName) =>{

    
       
        const info = await transporter.sendMail({
          from: '"EPIManager 👻" <davidmacieljr@hotmail.com>', 
          to: `${userEmail}`, 
          subject: "Create User ✔", 
          text: `Welcome ${userName}, user created successfully`,
          html: "<b>Hello</b>", 
        }).then(()=>{
            console.log("Email send success");
        }).catch((err)=>{
            console.log(err);
        })
};

export const sendEmailPassword = async (userEmail, userName) =>{

    
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"EPIManager 👻" <davidmacieljr@hotmail.com>', // sender address
    to: `${userEmail}`, // list of receivers
    subject: "Reset your password✔", // Subject line
    text: `Hi ${userName}, Below is the link to reset your password`, // plain text body
    html: "<a href='http://localhost:3000/update-user/:id'>Hello</a>", // html body
  }).then(()=>{
      console.log("Email send success");
  }).catch((err)=>{
      console.log(err);
  })
};
