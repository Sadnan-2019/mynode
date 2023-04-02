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
     console.log("query", req.query)
     
     if(req.query.name){
          const search = req.query.name.toLocaleLowerCase();
          const matched = users.filter(user=> user.name.toLocaleLowerCase().includes(search));
          res.send(matched)
     }else{
          res.send(users)
     }
  
})
app.get("/user/:id", (req, res) => {
     console.log(req.params)
     const id =  parseInt(req.params.id);
     const user = users.find(u=>u.id === id)

     res.send(user)
})

app.post("/user", (req, res) =>{
     console.log("request",req.body)
     const user = req.body;
     user.id = users.length + 1;
     users.push(user)
     res.send(user)
     console.log(user);

})
app.listen(port, () => {
  console.log(`my first  app listening on port ${port}`)
})