import express from "express";
import HomeController from "./controllers/HomeController";
import UserController from "./controllers/UserController";

const router = express();

router.get('/', HomeController.index);
router.get('/task/create', UserController.create);
router.get('/task/edit/:id', UserController.edit);

router.post('/task/save', UserController.save);
router.post('/task/delete', UserController.delete);
router.post('/task/update', UserController.update);


export default router;
