import express from "express";
import cors from "cors";
import bookingRoutes from "./modules/bookingManagement/routes/bookingRoutes";
import { Middleware } from "./middlewares/middleware"

const app = express();

app.use(
    cors({
    origin: "http://localhost:5173", // frontend URL
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);
app.use(express.json());

app.use("/api", bookingRoutes);
// app.use(Middleware);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
