const express = require("express");
const connectDB = require("./config/connectDB");
const userRoutes = require("./routes/user");
const app = express();
port = 5000;
app.use(express.json());


app.use("/api/users", userRoutes);
connectDB();
app.listen(port, console.log(`app is running  on port ${port}`));
