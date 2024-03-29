import db from "../model/Database";

class TasksServices {

    async getAll(){
        try{
            let result = db.select().from("tasks");
            return result;
        } catch(err){
            console.log(err);
        }
    }

    async getById(id: any) {
        let result = await db.select().from("tasks").where({id:id});
        return result;
    }

    async create(name: string, description: string, category_id?: any){
        if(name != undefined){
            try{
                if(category_id != undefined){
                    await db.insert({name: name, description: description, is_complete: false, category_id: category_id}).into("tasks")
                    return true;
                } else{
                    await db.insert({name: name, description: description, is_complete: false}).into("tasks")
                    return true;
                }
            } catch(err){
                console.log(err);
                return false;
            }
        } else{
            console.error("Can't be undefined"); 
        }
    }

    async delete(id: any){
        try{
            await db.from("tasks").where("id", id).del();
            return true;
        } catch(err){
            console.log(err);
            return false;
        }
    }

    async update(id: any, name: string, desc: string, category_id?: any){
        try{
            if(category_id != undefined){
                await db.update({name: name, description: desc, category_id: category_id}).from("tasks").where("id",id);
                return true;
            } else{
                await db.update({name: name, description: desc}).from("tasks").where("id",id);
                return true;
            }
        } catch(err){
            console.log(err);
            return false;
        }
    }
}

export default new TasksServices();

