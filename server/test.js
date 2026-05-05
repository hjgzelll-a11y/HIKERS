require("./db");

const User = require("./models/User");

const testUser = new User({
  name: "Hazel",
  email: "hazel@test.com",
  password: "123456"
});

testUser.save()
  .then(() => console.log("User saved!"))
  .catch(err => console.log(err));