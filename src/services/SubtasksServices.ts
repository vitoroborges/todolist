import db from "../model/Database";

class SubtasksServices{
    async getAll(){
        try{
            let result = db.select().from("subtask");
            return result;
        } catch(err){
            console.log(err);
        }
    }

    async getById(id: any) {
        let result = await db.select().from("subtask").where({id:id});
        return result;
    }

    async create(name: string, task_id: any){
        if(name != undefined){
            try{
                await db.insert({name: name, task_id: task_id, is_complete: false}).into("subtask")
                return true;
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
            await db.from("subtask").where("id", id).del();
            return true;
        } catch(err){
            console.log(err);
            return false;
        }
    }

    async update(id: any, name: string){
        try{
            await db.update({name: name}).from("subtask").where("id",id);
            return true;
        } catch(err){
            console.log(err);
            return false;
        }
    }
}
    
export default new SubtasksServices();
