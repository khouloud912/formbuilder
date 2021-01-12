module.exports = (app)=>{

  const express = require('express');
  const router = express.Router();
  const mongoose = require('mongoose');
  const Tester = require("../models/test.model");
  const testController = require("../controllers/test.controller");

  app.post("/addFields", testController.AddFields);
  app.get('/getFields', testController.getFields);   
  app.get('/filterbyform', testController.filter);     
  app.get('/listforms',testController.listForms);
  
  }











/********************************************* */















/*




let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

let testSchema = require('../models/test.model');
router.route('/createFields').post((req, res, next) => {
  testSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Students
router.route('/').get((req, res) => {
    testSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
/*
// Get Single Student
router.route('/edit-student/:id').get((req, res) => {
  studentSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Student
router.route('/update-student/:id').put((req, res, next) => {
  studentSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Student updated successfully !')
    }
  })
})

// Delete Student
router.route('/delete-student/:id').delete((req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;*/