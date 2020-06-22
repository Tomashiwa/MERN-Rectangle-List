const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    bookmarks: {type: Array,  required: true},
    rated: {type:Array,required: true}
});

module.exports = User = mongoose.model("user", UserSchema);

