const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test");
const port = 3001;
const bcrypt = require("bcrypt");
const saltRounds = 10;

const User = mongoose.model("User", {
  fullname: String,
  username: String,
  password: String,
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
});
app.post("/register", (req, res) => {
  const { fullname, username, password } = req.body;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    const newUser = new User({ name: fullname,username:username,password:hash});
    newUser.save().then(() => console.log("new user created"));
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
