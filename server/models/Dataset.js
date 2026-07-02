import mongoose from "mongoose";

const datasetSchema = new mongoose.Schema(
  {
    datasetName: {
      type: String,
      required: true,
    },

    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    fileName: {
      type: String,
      required: true,
    },

    totalRecords: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["Uploaded", "Processing", "Completed"],
      default: "Uploaded",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Dataset", datasetSchema);