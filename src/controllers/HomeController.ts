import { Request, Response } from "express";
import TasksServices from "../services/TasksServices";

class HomeController {
    async index(req: Request, res: Response){
        let result = await TasksServices.getAll();
        res.render("../public/views/index", {data: result});
    }
}

export default new HomeController();
