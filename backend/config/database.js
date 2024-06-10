const mongoose = require("mongoose");
const db = mongoose.connection

const connnectDatabase = () => {
  mongoose.connect("mongodb://localhost:27017/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.set("strictQuery", true);
  db.on("error", (error) => console.log(error));
  db.once("open", () => console.log("Connected to Database"));
};

module.exports = connnectDatabase;