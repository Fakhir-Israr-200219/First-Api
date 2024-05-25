const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required : [ true , "plz add the contact name"],
    },
    email:{
        type:String,
        required : [ true , "plz add the email Address"],
    },
    phone:{
        type:String,
        required : [ true , "plz add the phone number"],
    }
}
,{
    timestamps : true,
})

module.exports= mongoose.model("Contact",contactSchema);