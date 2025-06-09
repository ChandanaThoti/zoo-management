export class Reptile{
    constructor(
        public coldBlooded:boolean,
        public scaleType:string,
       
    ){}
    layEggs():string{
        return `This reptile lays eggs`
    }

}