import { check,validationResult } from "express-validator"
export const validationSingUpRequest =[
    check("firstName").notEmpty().withMessage("first Name is required"),
    check("lastName").notEmpty().withMessage("last Name is required"),
    check("email").isEmail().withMessage("Valid email is required"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("password must be at least 6 characters"),
  ]

  export const isRequestValidated=(req,res)=>{
      const errors=validationResult(req);
      if (errors.array().length>0){
          return res.status(400).json({error:errors.array()});
      }
  }
  export const validationSingInRequest =[
    check("email").isEmail().withMessage("Valid email is required"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("password must be at least 6 characters"),
  ]