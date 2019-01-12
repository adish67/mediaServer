var mongoose = require("mongoose");

var fileSchema = new mongoose.Schema({
   name: String,
   fileType: String,
   description: String,
   author:{ 
      id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
      },
      username:String
   },
   date:{type:Date,default:Date.now()},
   filePath:String
});

module.exports = mongoose.model("file", fileSchema);