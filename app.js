const express = require("express");
const app = express();

//DB

const mongoose = require("mongoose");
const mongoUrl = `mongodb+srv://admin:taras-igor@cluster0.jffyq.mongodb.net/app?retryWrites=true&w=majority`;

//Autorization module

app.use(express.json({extendet:true}))

app.use("/api/auth", require("./routes/auth.routes"));

async function start() {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    app.listen((PORT = 5000), () => {
      console.log(`App has been stared on ${PORT}. DB is avalieble`);
    });
  } catch (e) {
    console.log(`Server error ${e.message}`);
    process.exit(1);
  }
}

start();
