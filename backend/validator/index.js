exports.signup_validator=(req,res,next)=>{
    
    req.check("name","name is required").notEmpty();
    req.check("email","email must be between 6 to 32 charectors")
    .matches(/.+\@.+\..+/).withMessage("email must containes @").isLength({
        min:6,
        max:32
    })
    req.check("password","password is required").notEmpty();
    req.check("password")
    .isLength({min:6})
    .withMessage("password must contian at leasst 6 charectors")
    .matches(/\d/)
    .withMessage("password must contains digit");
    const error=req.validationErrors();
    if(error){
        const firstError=error.map(err=>err.msg)[0];
        return res.status(400).json({error:firstError});
    }
    next();
}