const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Botly = require("botly");
const botly = new Botly({
	accessToken: process.env.PAGE_ACCESS_TOKEN,
	notificationType: Botly.CONST.REGULAR,
	FB_URL: "https://graph.facebook.com/v2.6/",
});
app.get("/", function(_req, res) {
	res.sendStatus(200);
});
/* ----- ESSENTIALS ----- */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* ----- MAGIC ----- */
app.post('/webhook', (req, res) => {
 // console.log(req.body)
  if (req.body.message) {
    onMessage(req.body.message.sender.id, req.body.message);
  } else if (req.body.postback) {
    onPostBack(req.body.postback.message.sender.id, req.body.postback.message, req.body.postback.postback);
  }
  res.sendStatus(200);
});

/* ----- HANDELS ----- */

const onMessage = async (senderId, message) => {};
/* ----- POSTBACK ----- */

const onPostBack = async (senderId, message, postback) => {};
/* ----- HANDELS ----- */
app.listen(3000, () => console.log(`App is on port : 3000`));
