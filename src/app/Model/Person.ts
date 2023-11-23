export class Person {
    id: number;
    name: string;
    firstname: string;
    age: number;
    path: string;
    cin: number;
    job: string;
  
    constructor(id = 0, name: string = "aziz", firstname: string = "", age: number = 90, cin: number = 0 , job: string = "", path: string = "persona-1.jpg") {
      this.id = id;
      this.name = name;
      this.firstname = firstname;
      this.age = age;
      this.path =path;
      this.cin = cin;
      this.job = job;
    }
  }
  