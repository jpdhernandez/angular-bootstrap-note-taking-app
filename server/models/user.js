const _ = require('lodash');
const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const Promise = require("bluebird");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const UserSchema = new Schema({ 
  id: 1, 
  email: "",
  username: "",
  name: "",
  bio: "",
  twitter_handle: "",
  site: "" 
});


const User = mongoose.model("users", UserSchema);

module.exports = {
  get: function(id) {
    return _.find(users, function(user) {
      return user.id === id;
    });
  },
  all: function() {
    return users;
  }, User
}