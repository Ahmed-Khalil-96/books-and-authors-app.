import { Schema, model } from "mongoose";

const authorSchema = new Schema({

    name:{
        type:String,
        required:true
    },

    bio:String,

    birthDate:Date,

    books:{
        type:[Schema.Types.ObjectId],
        ref:"Book"
    }

},{

    timestamps:true
})

const authorModel=model("Author",authorSchema)
export default authorModel;