import bcrypt from "bcryptjs";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

/*
=========================================================
Validation Regex
=========================================================
*/

// Email Regex
const emailRegex =
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// Password Regex
// Minimum 8 characters
// At least one uppercase
// At least one lowercase
// At least one number
// At least one special character

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_\-+=])[A-Za-z\d@$!%*?&^#()_\-+=]{8,}$/;

/*
=========================================================
Register User
POST /api/auth/register
=========================================================
*/

export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    // -----------------------------
    // Check Required Fields
    // -----------------------------
    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided.",
      });
    }

    // -----------------------------
    // Full Name Validation
    // -----------------------------
    if (fullName.trim().length < 3) {
      return res.status(400).json({
        success: false,
        message: "Full name must contain at least 3 characters.",
      });
    }

    // -----------------------------
    // Email Validation
    // -----------------------------
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address.",
      });
    }

    // -----------------------------
    // Password Validation
    // -----------------------------
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        success: false,
        message:
          "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character.",
      });
    }

    // -----------------------------
    // Check Existing User
    // -----------------------------
    const existingUser = await User.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email is already registered.",
      });
    }

    // -----------------------------
    // Hash Password
    // -----------------------------
    const hashedPassword = await bcrypt.hash(password, 12);

    // -----------------------------
    // Create User
    // -----------------------------
    const user = await User.create({
      fullName: fullName.trim(),
      email: email.toLowerCase(),
      password: hashedPassword,
      role,
    });

    // -----------------------------
    // Generate JWT
    // -----------------------------
    const token = generateToken(user._id);

    // -----------------------------
    // Success Response
    // -----------------------------
    return res.status(201).json({
      success: true,
      message: "User registered successfully.",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.error("Register Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

/*
=========================================================
Login User
POST /api/auth/login
=========================================================
*/

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // -----------------------------
    // Validate Input
    // -----------------------------
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address.",
      });
    }

    // -----------------------------
    // Find User
    // -----------------------------
    const user = await User.findOne({
      email: email.toLowerCase(),
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // -----------------------------
    // Compare Password
    // -----------------------------
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // -----------------------------
    // Generate JWT
    // -----------------------------
    const token = generateToken(user._id);

    // -----------------------------
    // Success Response
    // -----------------------------
    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};