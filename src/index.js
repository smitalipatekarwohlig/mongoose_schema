const mongoose = require("mongoose");
const {Schema} = mongoose;

mongoose.connect("mongodb://localhost:2017/reference").then(()=>console.log("Database Working...")).catch((err)=>console.log(err));

const studentSchema = new mongoose.Schema({
        name :{
            type : string,
            required : true
        },
        rollNo : Number,
        active : Boolean,
        email  : String,
        date : {
            type : Date,
            default : Date.now
        }
})

const subjectSchema = new mongoose.Schema({
        name : String,
        student : {
            type: mongoose.Schema.Types.ObjectId,
            ref : "studentList"
        }
})

const Subject = new mongoose.model("Subject",subjectSchema);

const createDocument = async ()=>{
    try {
        const student1 = new Student ({
            name : "abc",
            rollNo : 1,
            active : true,
            email  : "student1@gmail.com"
        })

        const student2 = new Student ({
            name : "xyz",
            rollNo : 2,
            active : true,
            email  : "student2@gmail.com"
        })

        const student3 = new Student ({
            name : "pqr",
            rollNo : 3,
            active : true,
            email  : "student3@gmail.com"
        })

        const student4 = new Student ({
            name : "lmn",
            rollNo : 4,
            active : true,
            email  : "student4@gmail.com"
        })

        const student5 = new Student ({
            name : "def",
            rollNo : 5,
            active : true,
            email  : "student5@gmail.com"
        })

        const result = await Student.insertMany([student1,student2,student3,student4,student5]);
        console.log(result);

    } catch (err) {
        console.log(err);
    }
}

createDocument();
