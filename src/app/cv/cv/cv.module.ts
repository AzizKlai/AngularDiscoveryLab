import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv.component';
import { ListCvComponent } from '../list-cv/list-cv.component';
import { ItemCvComponent } from '../item-cv/item-cv.component';
import { DetailCvComponent } from '../detail-cv/detail-cv.component';
import { EmbaucheComponent } from '../embauche/embauche.component';
import { DetailComponent } from '../detail/detail.component';
import { MasterDetailComponent } from '../master-detail/master-detail.component';
import { AddCvComponent } from '../add-cv/add-cv.component';
import { AutocompleteSearchComponent } from '../autocomplete-search/autocomplete-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ROUTING } from 'src/app/app.routing';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CvComponent,
    ListCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    EmbaucheComponent,
    DetailComponent,
    MasterDetailComponent,
    AddCvComponent,
    AutocompleteSearchComponent,


  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    ROUTING
  ]
})
export class CvModule { 


}
