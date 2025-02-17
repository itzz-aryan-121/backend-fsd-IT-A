const fs = require('fs');

fs.unlink("./data.txt",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File deleted successfully");
    }
});

console.log("I am before deleting");
console.log("I am after deleting");
