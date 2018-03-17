module.exports = function(app) {
    var vehicle = require('../controllers/vehicle.controller.js');

    // Create a new vehicle
    app.post('/vehicles', vehicle.create);
    app.get('/vehicles', vehicle.list);
}
