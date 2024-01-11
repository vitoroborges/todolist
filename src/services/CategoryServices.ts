import db from "../model/Database";

class CategoryServices {

    async getAll(){
        try{
            let result = db.select().from("category");
            return result;
        } catch(err){
            console.log(err);
        }
    }

    async getById(id: any) {
        let result = await db.select().from("category").where({id:id});
        return result;
    }

    async create(name: string){
        if(name != undefined){
            try{
                await db.insert({name: name}).into("category")
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
            await db.from("category").where("id", id).del();
            return true;
        } catch(err){
            console.log(err);
            return false;
        }
    }

    async update(id: any, name: string){
        try{
            await db.update({name: name}).from("category").where("id",id);
            return true;
        } catch(err){
            console.log(err);
            return false;
        }
    }
}

export default new CategoryServices();

