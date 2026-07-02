import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/database.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import commodityRoutes from "./routes/commodityRoutes.js";
import marketRoutes from "./routes/marketRoutes.js";
import datasetRoutes from "./routes/datasetRoutes.js";
import predictionRoutes from "./routes/predictionRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();

// Connect Database
connectDB();

const app = express();

/*
==========================================
Middleware
==========================================
*/

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/*
==========================================
API Routes
==========================================
*/

app.use("/api/auth", authRoutes);

app.use("/api/commodities", commodityRoutes);

app.use("/api/market", marketRoutes);

app.use("/api/datasets", datasetRoutes);

app.use("/api/predictions", predictionRoutes);

app.use("/api/dashboard", dashboardRoutes);

/*
==========================================
Health Check
==========================================
*/

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Agri Price Prediction API is running successfully.",
    version: "1.0.0",
  });
});

/*
==========================================
404 Route
==========================================
*/

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

/*
==========================================
Start Server
==========================================
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});