const mongoose= require('mongoose')

const testSchema=mongoose.Schema(
        {
            _id:mongoose.Schema.ObjectId,
            titleform:{type:String,default:''},
            description:{type:String,default:''},
          //  lesobjects: [{type:mongoose.Schema.ObjectId,ref:'Objects'}],
            objects:[{
                nom:{type:String,default:''},
                valeur:{type:String,default:''}
            }]
        }
    );
module.exports=mongoose.model('Tester',testSchema);

