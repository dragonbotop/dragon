const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.render('Projects/index',{
       recentworks:'These are some of my recent works ',
       notime:'One of my favourite projects where i was surrounded by bullets and enemies, i was able to dodge all the bullets and was able to sucessfully deactivate the bomb.',
       square:'A fight inside a submarine is always dangerous ,In this project i was able to defeat the russians that stole the submarine that contained a nuclear weapon that could destroy the entire USA.',
       space:'Such a funny mission, finding out that the Japaneese making advanced spacecraft that captured the American and Russian Rockets and destroying theier entire base and rescuing the pilots was such a painfull task.',
       pinpoint:'I still remember the time when the USSR spy challenging me in a gunfight. Guess who died!',
       milk:'The Mexican drug dealers always have an intelligent way of smuggling coke. I still remember the 9 milk containers that i destroyed which contained the coke.',
       nut:'There are lot of ninjas in China too but no one can see me coming, I wasnt able to count the ninjas that was hospitalized.',
       secret:'This was really a top secret mission so i cant really speak about it.',
       faze:'Who ever tried to kill me only died. Same with this mission too.'

    });
});

module.exports = router