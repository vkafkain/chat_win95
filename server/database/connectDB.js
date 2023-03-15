const mongoose = require("mongoose");
const { Rooms } = require("../models/Room");

let mongoDB = `mongodb://localhost/chat`;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to ${process.env.DB_NAME}`);
  } catch (err) {
    console.log(err.message);
  }

  const roomFind = await Rooms.findOne( { roomName: "Main" } );
  if(!roomFind) {
    const room = await Rooms.create( {roomName: "Main"});
  }
};

module.exports = connectDB;
