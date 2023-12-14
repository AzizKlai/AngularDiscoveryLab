import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CvService } from '../services/cv.service';
import { Router } from '@angular/router';
import { customCinValidator } from 'src/app/reactiveFormValidators/custom-cin.validator';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})

//reactive form
export class AddCvComponent implements OnInit,OnDestroy {
  
  form!: FormGroup
  subscription=new Subscription()
  cvService=inject(CvService)
  router=inject(Router)
  constructor(){
    
  }
ngOnInit(): void {
 this.form= new FormGroup(
  {  name: new FormControl('az',{
     validators:[Validators.required]}),
     firstname : new FormControl('az',{
     validators:[Validators.required]}),
     age : new FormControl(18,{ 
     validators:[Validators.required,Validators.min(1)]}),
     cin : new FormControl(20000000 ,{
     validators:[Validators.required]}),
     job : new FormControl('job',{
     validators:[Validators.required]}),
     path :new FormControl(''),
  },
  {validators: customCinValidator()}
 )
 if(this.cvService.getFormState())
 this.form.setValue(this.cvService.getFormState())

 // custom validator for the path based on age
 this.subscription.add(
     this.form.valueChanges.subscribe(form=>{ this.cvService.saveFormState(form)}))

 this.subscription.add(this.form.get('age')?.valueChanges.subscribe(
  age => {const imagePathControl = this.form.get('path');
          const cinContorl=this.form.get('cin');
          if (age && age < 18) {
            imagePathControl?.setValidators([]);
            imagePathControl?.setValue('');  // Reset path if age < 18
            cinContorl?.setValidators([]);
            cinContorl?.setValue('');
          } else {
            imagePathControl?.setValidators([Validators.required]);
            cinContorl?.setValidators([Validators.required]);
          }
          imagePathControl?.updateValueAndValidity();
          cinContorl?.updateValueAndValidity();
}))
}

addCv(){
  this.cvService.addPerson(this.form.value)
  this.form.reset()
  //this.router.navigate(['cv'])
  
}

ngOnDestroy(): void {
this.subscription?.unsubscribe()
}
}
