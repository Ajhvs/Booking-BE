import { body, param } from "express-validator";

export const createBookingValidation = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters"),

  body("phone")
    .notEmpty()
    .withMessage("Phone is required")
    .isLength({ min: 10, max: 15 })
    .withMessage("Phone must be 10–15 digits"),

  body("date")
    .notEmpty()
    .withMessage("Date is required")
    .isISO8601()
    .withMessage("Invalid date format"),

  body("time")
    .notEmpty()
    .withMessage("Time is required"),

  body("service")
    .notEmpty()
    .withMessage("Service is required")
];

export const bookingIdValidation = [
  param("id")
    .isInt()
    .withMessage("Booking ID must be a number")
];
