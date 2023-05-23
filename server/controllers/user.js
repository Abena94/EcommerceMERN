import User from '../models/user.js'
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import shortid from "shortid"; 

const generateJwtToken = (_id, role) => {
    return jwt.sign({ _id, role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
  };

  export const signin = async (req, res) => {
    const user=await User.findOne({ email: req.body.email })
      if (!user) return res.status(404).json({ message:'not registred' });
      if (user) {
        const isPassword = await user.authenticate(req.body.password);
        if (isPassword ) {
        
          const token = generateJwtToken(user._id, user.role);
          const { _id, firstName, lastName, email, role, fullName } = user;
          res.cookie("token", token, { expiresIn: "1d" });
          res.status(200).json({
            token,
            user: { _id, firstName, lastName, email, role, fullName },
          });
        } else {
          return res.status(400).json({
            message: "Password Incorrect",
          });
        }
      } else {
        return res.status(400).json({ message: "Something went wrong" });
      }
    
  };
  export const signupAdmin = async (req, res) => {
    const user= await User.findOne({ email: req.body.email });
    if (user){
      return res.status(400).json({
        message: "Admin already registered",
      })};
      const { firstName, lastName, email, password } = req.body;
     /* try {
    
        const hashedPassword = await bcrypt.hash(password, 12);
    
        const result = await User.create({ firstName,lastName,email, password: hashedPassword, role:"admin" });
    
        const token = generateJwtToken(user._id, user.role);
    
        res.status(201).json({ result, token });
      } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        
        console.log(error);
      }*/
      const hash_password = await bcrypt.hash(password, 10);
      const _user = new User({
        firstName,
        lastName,
        email,
        hash_password,
        role:"admin",
      });

      _user.save((error, user) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }

        if (user) {
            const token = generateJwtToken(user._id, user.role);
            const { _id, firstName, lastName, email, role, fullName } = user;
            res.cookie("token", token, { expiresIn: "1d" });
            return res.status(201).json({
              token,
              user: { _id, firstName, lastName, email, role, fullName },
            });
        }
      });
    
    }
    export const signup = async (req, res) => {
        const existingUser= await User.findOne({ email: req.body.email });
        if (existingUser){
          return res.json({
            error: "User already registered",
          });
        }
    
        const { firstName, lastName, email, password } = req.body;
        const hash_password = await bcrypt.hash(password, 10);
        const user = new User({
          firstName,
          lastName,
          email,
          hash_password,
        
        });
    
        user.save((error, user) => {
          if (error) {
            return res.status(400).json({
              message: "Something went wrong",
            });
          }
    
          if (user) {
            const token = generateJwtToken(user._id, user.role);
            const { _id, firstName, lastName, email, role, fullName } = user;
            res.cookie("token", token, { expiresIn: "1d" });
            return res.status(201).json({
              token,
              user: { _id, firstName, lastName, email, role, fullName },
            });
          }
        });
    }
    export const signout = (req, res) => {
      res.clearCookie("token");
      res.status(200).json({
        message: "Signout successfully...!",
      });
    };

    export const getUsers=async(req,res)=>{
      try {
        const users=await User.find({role:"user"});
        if(!users){
          res.status(404).json({message:"theres no users"});
        } 
        res.status(200).json(users);
      } catch (error) {
        res.status(400).json({message:error.message});
        
      }
    }
    
