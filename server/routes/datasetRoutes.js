import express from "express";

import {
  uploadDataset,
  getDatasets,
  deleteDataset,
} from "../controllers/datasetController.js";

const router = express.Router();

router.get("/", getDatasets);

router.post("/upload", uploadDataset);

router.delete("/:id", deleteDataset);

export default router;