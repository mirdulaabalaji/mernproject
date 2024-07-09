// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
    purchasedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PetProduct' }],
    adoptedPets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' }]
});

module.exports = mongoose.model('User', UserSchema);
