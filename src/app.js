import express from "express";
import morgan from "morgan";
//routes
import studentRoutes from "./routes/student.routes";
const app=express();
const cors = require('cors');
//settings
app.set("port",4000);
//middlewares
app.use(morgan("dev"));
app.use(express.json());

app.use(cors());
//router
app.use("/api/student",studentRoutes);

export default app;
