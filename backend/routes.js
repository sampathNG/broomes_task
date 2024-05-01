const router = require("express").Router();
const User = require("./db/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
router.get("/", async (req, res) => {
  try {
    console.log("hello");
    res.send("Hello World");
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});
// Signup route
router.post("/signup", async (req, res) => {
  try {
    const { firstname, lastname, email, username, password } = req.body;
    const userr = await User.findOne({ email });
    if (userr) {
      return res.status(404).send("User with email already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = new User({
      firstname,
      lastname,
      email,
      username,
      password: hashedPassword,
    });
    await user.save();
    console.log(user);
    res.status(201).send("User created successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});
// Signin route
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send(`User with email ${email} not found`);
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).send("Invalid password");
    } else {
      // Generate JWT token
      const token = jwt.sign({ email: user.email }, "secret");
      const tokens = jwt.decode(token, "secret");
      console.log(tokens);
      res.status(200).send({ token });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});
router.post("/success", async (req, res) => {
  try {
    const { token } = req.body;
    const tokens = jwt.decode(token, "secret");
    const user = await User.findOne({ email: tokens.email });
    const username = user.username;
    console.log(username);
    res.status(200).send({ username });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
