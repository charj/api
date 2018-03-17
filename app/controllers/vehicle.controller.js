const express = require('express')
const app = express()
const VehicleModel = require('../models/vehicle.model.js')

exports.create = function(req, res) {
    if(!req.body.make) {
        res.status(400).send({error:'Make is required.'})
    }

    if(!req.body.model) {
        res.status(400).send({error:'Model is required.'})
    }
    
    var vehicle = new VehicleModel({
        make :req.body.make,
        model: req.body.model,
        registration: req.body.registration,
        value: req.body.value
    });

    vehicle.save(function(err, vehicle) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "An error occurred when creating the Vehicle."});
        } else {
            res.send(vehicle);
        }
    });
};

exports.read = function(req, res) {
    // Create and Save a new vehicle
};

exports.update = function(req, res) {
    // Updates an existing vehicle
};

exports.delete = function(req, res) {
    // Deletes an existing vehicle
};

exports.list = function(req, res) {
    VehicleModel.find(function(err, vehicles) {
        if (err) {
            res.status(500).send({message: "Some error occurred while retrieving Vehicles."});       
        } else {
            res.json(vehicles);
        }
    });
}