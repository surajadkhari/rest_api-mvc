
const EmployeeModule=require('../models/employee.model');//import module

//get all employee data Controller
exports.getEmployeelist= (req,res)=>{
        // console.log('get all employees list');
        EmployeeModule.getAll((err,data)=>{
             if(err){
                 res.send(err);
                 console.log('error while feactrhig data');
             }
             else{
                 res.send(data);
             }

        });
    }

    //get all employee data BY ID  controller
    exports.getEmployeeId= (req,res)=>{
        EmployeeModule.getbyID(req.params.id,(err,data)=>{
             if(err){
                 res.send(err);
                 console.log('error while feactrhig data');
             }
             else{
                 res.send(data);
             }

        });
    }
  

    //Create new data Controller
    exports.createNewData=(req,res)=>{
        const employeeReqData=new EmployeeModule(req.body); ///pass insite object
        //check for null and check lenfht 
        if(req.body.constructor===Object && Object.keys(req.body).length===0){
            res.send(400).send({success: false,message:'Please fill all data'}); //res  err ma 400 and object sucess and message banra send gareko
          }else{
           console.log('Valid data');
          EmployeeModule.createEmp(employeeReqData,(err,datain)=>{
          if(err)
              res.send(err);
              res.json({status: true ,message:'Employee is created ',data:datain});
          
        });

           }
    }
         
    //Update employee
    exports.updateEm=(req,res)=>{
        const employeeReqData=new EmployeeModule(req.body); ///pass insite object
        //check for null and check lenfht  
        if(req.body.constructor===Object && Object.keys(req.body).length===0){
            res.send(400).send({success: false,message:'Please fill all data'}); //res  err ma 400 and object sucess and message banra send gareko
          }else{
          EmployeeModule.UpdateEmp(req.params.id,employeeReqData,(err,employee)=>{
          if(err)
              res.send(err);
              res.json({status: true ,message:'Employee is updated Succesfully  ',data:employee});
          
        });

           }
    }


 
//delete 
// exports.DeleteEmployeeId= (req,res)=>{
//     EmployeeModule.deletebyID(req.params.id,(err,data)=>{
//          if(err){
//              res.send(err);
//              console.log('error while deleting data');
//          }
//          else{
//              res.send({sucess:'true',message:'Eployee deleted',value:data});
//          }

//     });
// }
exports.deleteEmployee=(req, res)=>{
    EmployeeModule.deleteEmp(req.params.id, (err, employee)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Employee deleted successully!'});
    })
}
