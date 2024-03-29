import  jwt  from 'jsonwebtoken';





export const requireSignin =  (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    var decoded = jwt.decode(token, {complete: true});
console.log(decoded.header);
console.log(decoded.payload);
  } else {
    return res.status(400).json({ message: "Authorization required" });
  }
  next();
  //jwt.decode()
};

export const userMiddleware = (req, res, next) => {
  if (req.user.role !== "user") {
    return res.status(400).json({ message: "User access denied" });
  }
  next();
};

export const adminMiddleware = (req, res, next) => {
  
    if (req.user.role !== "admin") {
      return res.status(400).json({ message: "Admin access denied" });
    
  }
  next();
};

