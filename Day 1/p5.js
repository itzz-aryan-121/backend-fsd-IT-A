const fs = require('fs');

const write = ()=>{
    const data = "Hello, I am writing to a file ";
    fs.writeFile("./data.txt",data,(err)=>{
        if(err) 
            console.log(err);
         else console.log("Data written successfully");
        
    });
};

console.log("I am before writing");
write();
console.log("I am after writing");