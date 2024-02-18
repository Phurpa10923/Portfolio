
const express=require('express');
const bodyParser = require('body-parser');
const app=express();
const bcrypt = require('bcrypt');

var admin = require("firebase-admin");
var Port=process.env.PORT||5000;
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://portfolio-website-285a9-default-rtdb.firebaseio.com"
});

app.use(bodyParser.json())
app.use(express.static(__dirname))
app.use(express.urlencoded({extended:true}))
app.engine('html', require('ejs').renderFile);


app.get('/',(req,res)=>{
 
  res.render('index.html');
  admin.database().ref('MyWorks/Websites').set({});
})
app.get('/admin',(req,res)=>{
  res.render('admin.html');
})
app.post('/newproject',(req,res)=>{
  var hash;  
  try{
    const start=async function(){
      const {username,password}=req.body;
      hash= await admin.database().ref('User').once('value');
      
      if(username==hash.child('/username').val()){
        if(await bcrypt.compare(password,hash.child('/password').val())){
         
          admin.database().ref('User/MyWorks/'+req.body.skill+"/"+req.body.projectname).set({
            link:req.body.link,
            desc:req.body.projectdesc,
            imglink:null
          
          })
         res.status(200).send();
        }
        else{
           res.status(401).send({msg:'Password is wrong'})        
        }
      }
      else{
        res.status(401).send({msg:'Username is wrong'})
        }
    }
    start();
  }
  catch(error){
    console.log(error)
  }
})

app.get('/myworksdata',(req,res)=>{
 admin.database().ref('User/MyWorks/').once('value',(snapshot)=>{
   res.status(200).send(snapshot);
 });
})


app.listen(Port,console.log('Server Running in '+Port));
