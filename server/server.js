var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var cors = require("cors");
const creds = require("./config");

var transport = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/contact", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;

  var mail = {
    from: email,
    to: creds.EMAIL,
    subject: "New Message from Contact Form",
    text: `${name}\n\n${message}`,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });

      transporter.sendMail(
        {
          from: creds.MYEMAIL,
          to: email,
          subject: "Submission was successful",
          text: `Hello ${name}.\n\nThank you for contacting Me.\nThis an automated email, but I will get back with you soon.\n\n\nPhillip.`,
        },
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Message sent: " + info.response);
          }
        }
      );
    }
  });
});

const PORT = process.env.PORT || 3001;

const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(express.static(path.join(__dirname, '../client/build')), router);

app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}...`);
});