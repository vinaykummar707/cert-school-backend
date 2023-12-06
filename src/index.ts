import express from 'express';
import {router} from "./routes/routes";
import {DbConnection} from "./connections/db_connection";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());


app.use(router);

app.listen(port, async () => {
    const dbConnection = new DbConnection();
    await dbConnection.connectToDatabase();
    console.log(`Server running at http://localhost:${port}`);
});