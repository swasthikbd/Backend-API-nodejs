import { Request, Response, NextFunction } from "express";
import admin from "../firebase";

/**
 * Middleware to verify Firebase authentication token
 */
export const verifyToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    console.log("verifyToken",req)
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({ message: "Unauthorized: No token provided" });
      return; // Ensure function exits after sending a response
    }

    const token = authHeader.split(" ")[1];
    const decodedToken = await admin.auth().verifyIdToken(token);

    (req as any).user = decodedToken; // Attach decoded token data to request object
    next(); // Call next() to proceed with the request
  } catch (error) {
    console.error("Firebase Auth Error:", error);

    res.status(403).json({ 
      message: "Unauthorized: Invalid or expired token", 
      error: error instanceof Error ? error.message : "Unknown error"
    });

    return; // Ensure function exits after sending a response
  }
};
