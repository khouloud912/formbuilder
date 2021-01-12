const Tester =require("../models/test.model");
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

exports.AddFields=async(req,res,next)=>{
     
        var mesobjects=[];
        console.log(mesobjects);
        let test=await Tester.findOne({titleform:req.body.title}).exec();
          if(test){
             console.log("yes it exists");
              Object.entries(req.body.record).forEach(entry => {

                const [key, value] = entry;
                Object.entries(value).forEach(entry => {
                  const [key1, value1] = entry;
                  var obj = {
                    nom : key1,
                    valeur : value1
                  };     
                  console.log("that is the object",obj)  ;
                  test.objects.push(obj);
                  console.log("this is test.objects",test.objects);
                  })
                console.log(test);
                test.save()
                .then(result => {
                  res.status(201).json({
                    message: "fields created"
                  });
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                  });
                });










              });
          
             }else{
                Object.entries(req.body.record).forEach(entry => {
                  const [key, value] = entry;
                  Object.entries(value).forEach(entry => {
                    const [key1, value1] = entry;
                    var obj = {
                      nom : key1,
                      valeur : value1
                    };     
                    console.log(obj)  ;
                    mesobjects.push(obj);
                    
                  })
                });

                const fieldstest = new Tester({
                  _id: new mongoose.Types.ObjectId(),
                  titleform:req.body.title,
                  description:req.body.description,
                  objects:mesobjects
                });
                console.log(fieldstest);
                fieldstest.save()
                  .then(result => {
                    res.status(201).json({
                      message: "fields created"
                    });
                  })
                  .catch(err => {
                    console.log(err);
                    res.status(500).json({
                      error: err
                    });
                  });
             }}

exports.getFields=(req,res,next)=>{
    Tester.find()
    .exec()
    .then(fields => {
      res.status(200).json({
        fields})})
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
    }

exports.filter=(req,res,next)=>{
  Tester.findOne({ titleform:req.body.title }).then(test=>{
    if(!test){
        return res.status(404).send({
            message:"test not found"
        });
    }else{
        return res.status(201).json(test);
    }
})
.catch(err => {
    if(err) {
        return res.status(404).send({
            message: "error while fetching "
        });                
    }
});
  

}


exports.listForms=(req,res,next)=>{
  Tester.find()
    .exec()
    .then(tests=> {
      res.status(200).json({
        tests})})
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
    }
