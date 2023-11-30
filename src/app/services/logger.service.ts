import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  data=['firstdata'];
  constructor() { }
  push(data:string){
    this.data.push(data)
  }
  log(data:any){
    console.log(data)
  }

}
