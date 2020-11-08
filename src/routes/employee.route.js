
const express=require('express');//import express

const router=express.Router(); //import router


const employeeController=require('../controllers/employee.controller.js');//Import Comtroller
 
router.get('/', employeeController.getEmployeelist);//get all employee from controller
router.get('/:id', employeeController.getEmployeeId);// get by ID from controller
router.post('/',employeeController.createNewData); //create new data
router.put('/:id',employeeController.updateEm);//update data
router.delete('/:id',employeeController.deleteEmployee); //delete

module.exports=router;