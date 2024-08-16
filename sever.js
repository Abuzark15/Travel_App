const express = require('express');
const mongoose = require('mongoose');

const hotelRouters = require("./routes/hotel.router");
const hotelDataAddedToDBRouter = require("./routes/hotelsimport.router");
const categoriesDataAddedToDBRouter = require("./routes/categoryimport.router")
const categoryRouter = require("./routes/category.router")
const singleHotelRouter = require("./routes/singlehotel.router")
const authRouter = require("./routes/auth.router");
const wishlistRouter = require("./routes/wishlist.router");

const connectDB = require('./config/dbconfig');

const app = express();

app.use(express.json());
connectDB();

const PORT = 3500;

app.get("/", (req, res) => {
    res.send("Hello")
})

app.use("/api/hoteldata", hotelDataAddedToDBRouter);
app.use("/api/categoriesdata", categoriesDataAddedToDBRouter);

app.use("/api/hotels", hotelRouters);
app.use("/api/category", categoryRouter);
app.use("/api/hotels", singleHotelRouter);
app.use("/api/auth", authRouter);
app.use("/api/wishlist", wishlistRouter);

mongoose.connection.once("open", () => {
    console.log("connected to database")
    app.listen(process.env.PORT || PORT, () => {
        console.log("server is up and runnig")
    })
})

