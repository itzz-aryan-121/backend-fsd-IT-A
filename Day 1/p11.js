const fs = require('fs');

fs.rmdir("./newFolder",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Folder deleted successfully");
    }
}); 

console.log("I am before deleting folder");

console.log("I am after deleting folder");