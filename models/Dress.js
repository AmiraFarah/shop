const mongoose = require('mongoose');

const dressSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color: { type: String, required: true },
    style: { type : String, required :true},
    count :{ type : Number, required : false},
    imag : { type : String , required :true}
});

const Dress = mongoose.model('Dress', dressSchema);

module.exports = Dress; 