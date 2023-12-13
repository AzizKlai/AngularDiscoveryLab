import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ROUTING} from "./app.routing";
import {HttpClientModule} from "@angular/common/http";
import { MiniwordComponent } from './components/miniword/miniword.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { TestComponent } from './components/test/test.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListCvComponent } from './cv/list-cv/list-cv.component';
import { ItemCvComponent } from './cv/item-cv/item-cv.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { TestFilsComponent } from './components/test-fils/test-fils.component';
import { VisiteCardComponent } from './components/visite-card/visite-card.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { CustomStructuralDirective } from './directives/custom-structural.directive';
import { FibonacciPipe } from './pipes/fibonacci.pipe';
import { FibonacciListComponent } from './components/fibonacci-list/fibonacci-list.component';
import { LoggerService } from './services/logger.service';
import { TodoComponent } from './todo/todo/todo.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { v4 as uuidv4} from 'uuid';
import { TitleComponent } from './components/title/title.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailComponent } from './cv/detail/detail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './cv/login/login.component';
import { MergeComponent } from './operators/merge/merge.component';
import { MasterDetailComponent } from './cv/master-detail/master-detail.component';


@NgModule({
  declarations: [
    /*CvComponent,
    CvdetailComponent,
    CvlistComponent,
    CvitemComponent,
    MystyleComponent,
    RainbowDirective,
    DefaultthumbnailPipe,
    EmbaucheComponent,
    NavbarComponent,
    DetailComponent,
    NotfoundComponent,
    AddComponent,
    LoginComponent,
    SliderComponent,
    HttpComponent,*/
    AppComponent,
    MiniwordComponent,
    RainbowDirective,
    TestComponent,
    CvComponent,
    ListCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    TestFilsComponent,
    VisiteCardComponent,
    DefaultImagePipe,
    CustomStructuralDirective,
    FibonacciPipe,
    FibonacciListComponent,
    TodoComponent,
    TodoItemComponent,
    TitleComponent,
    EmbaucheComponent,
    NavbarComponent,
    NotfoundComponent,
    DetailComponent,
    LoginComponent,
    MergeComponent,
    MasterDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING,
   HttpClientModule,
   BrowserAnimationsModule, // required animations module
   ToastrModule.forRoot(), // ToastrModule added
   ReactiveFormsModule, //to use form controler
  ],
  providers: [
    { provide:'randomId',
      useValue:uuidv4
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
