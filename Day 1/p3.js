const fs = require('fs');

const data  = "Hello, I am writing to a file using Node.js";

fs.writeFileSync("./data.txt",data);


