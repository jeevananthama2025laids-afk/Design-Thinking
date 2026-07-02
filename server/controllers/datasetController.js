/*
==========================================
Dataset Controller
==========================================
*/

export const uploadDataset = async (req, res) => {
  res.status(201).json({
    success: true,
    message: "Upload Dataset API",
  });
};

export const getDatasets = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Get All Datasets API",
  });
};

export const deleteDataset = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Delete Dataset API",
    id: req.params.id,
  });
};