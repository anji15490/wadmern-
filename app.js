console.log("file is running");
const express = require("express");
const app = express();
app.get('/',(req , res)=> {
    res.send("Home page");
});
app.get('/about',(req , res)=> {
    res.send("About page");
});
app.get('/contact',(req , res)=> {
    res.send("contact page");
});
app.listen(3000, () => {
    console.log("server started on port 3000")
})