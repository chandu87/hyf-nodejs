import express from 'express'
const app = express();
import path from 'path';


app.get("/", function(req, res){
    res.sendFile(path.join(__dirname+'/views/index.html'));
});
app.get("/contacts", function(req, res){
    res.send([32,32,3,54,33]);
});
app.post("/contacts", function(req, res){
    res.redirect("/contacts");
})
app.listen(3000, function(){
    console.log("Server started at Port : 3000");
});