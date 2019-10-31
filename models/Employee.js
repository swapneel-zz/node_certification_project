const mongoose = require('../libs/mongoDB').mongoose;

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const EmployeeSchema = new Schema({
  name: { type: String},
  email: { type: String, index: true  },
  dob: { type: Date },
  department: { type: String },
  gender: { type: String }
});

const EmployeeModel = mongoose.model('Employee', EmployeeSchema);

module.exports = EmployeeModel;
