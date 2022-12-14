const mongoose = require("mongoose");
const { Schema } = mongoose;

//Connection creation and creating a database
mongoose.connect("mongodb://localhost:27017/list", { useNewUrlParser: true }).then(() => console.log("Connection successfull..")).catch((err) => console.log(err));

//Schema
//mongoose schema defines the structure of the document,default values,validators,etc.
const playlistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        trim: true
    },
    cType: {
        type: String,
        enum: ["Front End", "Back End", "Database"]
    },
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

//model
//mongoose model is the wrapper on the mongoose schema
//it provides an interface to the database for creating, quering,updatinng,deleting,etc.

//Collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema)

//Create document or insert

const createDocument = async () => {
    try {
        // const nodeJsPlaylist = new Playlist({
        //     name : "Node Js",
        //      cType : "Back End",
        //      active : true
        // })

        // const JsPlaylist = new Playlist({
        //     name : "Javascript",
        //      cType : "Front End",
        //      active : true
        // })

        const mongoDbPlaylist = new Playlist({
            name: "MongoDB",
            cType: "Database",
            active: true
        })

        // const mongooseJsPlaylist = new Playlist({
        //     name : "     MoNgoosee Js   ",
        //      cType : "Database",
        //      active : true
        // })

        // const expressJsPlaylist = new Playlist({
        //     name : "Express Js",
        //      cType : "Back End",
        //      active : true
        // })

        const result = await Playlist.insertMany([mongoDbPlaylist]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

createDocument();

//To read the document

const getDocument = async () => {
    const result = await Playlist.find({ cType: "Back End" }).select({ name: 1 });
    console.log(result);
}

// getDocument();