import TasksServices from "../services/TasksServices";
import { Request, Response } from "express";

class UserController {
    async delete(req: Request, res: Response){
        let id  = req.body.id;
        await TasksServices.delete(id);
        res.redirect('/');
    } 

    async create(req: Request, res: Response){
        res.render('../public/views/create');
    }

    async save(req: Request, res: Response){
        let name = req.body.name;
        let description = req.body.description;
        await TasksServices.create(name, description);
        res.redirect('/');
    }

    async edit(req: Request, res: Response){
        let id = req.params.id;
        await TasksServices.getById(id)
        .then(data => {
            res.render('../public/views/edit', {data: data});
        })
        .catch(err => {
            console.log(err);
        })

    }
    async update(req: Request, res: Response){
        let id = req.body.id;
        let name = req.body.name;
        let description = req.body.description;
        await TasksServices.update(id, name, description);
        res.redirect('/')
    }
}

export default new UserController();
