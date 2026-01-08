import { Response } from "express";

interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

export const successResponse = (
  res: Response,
  message: string,
  data: any = null,
  statusCode = 200
): Response<ApiResponse> => {
  return res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

export const errorResponse = (
  res: Response,
  message: string,
  statusCode = 500
): Response<ApiResponse> => {
  return res.status(statusCode).json({
    success: false,
    message
  });
};
