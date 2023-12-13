import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, map, merge, reduce, scan } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent {
  firstfinished=false
  secondfinished=false
  firstNb=new FormControl(0)
  secondNb=new FormControl(0)
  
  firstSubject$= new BehaviorSubject(0)
  secondSubject$=new BehaviorSubject(0)

  mergeValue$=new Observable<number>
  scanValue$ = new Observable<number>
  reduceValue$ = new Observable<number>
  
  constructor(){
    this.mergeValue$=merge(this.firstSubject$,this.secondSubject$)
    this.scanValue$=this.mergeValue$.pipe(
      scan((acc,x)=>{
        if(x)
        return x+acc
      return acc
      }))
    this.reduceValue$=this.mergeValue$.pipe(
      reduce((acc,x)=>{
        if(x)
        return x+acc
      return acc
      }))
  }

  changeFirstStream(){
    if(this.firstNb.value)
    this.firstSubject$.next(this.firstNb.value)
  }
  changeSecondStream(){
    if(this.secondNb.value)
    this.secondSubject$.next(this.secondNb.value)
  }

  endFirstStream(){
    this.firstfinished=true
    this.firstSubject$.complete()
  }
  endSecondStream(){
    this.secondfinished=true
  this.secondSubject$.complete()
  }

  }

