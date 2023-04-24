const express = require("express");
const schedule = require("node-schedule");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const createError = require("http-errors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;

// connect mongodb
mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", function () {
  console.log(`Mongodb:: connected:::${this.name}`);
});

// THIS IS FAILED BECAUSE ARROW FUNCTION DOESN'T HAVE CONTEXT => CAN'T USE THIS.NAME
// connection.on('connected',()=>{
//     console.log(`Connected to db ${this.name}`);
// });

mongoose.connection.on("error", function (error) {
  console.log(`Mongodb:: error:::${JSON.stringify(error)}`);
});

mongoose.connection.on("disconnected", function () {
  console.log(`Mongodb:: disconnected:::${this.name}`);
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});

const productRoute = require("./routes/product.route");
app.use("/v1/products", productRoute);

app.listen(PORT, () => {
  console.log(`SERVER RUNNING AT ${PORT}`);
});
