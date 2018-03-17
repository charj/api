module.exports = function(app) {
    var vehicle = require('../controllers/vehicle.controller.js');

    // Create a new vehicle
    app.post('/vehicle', vehicle.create);
    app.get('/vehicle', vehicle.list);
    app.get('/vehicle/:id', vehicle.read);
    app.post('/vehicle/search', vehicle.search)
    app.post('/vehicle/delete/:id', vehicle.delete)
}
