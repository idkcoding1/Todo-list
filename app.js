const express = require("express");
const bodyparser = require("body-parser");
const date= require(__dirname+"/date.js");

// to get the desired value date() is used


const app = express();
app.set('view engine','ejs');

const items= ["Buy Food","Cook Food","Eat"];

const workitems=[];
const studyitems=[];  

app.use(bodyparser.urlencoded({extended: true}))
app.use(express.static("public"));

//call back function
// *** DISPLAY DAY ON TOP ***//

app.get("/", function(req,res){

   const day=date.getday();
   
   res.render("lists",{  ListTitle:day, newlistitem:items,
});
});

//*** DISPLAY DATE ON TOP***//

// app.get("/", function(req,res){

//     const day=date.getdate();
    
//     res.render("lists",{  ListTitle:day, newlistitem:items,
//  });
//  });

app.post("/",function(req,res){

   const item = req.body.newitem;
   
   if(req.body.lists === "work"){
        workitems.push(item);
        res.redirect("/work");

    }
else if(req.body.lists === "study"){
    studyitems.push(item);
    res.redirect("/study");
 
}
else{
    items.push(item);
    res.redirect("/");
    
}
});

//List Title is placed in Lists.ejs file at the name where List is written so whenever we want to make new list(file)
// We will use List Title as a Variable and place value in it 
app.get("/work",function(req,res){
    res.render("lists",{ ListTitle:"Work List", newlistitem:workitems
    });

});

app.get("/study",function(req,res){
    res.render("lists",{ ListTitle:"Study List", newlistitem: studyitems});
});
app.get("/about",function(req,res){
    res.render("about");
})
app.listen(3000,function(){
    console.log("Server started at port 3000");
});