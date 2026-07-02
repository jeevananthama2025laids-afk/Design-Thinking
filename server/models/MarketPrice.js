import mongoose from "mongoose";

const marketDataSchema = new mongoose.Schema(
  {
    commodity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Commodity",
      required: true,
    },

    marketName: {
      type: String,
      required: true,
    },

    district: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    arrivalDate: {
      type: Date,
      required: true,
    },

    minimumPrice: {
      type: Number,
      required: true,
    },

    maximumPrice: {
      type: Number,
      required: true,
    },

    modalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("MarketData", marketDataSchema);