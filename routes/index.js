var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about',{bond1:'I am famous for owning the most advanced and expensive cars such as Aston Martin. Being able to drive at any terrain is also my speciality.',
bond2:'Dodging all the bullets and staying alive is a skill. I have mastered the skill. Moving and Running can be done in a stealthy manner. So i dont have to worry about noises.',
bond3:'Being an expert in handling weapons always favoured me. I can shoot any target with high accuracy and precision.',
bond4:'In addition being able to blend in any character also helps with investigation as i can work in any disguise and being super helpfull as a spy.',
bond5:'You can count on me at all the times. I am also an experienced firearms specialiat. I own all the fastest Aston Martins out there.'
});
});

router.get ('/', function(req,res,next) {
  res.render('index',{title:'Welcome to the Project Tracker'});
});


module.exports = router;
