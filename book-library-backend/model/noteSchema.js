const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AddNote = new Schema({
    title:{type:String},
    author:{type:String},
    genre:{type:String},
    year:{type:String}

});

AddNote.set('timestamps', true);
mongoose.model('NOTEMODEL', AddNote);