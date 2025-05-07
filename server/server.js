const express = require("express");
const cors = require("cors");
require("dotenv").config();

const analyzeRoute = require("./routes/analyze");

const app = express();
app.use(cors({ origin: process.env.FRONTEND_ORIGIN }));
app.use(express.json());

app.use("/analyze", analyzeRoute);

app.get("/", (req, res) => res.send("AI Pricing Backend Running"));

app.listen(5000, () => console.log("Server started on port 5000"));
