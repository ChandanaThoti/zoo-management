import { Animal } from "../interface/Animal";
type furType='short' | "medium" | "long";
export class Mammal implements Animal{
constructor (
    public id:number,
    public name:string,
    public species:string,
    public age:number,
    public habitat:string,
    public furTyPe:furType

){}
sound(): string {
  return `${this.name} makes a sound.`;
}
describe(){
    return `${this.name} consists of id ${this.id}.\n
    It is ${this.species} species. \n
    It is ${this.age} old.\n
    It's habitat is ${this.habitat}.\n
    It has ${this.furTyPe} fur.
    `
}
}
