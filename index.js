const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;
require("dotenv").config();
const cors = require('cors');

const mongoose = require("mongoose");

// import routes
const authRoute = require('./routes/auth');


// connect to DB
mongoose.connect(
  `mongodb+srv://Gichimu:${process.env.PASS}@cluster0.g279kcx.mongodb.net/?retryWrites=true&w=majority`,
  {useNewUrlParser: true},
  () => console.log("Database connected")
);



// cors
app.use(cors());
app.options('*', cors());


// middleware
app.use(express.json());

// add route middleware
app.use('/api', authRoute);


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
