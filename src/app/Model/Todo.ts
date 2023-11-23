export class Todo {
    id:number;
    name: string;
    description: string;
  
    constructor( id:number=0, name: string = "casual todo", description: string = "") {
      this.id=id;
      this.name = name;
      this.description = description;
    }
  }
  