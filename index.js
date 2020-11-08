
const express=require('express'); //import express
const bodyParser=require('body-parser');//import Bodyparser
const app=express();//create  express app

const port =process.env.PORT || 5000;//set up server port


//parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended:false}));


//parse request data content type application/Json
app.use(bodyParser.json());


const employeeRoutes=require('./src/routes/employee.route');//import Employee routes

app.use('/employee',employeeRoutes);//create employee routes












//listen
app.listen(port,(err)=>{
    if(err) throw err;
    else console.log(`Express server is running at port ${port}`);

});

// Direct Method 
// app.listen('5000',(err)=>{
// //     if(err) throw console.log('Error in port'+err);
// //     else console.log('Server is running at port 5000');

// // });