const path = require('path');
const fs = require('fs');
const rootdir = require('../utils/pathutil');
const { error } = require('console');


module.exports = class Developer{
  constructor(username){
    this.username = username;
  }

  save(){
    Developer.fetchall(devdata=>{
    devdata.push(this);
    const savepath = path.join(rootdir,'data','data.json');
    fs.writeFile(savepath,JSON.stringify(devdata),error=>console.log("File write is concluded",error));
    })
    
  }

  static fetchall(callback){
    const savepath = path.join(process.cwd(),'data','data.json');
    fs.readFile(savepath,(error,data)=>{
      if(!error){
        callback(JSON.parse(data)) ;
      } else{
        callback([]);
      } 
    }); 
  }
}
