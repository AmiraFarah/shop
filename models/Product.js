const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color: { type: String, required: true },
    style: { type : String, required :true},
    count :{ type : Number, required : false},
    imag : { type : String , required :true},
    price :{ type : Number , required :false}
});

const Product = mongoose.model('Dress', productSchema);

module.exports = Product; 