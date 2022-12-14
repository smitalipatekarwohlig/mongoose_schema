const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://localhost:27017/info').then(()=>{
    console.log('Database working...');
}).catch((err)=>{
    console.log(err);
})

const userSchema =new mongoose.Schema({
        name: {
            type :String,
            require : true,
            trim : true,
            // lowercase : true,
            // uppercase : true,
            minlength : [2, "minimum 2 letters in the string"],
            maxlength : [30, "maximum 30 letters in the string"]
        },
        position :{
            type: String,
            // enum : ['Front End Developer','Back End Developer','Database']
        },
        userId : Number,
        phoneNo : {
            type :Number,
            validate(value){
                if(value < 0){
                    throw new err ("can't accept negative values");
                }
            }
        },
        active : Boolean,
        date :{
            type : Date,
            default : Date.now
        },
        email : {
            type : String,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new err ("Invalid email");
                }
            }
        }
})

const User =mongoose.model('User',userSchema);

// const createDocument = async()=>{
//     try {
        // const customer = new User ({
        //     name: 'Samiksha',
        //     position : 'Back End Developer',
        //     userId : 1,
        //     phoneNo : 523762,
        //     active : true
        // })
    
        // const customer2 = new User ({
        //     name: 'Ashwini' ,
        //     position : 'Front End Developer',
        //     userId : 2,
        //     phoneNo : 982737,
        //     active : true
        // })
    
        // const customer3 = new User ({
        //     name: 'Sanika' ,
        //     position : 'Front End Developer',
        //     userId : 3,
        //     phoneNo : 878438,
        //     active : true
        // })
    
        // const customer4 = new User ({
        //     name: 'Shrutika' ,
        //     position : 'Database operator',
        //     userId : 4,
        //     phoneNo : 780376,
        //     active : true
        // })
    
        // const customer5 = new User ({
        //     name: 'Sakshi' ,
        //     position : 'Database operator',
        //     userId : 5,
        //     phoneNo : 310465,
        //     active : true
        // })

//         const result = await User.insertMany(customer,customer2,customer3,customer4,customer5);
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// createDocument();

// const getDocument = async()=>{
//     const result = await User.find({name : 'lmo'});
//     console.log(result);
// }

// getDocument();

//Comparison operator
//$nin 
// const getData = async()=>{
//     const result = await User.find({position : {$nin : ['Front End Developer','Database operator']}}).select({name:1,_id :0});
//     console.log(result);
// }

// getData();

//$or
// const getDocument = async()=>{
//     const result = await User.find({$or : [{position: 'Back End Developer'},{userId : 1}]});
//     console.log(result);
// }

// getDocument();

//$and
// const getDocument = async ()=>{
//     const result = await User.find({$and :[{position : 'Front End Developer'},{phoneNo : 310465}]});
//     console.log(result);
// }

// getDocument();

//$NOT



//$NOR
// const getDocument = async()=>{
//     const result = await User.find({$nor: [{position: 'Database operator'},{name : 'abc'}]});
//     console.log(result);
// }

// getDocument();

//To count the number of documents
// const getDocument = async()=>{
//     const result = await User.find({$and : [{name : 'def'},{userId : 5}]}).countDocuments();
//     console.log(result);
// }

// getDocument();

//sort in ascending and descending
// sort in ascending ==>  1
//sort in descending ==>  -1
// const getDocument = async ()=>{
//     const result = await User.find({name : 'Sakshi'}).select({name: 1}).sort({name :1});
//     console.log(result);
// }

// getDocument();

//Update Document
// const updateDocument = async(_id)=>{
//     try {
//         const result = await User.updateOne({_id},{name : 'Smitali'});
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }
// updateDocument("63997796d13f984306b474cd");

//update document by findByIDAndUpdate
// const updateDocument = async(_id)=>{
//     try {
//         const result = await User.findByIdAndUpdate({_id},{$set : {userId : 6}});
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }

// updateDocument("63997796d13f984306b474cd");

//delete the document by deleteOne
// const deleteDocument = async(_id)=>{
//     try {
//         const result = await User.deleteOne({_id});
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }

// deleteDocument("63997796d13f984306b474cd");

//delete the document  by findByIdAndDelete
// const deleteDocument = async(_id)=>{
//     const result = await User.findByIdAndDelete({_id});
//     console.log(result);
// }

// deleteDocument("63998d85e7ff33218b3dc630");

//Validation using mongoose
//Built-in validation

//for lowercase
// const createDocument = async()=>{
//         try {
//             const customer2 = new User ({
//                     name: 'Ashwini',
//                     position : 'Back End Developer',
//                     userId : 2,
//                     phoneNo : 982737,
//                     active : true
//                 })

//                 const result = await User.insertMany(customer2);
//                 console.log(result);
//         } catch (err) {
//             console.log(err);
//         }
// }

// createDocument();

// for uppercase
// const createDocument = async()=>{
//             try {
//                 const customer6 = new User ({
//                         name: 'Bhakti',
//                         position : 'Back End Developer',
//                         userId : 6,
//                         phoneNo : 7846308,
//                         active : true
//                     })
    
//                     const result = await User.insertMany(customer6);
//                     console.log(result);
//             } catch (err) {
//                 console.log(err);
//             }
//     }
    
//     createDocument();

//trim
// const createDocument = async()=>{
//     try {
//         const customer7 = new User ({
//                 name: '   Swarupa  ',
//                 position : 'Database Developer',
//                 userId : 7,
//                 phoneNo : 795411,
//                 active : true
//             })

//             const result = await User.insertMany(customer7);
//             console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }

// createDocument();

//for enum
//it checks wheather the value is in the given array or not
// const createDocument = async()=>{
//     try {
//         const customer8 = new User ({
//                 name: 'Tanaya',
//                 position : 'Front End Developer',
//                 userId : 8,
//                 phoneNo : 470675,
//                 active : true
//             })

//             const result = await User.insertMany(["Database Developer"]);
//             console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }

// createDocument();