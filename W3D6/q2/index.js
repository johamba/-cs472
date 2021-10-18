const express =require('express')
const path=require('path');
const app =express();
app.use(express.urlencoded({extended: false}));
//set the view engin to ejs 
app.set('view engine','ejs')
app.set('views',path.join(__dirname, "view"));

app.get('/',(req,res)=>{
 res.render('index')

});

app.post('/result',(req,res)=>{
     let name=req.body.name;
     let age =req.body.age;
     if(!name){
         name= "person";
     }if(!age){
         age = "unknown";

     }
     res.render('result',{
         name:name,
         age:age
     })

})


app.use('/css',express.static(path.join(__dirname,'css')));

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{console.log(`server is running at ${PORT}`)});