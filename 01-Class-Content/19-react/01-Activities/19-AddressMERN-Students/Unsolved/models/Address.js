// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var AddressSchema = new Schema({
  Address: {
    type: String
  }
});

// Create the Model
var Address = mongoose.model("Address", AddressSchema);

// Export it for use elsewhere
module.exports = Address;
