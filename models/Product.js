const mongoose = require('mongoose');

const dressSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    quantity :{type : Number},
    color: { type: String, required: true },
    style: { type : String, required :true},
    imag :{ type : String, required : false}
});

const Dress = mongoose.model('Dress', dressSchema);

module.exports = Dress;