const express = require("express");
const app = express();
const PORT = 5000;

app.use("/about",(req, res, next) => {
    console.log("Check Sebelum Masuk Routing About");
    next();
})

app.get("/", (req,res) => {
    res.json({
        "id" : 1,
        "name" : "Home",
        "alamat" : "Kebakdemang RT04/RW07",
        "list_code" : ['P0001','P0002','P0003','P0004']
    })
})

app.get("/about", (req,res) => {
    res.json({
        "id" : 2,
        "name" : "Febrian"
    });
})

app.get("/profile", (req,res) => {
    if (Object.keys(req.query).length !== 0){
        res.json({
            "id" : req.query.id,
            "name" : req.query.name
        })
    }else {
        res.json({
            "id" : '',
            "name" : ''
        })
    }
})

app.listen(PORT,() => {
    console.log(`Server run on port ${PORT}`)
});