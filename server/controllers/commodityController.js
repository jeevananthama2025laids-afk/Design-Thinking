/*
==========================================
Commodity Controller
==========================================
*/

// GET ALL
export const getAllCommodities = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Get All Commodities API",
  });
};

// GET ONE
export const getCommodityById = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Get Commodity By ID API",
    id: req.params.id,
  });
};

// CREATE
export const createCommodity = async (req, res) => {
  res.status(201).json({
    success: true,
    message: "Create Commodity API",
  });
};

// UPDATE
export const updateCommodity = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Update Commodity API",
    id: req.params.id,
  });
};

// DELETE
export const deleteCommodity = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Delete Commodity API",
    id: req.params.id,
  });
};