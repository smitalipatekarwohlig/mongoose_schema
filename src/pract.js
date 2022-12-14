const mongoose = require('mongoose');
const validator =require('validator');

//connection creation and connect with database or create a new database
mongoose.connect("mongodb://localhost:27017/customers").then(()=>console.log("Database created succcessfully...")).catch((err)=>console.log(err));

//Create a schema 
const name = new mongoose.Schema({
      name : {
        type :String,
        required : true
      },
      age: Number,
      location  : String,
      active : Boolean,
      mobileNo : Number,
      email: {
        type : String,
        required : true,
        validate(value){
          if(!validator.isEmail(value)){
            console.log("Invalid email");
          }
        }
      },
      date : {
        type : Date,
        default : Date.now
      }
});

//Create a collection
const Namelist = mongoose.model("Namelist",name);

//Creat a document or insert

const createDocument = async ()=>{
    try {
        // const add = new Namelist({
        //     name : "Aditya",
        //       age: 17,
        //       location  : "Badlapur",
        //       active : true,
        //       mobileNo : 288748764,
        //       email  : "aditya@gmail.com"
        // })

        // const add2 = new Namelist({
        //     name : "Omkar",
        //       age: 23,
        //       location  : "Pune",
        //       active : true,
        //       mobileNo : 123585,
        //       email : "omkar@gmail.com"
        // })

        // const add3 = new Namelist({
        //     name : "Amit",
        //       age: 30,
        //       location  : "Kalyan",
        //       active : true,
        //       mobileNo : 59873989,
        //       email : "amit@gmail.com"
        // })

        // const add4 = new Namelist({
        //     name : "Ravi",
        //       age: 24,
        //       location  : "Pune",
        //       active : true,
        //       mobileNo : 1235970,
        //       email : "ravi@gmail.com"
        // })

        // const add5 = new Namelist({
        //     name : "Siddhesh",
        //       age: 19,
        //       location  : "Kharghar",
        //       active : true,
        //       mobileNo : 7874323,
        //       email : "siddhesh@gmail.com"
        // })

        // const add6 = new Namelist({
        //       name : "Pratik",
        //         age: 25,
        //         location  : "Kalwa",
        //         active : true,
        //         mobileNo : 659637,
        //         email : "pratik@gmail.com"
        //   })

        const result = await Namelist.insertMany([add,add2,add3,add4,add5,add6]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

createDocument();

//Read the Document

const getDocument = async ()=>{
    const result = await Namelist.find({mobileNo : 7874323}).select({name :1});
    console.log(result);
}

getDocument();