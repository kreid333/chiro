const nodemailer = require("nodemailer");
const router = require("express").Router();
const db = require("../models");

router.post("/api/sendMail", (req, res) => {
  console.log(req.body);
  const output = `
      <div class="main" style="width: 65%; margin: 0 auto; background-color: white; text-align: center; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
      <h1>Thank you for contacting us</h1>
      <h3>Hi ${req.body.name},</h3>
      <p>We have received your contact form submission and will be getting back to you within the next 48 hours.</p>
      <div style="background-color: rgb(245, 245, 245); padding: 20px;">
        <ul style="padding: 0px;">
          <li style="list-style: none; margin: 15px;">Name: ${req.body.name}</li>
          <li style="list-style: none; margin: 15px;">Email Address: ${req.body.email}</li>
          <li style="list-style: none; margin: 15px;">Phone Number: ${req.body.phoneNumber}</li>
          <li style="list-style: none; margin: 15px;">Message: ${req.body.message}</li>
        </ul>
      </div>
      </div>
    `;

  const sendMail = async () => {
    try {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "money1890@hotmail.com", // generated ethereal user
          pass: "Lil'rei23!", // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Kai Reid" <money1890@hotmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject:
          "Thank you for contacting Liberty County Clinic of Chiropractic", // Subject line
        // text: "Hello world?", // plain text body
        html: output, // html body
      });

      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      res.end();
    } catch (err) {
      console.log(err);
    }
  };
  sendMail();
});

router.post("/api/sendReview", (req, res) => {
  console.log(req.body);
  db.Review.create(req.body)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

router.get("/api/getReviews", (req, res) => {
  db.Review.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

module.exports = router;
