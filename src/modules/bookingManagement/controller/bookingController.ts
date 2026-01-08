import { Request, Response } from "express";
import {
  createBookingService,
  getAllBookingsService
} from "../service/bookingService";
import {
  successResponse,
  errorResponse
} from "../../../utils/apiResponse";

export const createBooking = async (req: Request, res: Response) => {
  try {
    const booking = await createBookingService(req.body);
    return successResponse(
      res,
      "Booking created successfully",
      booking,
      201
    );
  } catch (error) {
    return errorResponse(res, "Failed to create booking");
  }
};

export const getBookings = async (_req: Request, res: Response) => {
  try {
    const bookings = await getAllBookingsService();
    return successResponse(res, "Bookings fetched successfully", bookings);
  } catch (error) {
    return errorResponse(res, "Failed to fetch bookings");
  }
};
