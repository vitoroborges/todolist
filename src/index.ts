import express  from "express";
import router from "./router";

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(router);

app.listen(8080, () => {
    console.log("Server on");
});
