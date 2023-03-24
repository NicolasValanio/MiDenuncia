const modeloUser = require("../../models").user;

exports.querySignInAll = async (req, res, next) => {
    try {
        const { email, password } = req.body;
    
        const user = await modeloUser.findOne({ where: { email } });
        if (!user) {
        // Check if the user already exists in db
        return res.status(400).json({ error: "User not found" });
        }
    
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
        return res.status(400).json({ error: "Password is incorrect" });
        }
    
        // const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        // expiresIn: 60 * 60 * 24,
        // });
    
        // return res.status(200).json({ token });
    } catch (error) {
        next(error);
    }
    

}
