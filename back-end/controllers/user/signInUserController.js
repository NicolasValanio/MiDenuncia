const modeloUser = require("../../models").user;
const bcrypt = require("bcrypt");

exports.signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await modeloUser.findOne({
      where: { email: email },
    });

    // If the user does not exist, return an error
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare the password with the hash in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If the password does not match, return an error
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // If the email and password match, return a success message and the user object
    return res
      .status(200)
      .json({ message: "Successfully signed in", user: user });
  } catch (error) {
    next(error);
   
  }
};
