import { Request, Response } from "express";
import TasksServices from "../services/TasksServices";
import SubtasksServices from "../services/SubtasksServices";

class HomeController {
    async index(req: Request, res: Response){
        let task_result = await TasksServices.getAll();
        let subt_result = await SubtasksServices.getAll();
        res.render("../public/views/index", {task_data: task_result, subt_data: subt_result});
    }
}

export default new HomeController();
