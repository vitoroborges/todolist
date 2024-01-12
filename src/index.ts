import express  from "express";
import router from "./router";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(router);

app.listen(process.env.PORT, () => {
    console.log("Server on");
});
