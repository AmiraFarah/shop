const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    products : [Object] 
   
});

const Cart = mongoose.model('Dress', cartSchema);

module.exports = Cart; 







