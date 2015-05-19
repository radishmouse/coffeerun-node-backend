
// models menuitems.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CoffeeOrderSchema = new Schema({
    flavor: String,
    size: String,
    email: {
        type: String,
        required: true
    },
    coffee: {
        type: String,
        required: true
    },
    strength: {
        type: Number,
        min: 0
    }
});

var CoffeeOrderModel = mongoose.model('CoffeeOrder', CoffeeOrderSchema);
// CoffeeOrderModel.schema.path('ingredients').validate(function (value) {
//     console.log('ingredients is' + value);
//     return (value != null) && (value.length > 0);
// }, 'Ingredients must be specified');
module.exports = CoffeeOrderModel;
