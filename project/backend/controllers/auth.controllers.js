import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';

export const signUp = async (req, res) => {
  const { name, username, email, password } = req.body;

    if(!name || !username || !email || !password){
        return res.status(400).json({message: "All fields are required"});
    }

    // check if user already exists
    const existingUserEmail = await User.findOne({ email });
    if (existingUserEmail) {
      return res.status(400).json({ message: "User already exists" });
    }
    const existingUserName = await User.findOne({ username });
    if (existingUserName) {
      return res.status(400).json({ message: "Username already taken" });
    }
    if(password.length < 6){
      return res.status(400).json({message: "Password must be at least 6 characters"});
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.create({name, username, email, password: hashedPassword})
    res.status(201).json({message: "User created successfully"});

}

