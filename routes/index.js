const  express     = require("express");
const  router      = express.Router();
const  passport    = require("passport");
const  User        = require("../models/user");

//Root route 
router.get("/", function(req, res){
    res.render("landing");
});

//Authentication Route
router.get("/register",function(req,res){
    res.render("register");
});

//Handels sign up
router.post("/register",function(req,res){
    const  newUser = new User({username:req.body.username});
    User.register(newUser,req.body.password,function(err,user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req,res,function(){
            res.redirect("/campgrounds");
        })
    });
})

//Sign in route
router.get("/login",function(req,res){
    res.render("login");
});

//Handeling login
router.post("/login", passport.authenticate("local",
{
    successRedirect:"/campgrounds",
    failureRedirect:"/login"
}) ,function(req,res){
});

//logout
router.get("/logout",function(req,res){
    req.logout();
    res.redirect("/campgrounds");
});

//Middelware
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }else{
        res.redirect("/login")
    }
}

module.exports = router;