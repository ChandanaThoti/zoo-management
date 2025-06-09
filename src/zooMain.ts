import { Staff } from "./classes/Staff"
import {Mammal} from "./classes/Mammal"
function display(){
   const elephant = new Mammal(1,"Elphant","asian elephant",56,"Forest","short")
    console.log(elephant.describe()) 

    const vet=new Staff("John",123,"vet")
    console.log(vet.assignToAnimal(3))
}
display()