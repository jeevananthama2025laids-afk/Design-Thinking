import express from "express";

import {
  getMarketData,
  createMarketData,
  updateMarketData,
  deleteMarketData,
} from "../controllers/marketController.js";

const router = express.Router();

router.get("/", getMarketData);

router.post("/", createMarketData);

router.put("/:id", updateMarketData);

router.delete("/:id", deleteMarketData);

export default router;