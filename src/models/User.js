import mongoose from "mongoose";

// create schema

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      trim: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// export model

export default mongoose.models.User || mongoose.model("User", userSchema);
