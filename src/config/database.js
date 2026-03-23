const mongoose = require("mongoose");

const connectDB = async () => {
  // console.log(process.env.DB_CONNECTION_SECRET);
  await mongoose.connect('mongodb+srv://senapathidurgaprakash:5sjG4CLzRHaIkSbe@namastenode.kpju0le.mongodb.net/devTinder');
};

module.exports = connectDB;
