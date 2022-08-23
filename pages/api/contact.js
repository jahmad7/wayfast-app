/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mailgun = require("mailgun-js");

export default async (req, res) => {
  const body = req.body;
  const { company, email, name, phone, product, text } = body;
  const products = product.join(",");
  let message = `${name} at company ${company} requested a Quote for products : ${products}, ${
    text && `text: ${text}`
  }. their email is ${email} | their phone number is ${phone}`;
  const mg = mailgun({
    apiKey: "9ee6d852c11c8d98abe99bd69ee8a9ca-915161b7-32a02f88",
    domain: "mgx.atgpharma.com",
  });

  const clientData = {
    from: "WAYFAST <postmaster@mgx.atgpharma.com>",
    to: "aria@gowayfast.com",
    subject: "New WayFast Request Received",
    text: message,
  };

  const sendEmailToClient = await sendEmailToSixPak(mg, clientData);

  if (sendEmailToClient) {
    res.statusCode = 200;
    res.end();
  } else {
    res.statusCode = 400;
    res.end();
  }
};

const sendEmailToSixPak = (mg, data) => {
  return new Promise((resolve, _) => {
    mg.messages().send(data, function (error, body) {
      if (error) {
        console.log("error sending mail", error);
        resolve(false);
      } else {
        console.log("Email successfully send to 6Pak");
        resolve(true);
      }
    });
  });
};
