import Booking from "../models/Booking";

export const createBookingService = async (payload: any) => {
  return await Booking.create({
    name: payload.name,
    phone: payload.phone,
    date: payload.date,
    time: payload.time,
    service: payload.service
  });
};

export const getAllBookingsService = async () => {
  return await Booking.findAll({
    order: [["createdAt", "DESC"]]
  });
};
