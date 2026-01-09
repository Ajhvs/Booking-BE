import express from "express";
import {
  createBooking,
  getBookings
} from "../controller/bookingController";
import { createBookingValidation } from "../validation/bookingValidation";
import { Middleware } from "../../../middlewares/middleware";

const router = express.Router();

router.post("/bookings",createBookingValidation, Middleware, createBooking);
router.get("/bookings", getBookings);

export default router;
