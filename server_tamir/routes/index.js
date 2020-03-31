const path = require('path');
const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

function getReactApp(req, res){
	const options = { root: './'}
	console.log(options.root);
	return res.sendFile('./build/index.html', options);  

}





router.get('/home', ensureAuthenticated, getReactApp)
//res.sendFile('../tamir_app/build/index.html', {
	
  
// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);
module.exports = router; 