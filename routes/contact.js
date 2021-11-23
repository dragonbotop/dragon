const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.render('contact',{bond7:'You can count on me at all the times. I am also an experienced firearms specialiat. I own all the fastest Aston Martins out there.'});
});

module.exports = router