import express  from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
import helmet from "helmet"

const app = express();
const url = "mongodb+srv://admin:123@jobsekr.svtcldb.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", true)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log("Connected to database...")).catch((error) => {
    console.error(`Unable to connect to the database: ${error.message}`);
  })



app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet())
app.use('/', routes);
app.listen(5000);