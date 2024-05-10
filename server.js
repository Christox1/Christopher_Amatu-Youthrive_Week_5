const express = require("express");
const dotenv = require("dotenv").config();
const index = require("./index");

const app = express();
const PORT = process.env.PORT || 6000;


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

app.get("/", index.usersData);

app.post("/post", index.postData)