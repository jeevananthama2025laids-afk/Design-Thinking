import mongoose from "mongoose";

const predictionSchema = new mongoose.Schema(
  {
    commodity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Commodity",
    },

    predictedPrice: {
      type: Number,
      required: true,
    },

    predictionDate: {
      type: Date,
      default: Date.now,
    },

    algorithm: {
      type: String,
      default: "Random Forest",
    },

    accuracy: {
      type: Number,
      default: 0,
    },

    predictedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Prediction", predictionSchema);