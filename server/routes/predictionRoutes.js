import express from "express";

import {
  predictPrice,
  trainModel,
  getPredictionHistory,
} from "../controllers/predictionController.js";

const router = express.Router();

router.post("/predict", predictPrice);

router.post("/train", trainModel);

router.get("/history", getPredictionHistory);

export default router;