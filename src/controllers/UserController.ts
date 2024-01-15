import CategoryServices from "../services/CategoryServices";
import TasksServices from "../services/TasksServices";
import { Request, Response } from "express";

class UserController {
    async delete(req: Request, res: Response){
        let id  = req.body.id;
        await TasksServices.delete(id);
        res.redirect('/');
    } 

    async create(req: Request, res: Response){
        let result = await CategoryServices.getAll();
        res.render('../public/views/create', {data: result});
    }

    async save(req: Request, res: Response){
        let name = req.body.name;
        let description = req.body.description;
        let category = req.body.category;
        await TasksServices.create(name, description, category);
        res.redirect('/');
    }

    async edit(req: Request, res: Response){
        let id = req.params.id;
        let task_data = await TasksServices.getById(id);
        let category_data = await CategoryServices.getAll();
        res.render('../public/views/edit', {task_data: task_data, category_data: category_data});

    }
    async update(req: Request, res: Response){
        let id = req.body.id;
        let name = req.body.name;
        let description = req.body.description;
        let category = req.body.category;
        await TasksServices.update(id, name, description, category);
        res.redirect('/')
    }
}

export default new UserController();
