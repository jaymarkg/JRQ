const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./config/MongoDb.js");
const ImportData = require("./DataImport.js");
const productRoute = require("./Routes/ProductRoutes.js");
const { errorHandler, notFound } = require("./Middleware/Errors.js");
const userRouter = require("./Routes/UserRoutes.js");
const orderRouter = require("./Routes/orderRoutes.js");

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

//API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

//error handler
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));

module.exports = app;
