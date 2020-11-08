var dbConnect=require('../../dbconfig/db.config');

//fecth record from database 
//object banako db ko schema kolagi

var Employee=function(employee){ 
 this.first_name = employee.first_name,
 this.last_name = employee. last_name,
 this.sex = employee.sex,
 this.salary= employee.salary

};

//get all employee Module
Employee.getAll=(result)=>{
    dbConnect.query('SELECT *FROM EMPLOYEE',(err,res)=>{
        if(err) {
         console.log('Error while fecthing employee data');
         result(null,err);
         }
         else{
             console.log('Employees Fetched successfully');
             result(null,res);
         }
    });
};

//Get employee by ID Module
Employee.getbyID = (id, result)=>{
    dbConnect.query('SELECT * FROM EMPLOYEE WHERE emp_id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching employee by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

//create new ployee employeeReqData is send from controller and send para is send whoch we will return
Employee.createEmp = (employeeReqData, result) =>{
    dbConnect.query('INSERT INTO employee SET ? ', employeeReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Employee created successfully');
            result(null, res)
        }
    })
}
    

//update employee
Employee.UpdateEmp=(id,employeeReqData,result)=>{
    dbConnect.query("Update employee SET first_name=?,last_name=?,sex=?,salary=? where emp_id=?",
    [employeeReqData.first_name,employeeReqData.last_name,employeeReqData.sex,employeeReqData.salary,id],(err,res)=>{
        if(err){
            console.log('Error while updating data');
            result(null, err);
        }else{
            console.log('Employee updated successfully');
            result(null, res)
        }
    });

}


//delete model
Employee.deleteEmp = (id, result)=>{
    dbConnect.query('DELETE FROM employee WHERE emp_id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the employee');
            result(null, err);
        }else{
            result(null, res);
        }

    });
}

module.exports=Employee;