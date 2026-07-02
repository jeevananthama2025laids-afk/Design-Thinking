import mongoose from "mongoose";

const commoditySchema = new mongoose.Schema(
  {
    commodityName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
    },

    variety: {
      type: String,
      default: "",
    },

    unit: {
      type: String,
      default: "Kg",
    },

    description: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Commodity", commoditySchema);