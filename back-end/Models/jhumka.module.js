const mongoose= require("mongoose");
const jhumkaScheama = mongoose.Schema({
    name :{type: String , required : true},
    type :{ type : String , required : true ,  enum: ['ear-rings', 'ear-tops', 'gift-item', 'set' , 'haar' ,'jhumka' ],},
    quantity : {type : String , required : true},
    weight :{ type : String , required : true},
    description : {type : String , required : true},
    image : {type : Array  , required : true},
    org_price :{ type : String , required : true},
    dis_price : { type : String , required : true},
    category : { type : String ,  required : true},
});

const jhumkaModel= mongoose.model('jhumka', jhumkaScheama);
module.exports= jhumkaModel;

