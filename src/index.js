import express from "express";
import "express-async-errors";
import cors from "cors";
import sequelize from "./db/database.js";

const PORT = "8080";

const app = express();
app.use(express.json());
app.use(cors());

// catch error
app.use((_req, res, _next) => res.sendStatus(404));
app.use((error, _req, res, _next) => {
  console.error(error);
  res.sendStatus(500);
});

// start server
sequelize.sync().then((client) =>
  app.listen(PORT, () => {
    console.log(`🚀 Server is running from http://localhost:${PORT}`);
  })
);
