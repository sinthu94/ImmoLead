import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";


dotenv.config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send({message: "hello World!"})
})



app.listen(8080, () => console.log("Server started:"))
