const registration = require("./registration");
const users = require("./users");

const usersData = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (students.length > 0) {
    res.status(200).json(registration);
  } else {
    res.status(404).json({
      message: "Registeration not found",
    });
  }
};

const postData = async (req, res) => {
  const {firstName, lastName, email, gender} = req.body;
  if(!firstName || !lastName|| !email || !gender) {
    res.status(400).json({
      message: "Please complete fields",
    });
  }
  users.push({firstName, lastName, email, gender});
  return res.status(200).json({message: "Registration successful!", users})
};

module.exports = {
  usersData,postData
};