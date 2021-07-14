'user strict';
var dbConn = require('../../config/db.config');

//user object create
var user = function(user){
    this.first_name     = user.first_name;
    this.last_name      = user.last_name;
    this.email          = user.email;
    this.phone          = user.phone;
    this.is_admin       = user.is_admin;
    this.default_address= user.default_address;
    this.status         = user.status ? user.status : 1;
    this.created_at     = new Date();
    this.updated_at     = new Date();
};
user.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO users set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
user.findById = function (id, result) {
    dbConn.query("Select * from users where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
user.findAll = function (result) {
    dbConn.query("Select * from users", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('users : ', res);  
            result(null, res);
        }
    });   
};
user.update = function(id, user, result){
  dbConn.query("UPDATE users SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [user.first_name,user.last_name,user.email,user.phone,user.organization,user.designation,user.salary, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
user.delete = function(id, result){
     dbConn.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= user;