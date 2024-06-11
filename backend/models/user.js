const mongoose = require("mongoose");
const joi = require("joi");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 100,
  },
  email: {
    type: String,
    required: true,
    min: 5,
    max: 100,
  },
});

const validateUser = (user) => {
  const schema = joi.object({
    name: joi.string().min(5).max(100).required(),
    email: joi.string().min(5).max(255).required().email(),
    password: joi.string().min(8).max(100).required(),
  });
  return schema.validate(user);
};

module.exports = {
  User: mongoose.model("user", userSchema),
  validateUser,
};
