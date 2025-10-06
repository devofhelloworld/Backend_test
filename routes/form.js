const express = require('express');
const form = express.Router();
const home = require('../controllers/home');

form.get('/form',(req,res)=>{
  res.render("form",{pagetitle: 'Developer form'});
})

form.post('/form',home.savedata);

exports.form = form;

