const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello myWorld!')
})

const users = [
     {id:1,name:"kalam",email:"kalam@gmail.com"},
     {id:2,name:"abulkalam",email:"kalam@gmail.com"},
     {id:3,name:"rohimkalam",email:"kalam@gmail.com"},
     {id:4,name:"bajekalam",email:"kalam@gmail.com"},
]
app.get("/users",(req,res) =>{
     res.send(users)
})
app.get("/user/:id", (req, res) => {
     console.log(req.params)
     const id =  parseInt(req.params.id);
     const user = users.find(u=>u.id === id)

     res.send(user)
})

app.post("/user", (req, res) =>{
     console.log("request",req.body)
     res.send("post request success")

})
app.listen(port, () => {
  console.log(`my first  app listening on port ${port}`)
})