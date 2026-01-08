# Booking Management System – Backend

## 🚀 How to Start the Project

1. Install project dependencies  
   ```bash
   npm install
   ```

2. Start the MySQL server on your system

3. Create the database  
   ```sql
   CREATE DATABASE booking_db;
   ```

4. Configure database credentials  
   Update MySQL username and password in:
   ```
   config/config.json
   ```

5. Run database migrations  
   ```bash
   npx sequelize-cli db:migrate
   ```

6. Start the backend server  
   ```bash
   npm run dev
   ```

7. The backend will be running at  
   ```
   http://localhost:5000
   ```

---

## 🛠 Tech Stack Used

- **Node.js**
- **Express.js**
- **TypeScript**
- **MySQL**
- **Sequelize ORM**
- **Sequelize CLI (Migrations)**
- **express-validator**
- **cors**

---

## 📘 What I Learned

- How to build a backend using **Node.js, Express, and TypeScript**
- How to integrate **MySQL** with **Sequelize ORM**
- Why **Sequelize migrations** are preferred over auto-sync
- How to design a **modular and scalable backend architecture**
- Proper separation of **routes, controllers, services, and models**
- Implementing request validation using **express-validator**
- Understanding why express-validator validations are route-scoped
- Correct middleware execution order in Express
- Creating a **standard API response structure**
- Handling and debugging **CORS issues**
- Writing clean and maintainable backend code
