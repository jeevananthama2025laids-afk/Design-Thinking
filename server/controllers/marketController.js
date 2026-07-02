/*
==========================================
Market Controller
==========================================
*/

export const getMarketData = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Get Market Data API",
  });
};

export const createMarketData = async (req, res) => {
  res.status(201).json({
    success: true,
    message: "Create Market Data API",
  });
};

export const updateMarketData = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Update Market Data API",
    id: req.params.id,
  });
};

export const deleteMarketData = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Delete Market Data API",
    id: req.params.id,
  });
};