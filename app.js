const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/authroutes"));
app.use("/api/students", require("./Routes/studentroutes"));
app.use("/api/teachers", require("./Routes/teacherroutes"));
app.use("/api/course", require("./Routes/courseroutes"));
app.get("/", (req, res) => {
  res.send("Student Management System API");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});