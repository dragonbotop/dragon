const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.render('Projects/index',{
       recentworks:'These are some of my recent works ',
       

    });
});

module.exports = router