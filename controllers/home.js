const Developer = require("../models/devs");

exports.savedata = (req,res)=>{
  console.log(req.body);
  const dev = new Developer(req.body.username);
  dev.save();
  res.render('success',{pagetitle: 'Success'});
};

exports.showdev = (req,res)=>{  
  const devdata = Developer.fetchall(devdata =>{
    res.render('home',{devdata:devdata , pagetitle: 'Home'});
  });
  
}


