var mongoose = require('mongoose');

var vehicleSchema = mongoose.Schema({
    make: String,
    model: String,
    value: Number,
    mot_expiry: Date,
    registration: String,
    manufactured_at: Date,
    created_at: Date,
}, {
    timestamps: true
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
