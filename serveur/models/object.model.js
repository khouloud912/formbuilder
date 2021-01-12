const mongoose= require('mongoose')
const objectSchema=mongoose.Schema(
        {
               _id:mongoose.Schema.ObjectId,
                nom:{type:String,default:''},
                valeur:{type:String,default:''}
        }
    );

module.exports=mongoose.model('Objects',objectSchema);