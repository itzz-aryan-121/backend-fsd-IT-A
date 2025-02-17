const fs = require('fs');

fs.mkdir("./newFolder",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Folder created successfully");
    }
})  

console.log("I am before creating folder");

console.log("I am after creating folder");

