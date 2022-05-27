const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color: { type: String, required: true },
    style: { type : String, required :true},
    count :{ type : Number, required : true},
    imag : { type : String , required :true},
    price :{ type : Number , required :false}
});

const Product = mongoose.model('product', productSchema);

module.exports = Product; 