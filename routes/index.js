var express = require('express');
var router = express.Router();
const messages = require('../public/javascripts/messages');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {messages: messages});
});

router.post('/new', (req,res,next) => {
  console.log(req.body);
  const newMessage = {
    title: req.body.title,
    description: req.body.description,
    user: req.body.username,
    added: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
  }
  messages.unshift(newMessage);
  res.redirect('/');
})

module.exports = router;
