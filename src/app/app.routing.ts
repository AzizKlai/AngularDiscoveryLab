import {RouterModule, Routes} from "@angular/router";
import { CvComponent } from "./cv/cv/cv.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { MiniwordComponent } from "./components/miniword/miniword.component";
import { TestComponent } from "./components/test/test.component";
import { DetailComponent } from "./cv/detail/detail.component";
import { detailResolver } from "./cv/resolvers/detail.resolver";
import { LoginComponent } from "./cv/login/login.component";
import { MergeComponent } from "./operators/merge/merge.component";
import { MasterDetailComponent } from "./cv/master-detail/master-detail.component";
import { AddCvComponent } from "./cv/add-cv/add-cv.component";
import { notAuthGuard } from "./guards/not-auth.guard";
import { authGuard } from "./guards/auth.guard";
import { exitAddCvGuard } from "./guards/exit-add-cv.guard";

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
const APP_ROUTING: Routes = [
  {path:'', redirectTo:'/cv', pathMatch:'full'},
  {path: 'login', component: LoginComponent, canActivate: [notAuthGuard],}, 
  {path: 'cv', children : [
    {path : '' , component: CvComponent},
    {path:'masterDetail',component: MasterDetailComponent,
          children:[ {path : ':id' , component: DetailComponent, canActivate:[authGuard],resolve: { personne: detailResolver }}]
        },
    {path : 'add' , component: AddCvComponent, canActivate:[authGuard],canDeactivate:[exitAddCvGuard] },
    {path : 'detail/:id' , component: DetailComponent, canActivate:[authGuard],resolve: { personne: detailResolver }}
  ]},
  {path: 'miniword', component: MiniwordComponent},
  {path: 'test', component: TestComponent},
  {path: 'merge', component: MergeComponent},
  {path: '**', component: NotfoundComponent},

]

export const ROUTING = RouterModule.forRoot(APP_ROUTING)
