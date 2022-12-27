const express = require("express"); //express
const cors = require("cors"); //cors cross origin requests
const app = express(); //express ting
app.use(cors()); // cors ting
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //does something
require("./server/config/mongoose.config"); //you can use mongoose now
require("./server/routes/pet.routes")(app); //tells express public routes
app.listen(8000, () => {
  //exposing app
  console.log("Listening at Port 8000");
});
