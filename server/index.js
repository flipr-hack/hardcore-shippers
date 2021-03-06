import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouterDriver from "./routes/userDriver.js";
import userRouterClient from "./routes/userClient.js";
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/user/driver", userRouterDriver);
app.use("/user/client", userRouterClient);
// const CONNECTION_URL =
//   "mongodb+srv://pratik621:pratik621@cluster0.upuhs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hardcore Shippers");
});

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
