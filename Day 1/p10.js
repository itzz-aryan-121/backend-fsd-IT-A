const fs = require('fs');




const write = ()=>{
    const data  = "Hello, ji";
    fs.writeFileSync("./newFolder/data.txt",data);

}



console.log("I am before writing");
write();
console.log("I am after writing");

