import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from './routes/message.route.js';
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import { app, server } from './lib/socket.js';

dotenv.config();

app.use(express.json({ limit: "10mb" }));           // increase as needed
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cors({
    origin: process.env.FRONT_URL, // your frontend origin
    credentials: true                // allow cookies to be sent
}));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(process.env.PORT, () => {
    console.log(`Application is listing on port:${process.env.PORT}`);
    connectDB();
});