import express, {Express, Request, Response, Router} from "express";
import morgan from 'morgan';
import dotenv from "dotenv";
import {exampleController} from "./controller/ExampleController";
import cookieParser from "cookie-parser";

dotenv.config();

const app: Express = express();

app.use(morgan("common"))
app.use(cookieParser())
app.use(express.json())
app.use(express.static('public'));



const api = Router()
api.use("/example", exampleController);



app.use("/api/", api)
//Redirect les routes non matchs
app.use("*", express.static("public/index.html"))

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});