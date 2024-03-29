const mongoose = require('mongoose');

const profile = new mongoose.Schema({
    firstname: { type: String, trim: true, default: '' }, //'bob' 'bob ' ' bob'
    lastName: { type: String, trim: true, default: '' },
    age: { type: Number, default: 0 },
    team: { type: String, trim: true, default: '' },
    position: { type: String, trim: true, default: '' }

});

module.exports = mongoose.model('Profile', profile);