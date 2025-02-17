const fs  = require('fs');

const append = ()=>{
    const data = "\n Hello, I am appending to a file ";
    fs.appendFile("./data.txt",data,(err)=>{
        if(err) 
            console.log(err);
         else console.log("Data appended successfully");
        
    });
}

console.log("I am before appending");
append();
console.log("I am after appending");