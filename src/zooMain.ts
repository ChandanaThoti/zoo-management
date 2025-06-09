import {Mammal} from "./classes/Mammal"
function display(){
   const elephant = new Mammal(1,"Elphant","asian elephant",56,"Forest","short")
    console.log(elephant.describe()) 
}
display()