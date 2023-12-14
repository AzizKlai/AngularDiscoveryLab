import { ResolveFn, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { inject } from '@angular/core';
import { of } from 'rxjs';
import { Person } from 'src/app/Model/Person';

export const detailResolver: ResolveFn<Person | null> = (route, state) => {
  const router=inject(Router)
  const cvService:CvService=inject(CvService)
  const id= route.params['id']
  const personne=cvService.getPersonneById$(id);
  /*const routeState=router.getCurrentNavigation()?.extras.state;
  if (routeState) {
   console.log(routeState['id']);
  }*/
  if(!personne)
  return of(null)
else 
  return personne 
};
