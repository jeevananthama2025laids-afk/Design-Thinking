/*
==========================================
Prediction Controller
==========================================
*/

export const predictPrice = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Predict Price API",
  });
};

export const trainModel = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Train AI Model API",
  });
};

export const getPredictionHistory = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Prediction History API",
  });
};