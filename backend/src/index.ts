import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

require('dotenv').config();
// Connect to database

mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => console.log("Connected to database!"));

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/my/user", myUserRoute);

console.log(process.env.AUTH0_ISSUER_BASE_URL);

app.listen(7000, () => {
    console.log("Server started on localhost:7000");
});
