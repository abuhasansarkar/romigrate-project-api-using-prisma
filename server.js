import cors from "cors";
import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Root Api
app.get("/", (req, res) => {
  res.send("Server is Runing!");
});

// Routers is Here
import routes from "./routes/index.js";
app.use(routes);

// Server listening
app.listen(port, () => {
  console.log(`API Server is runing on this port ${port}`);
});
