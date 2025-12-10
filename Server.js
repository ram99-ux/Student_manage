import express from "express";
import cors from "cors";
import router from "./Routes/Student_route.mjs";
import AdminRouter from "./Routes/Admin_route.mjs";
import Db_connect from "./DB/Data.mjs";


const app = express();
Db_connect()

app.use(cors());
app.use(express.json());
app.use(router);
app.use(AdminRouter);

app.listen(4000, () => console.log("Server running on port 4000"));