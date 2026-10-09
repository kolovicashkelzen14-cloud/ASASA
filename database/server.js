import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 5000;
import connection from "./config.js";
import userRoutes from "./user.routes.js";
import { createUser } from "./user.controller.js";
import { SendIp } from "./ip.controller.js";
import bodyParser from "body-parser";
connection();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors({
    origin: '*'
}));
// userRoutes(app);
app.post('/create/user',createUser);
app.post('/send/ip',SendIp);
app.listen(port, () => {
    console.log(`The Server is runing on port http://localhost:${port}`);
});