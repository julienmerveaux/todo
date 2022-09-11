const express = require("express")
const app = express()
const data = require("./bdd.js")

console.log(data)
app.use(express.static(__dirname + "/public"))
app.set("view engine","pug")
app.use(express.json())

let PORT = 3000

app.get("/",(req,res)=>{
    res.render("todoV2.pug", {data:data})

})

app.listen(PORT,()=>{
    console.log("CONNECTÉ")
})