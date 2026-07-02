import express from "express";

import {
  getAllCommodities,
  getCommodityById,
  createCommodity,
  updateCommodity,
  deleteCommodity,
} from "../controllers/commodityController.js";

const router = express.Router();

router.get("/", getAllCommodities);

router.get("/:id", getCommodityById);

router.post("/", createCommodity);

router.put("/:id", updateCommodity);

router.delete("/:id", deleteCommodity);

export default router;