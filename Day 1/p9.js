const fs = require('fs');

// create a file in new folder


const write = ()=>{
    const data = "Hello, I am writing to a file ";
    fs.writeFile("./newFolder/data.txt",data,(err)=>{
        if(err) 
            console.log(err);
         else console.log("Data written successfully");
        
    });
};

console.log("I am before writing");
write();
