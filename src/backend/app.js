import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Express app
const app = express();

// CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Middlewares
app.use(express.json({ limit: "16kb" }));
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/temp", express.static("temp"));

// Routes
import router from "./routes/user.route.js";
app.use("/api/v1/users", router);

export { app };
