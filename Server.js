import express from "express";
import cors from "cors";
import router from "./Routes/Student_route.mjs";
import AdminRouter from "./Routes/Admin_route.mjs";
import Db_connect from "./DB/Data.mjs";



const app = express();
Db_connect()

app.use(cors({
    origin: {"http://localhost:3000","https://ram99-ux.github.io"}
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    optionsSuccessStatus: 200
}));
app.use(express.json());
app.use(router);
app.use(AdminRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
