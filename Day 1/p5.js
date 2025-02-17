const fs = require('fs');

const write = ()=>{
    const data = "Hello, I am writing to a file using Node.js";
    fs.writeFileSync("./data.txt",data);
};

console.log("I am before writing");
write();
console.log("I am after writing");