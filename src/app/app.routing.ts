import {RouterModule, Routes} from "@angular/router";

/*
const APP_ROUTING: Routes = [
  {path: '', component: CvComponent},
  {path: 'style', component: MystyleComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cv', children : [
      {path : '' , component: CvComponent},
      {path : 'add' , component: AddComponent},
      {path : 'detail/:id' , component: DetailComponent}
    ]},
  {path: '**', component: NotfoundComponent}
]*/
const APP_ROUTING: Routes = []

export const ROUTING = RouterModule.forRoot(APP_ROUTING)
