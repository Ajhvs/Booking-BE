import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "booking_db",
  "root",
  "Dips@1803",
  {
    host: "localhost",
    dialect: "mysql"
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL Connected");
  } catch (error) {
    console.error("MySQL connection failed", error);
  }
};
