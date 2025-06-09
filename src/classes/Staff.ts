import { Employee } from "../interface/Employee";

export class Staff<T> implements Employee<T>{
    constructor(
       public name:string,
       public id:number,
       public role:T
    ){}
    
    async assignToAnimal(animalId:number):Promise<void>{
        console.log(`${this.name} (Role: ${this.role}) is being assigned to animal with ID ${animalId}...`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(`${this.name} assigned to animal ${animalId}.`);
        
    }
    
}