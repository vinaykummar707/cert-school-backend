import express, { Request } from "express";
import { router } from "./routes/routes";
import { DbConnection } from "./connections/db_connection";
import { randomBytes } from "crypto";
import cors = require('cors');
const id = randomBytes(8).toString("hex");

console.log(id);

const app = express();
const port = process.env.PORT || 3000;

const options = {
  origin: '*',
};
app.use(cors<Request>(options));
app.use(express.json());
app.use(router);
app.use(express.static("src/public"));


app.listen(8080, async () => {
  try {
    await DbConnection.connectToDatabase();
    DbConnection.getSequelize.sync();
  } catch (error: any) {
    throw new Error(error);
  }
  console.log(`Server running at http://localhost:8080`);
});
