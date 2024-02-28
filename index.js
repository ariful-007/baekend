const express = require('express')
const app = express()
const port = 8000

app.get("/",(req, res)=>{
  res.send("hello world!")
})

app.get("/home",(req, res)=>{
  res.send("this is my home")
})

app.get("/about",(req, res)=>{
  res.send("this is my about")
})

// post request
app.post("/simple-post",(req, res)=>{
  res.send("this is my simple post")
})

// put request

app.put("/simple-put",(req, res)=>{
  res.send("this is my simple put")
})

// delete request

app.delete("/simple-delete",(req, res)=>{
  res.send("this is my simple delete")
})


app.listen(port, () => {
  console.log(`Server is Running ${port}`)
})
