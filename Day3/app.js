import express from 'express'



const app = express()

const users =[]


app.use(express.json()) 



app.get('/api', (req, res) => {
    res.json(users)
})

app.post('/api2', (req, res) => {
    const data = req.body;
    const newid = users.length>0 ? users[users.length-1].id+1 : 1;
    data.id = newid;
    users.push(data);
    res.json({message: "data received successfully", data:data})
    
})


app.listen(7001,()=>{
    console.log('Server is running on port 7001')
})

