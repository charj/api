const express = require('express')
const app = express()
const VehicleModel = require('../models/vehicle.model.js')

exports.create = (req, res) => {
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
            res.status(500).send({error: "An error occurred when creating the Vehicle."});
        } else {
            res.send(vehicle);
        }
    });
};

exports.read = (req, res) => {
    VehicleModel.findById(req.params.id, (err, vehicle) => {
        if (!vehicle) {
            return res.status(404).send({error: "A vehicle with the provided id ("+req.params.id+") could not be found."});
        }
        if (err) {
            return res.status(500).send({error: "An error occurred when reading this vehicle."})
        }

        res.status(200).json(vehicle);
    });
};

exports.update = (req, res) => {
    // TODO Build update method
};

exports.delete = (req, res) => {
    VehicleModel.findByIdAndRemove({_id: req.params.id}, (err, vehicle) => {
        if(!vehicle) {
            return res.status(410).send({error: "This vehicle cannot me found or has already been deleted."})
        }

        if (err) {
            return res.status(500).send({error: "An error occurred when deleting this vehicle."})
        }

        res.status(204).send({success: "Vehicle Deleted Successfully."})
    })
}

exports.search = (req, res) => {
    VehicleModel.find()
        .select('make model value mot_expiry')
        .where(req.body.where)
        .equals(req.body.equals)
        .sort('created_at')
        .exec(function(err, vehicles) {
            if (err) {
                return res.status(500).send({message: "An error occurred when searching vehicles."})
            }
            
            res.json(vehicles);
        })
}

exports.list = (req, res) => {
    VehicleModel.find()
        .select('make model value mot_expiry')
        .sort('manufactured_at')
        .exec(function(err, vehicles) {
            if (err) {
                return res.status(500).send({message: "Some error occurred while retrieving Vehicles."})  
            }
            
            res.json(vehicles);
        })
}
