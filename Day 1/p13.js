const fs = require('fs/promises');


const write = async() => {
    const data = "I am new Data"
    fs.writeFile("./data.txt",data,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("File created successfully");
        }
    });


}


write()

