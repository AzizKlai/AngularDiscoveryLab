// cin-validator.ts
import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

export function customCinValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const formGroup = control;
   
    const cinValue:string = formGroup.get('cin')?.value?.toString();
    const age = formGroup.get('age')?.value;
    const firstCinCar=Number(cinValue?.substring(0, 2)) 
    
    if(age>=18 && cinValue.length!=8)
    return { invalidCin: true, invalidCinMsg: 'cin must contain 8 numbers' };
    else{
    if (age >= 60 && !( firstCinCar>= 0 && firstCinCar <= 19)) {
      return { invalidCin: true, invalidCinMsg: 'over 60 years old CIN starts with a number under 19' };
    } else if (age>=18 && age < 60 && !(firstCinCar > 19)) {
      return { invalidCin: true, invalidCinMsg: 'under 60 years old CIN starts with a number greater than 19' };
    }}

    return null; // La validation est réussie
  };
}
