// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// mongoose.connect(
//   "mongodb://********/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
// );

// const UserSchema = new Schema(
//   {
//     id: {
//       type: Number,
//       require: true,
//       trim: true,
//     },
//     name: {
//       type: String,
//       require: true,
//       trim: true,
//     },
//     gender: {
//       type: String,
//       require: true,
//       trim: true,
//     },
//     phone: {
//       type: Number,
//       maxlength: 10,
//     },
//     email: {
//       type: String,
//       trim: true,
//       lowercase: true,
//     },
//     age: {
//       type: Number,
//       maxlength: 8,
//     },
//     timestamps: { type: Date, default: Date.now },
//   },
//   { versionKey: false }
// );

// module.exports = mongoose.model("users", UserSchema);

// // Please comment out all your code when you are finished.
