import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ROUTING} from "./app.routing";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { MiniwordComponent } from './components/miniword/miniword.component';
import { TestComponent } from './components/test/test.component';
import { TestFilsComponent } from './components/test-fils/test-fils.component';
import { VisiteCardComponent } from './components/visite-card/visite-card.component';
import { FibonacciListComponent } from './components/fibonacci-list/fibonacci-list.component';
import { TodoComponent } from './todo/todo/todo.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { v4 as uuidv4} from 'uuid';
import { TitleComponent } from './components/title/title.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './cv/login/login.component';
import { MergeComponent } from './operators/merge/merge.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { SliderComponent } from './rxjs/slider/slider.component';
import { AuthentificationInterceptor } from './interceptors/authentification.interceptor';
import { CvModule } from './cv/cv/cv.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './cv/login/login.module';


export const
AuthentificationInterceptorProvider = {
provide: HTTP_INTERCEPTORS,
useClass: AuthentificationInterceptor,
multi: true,
};

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
    TestComponent,
    TestFilsComponent,
    VisiteCardComponent,
    FibonacciListComponent,
    TodoComponent,
    TodoItemComponent,
    TitleComponent,
    NavbarComponent,
    NotfoundComponent,
    MergeComponent,
    SliderComponent,

    ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    ROUTING,
   HttpClientModule,
   BrowserAnimationsModule, // required animations module
   ToastrModule.forRoot(), // ToastrModule added
   ReactiveFormsModule, //to use form controler
   NgxUiLoaderModule,
  // NgxUiLoaderModule.forRoot(ngxUiLoaderConfig), //use to make custom config
   
  ],
  providers: [
    { provide:'randomId',
      useValue:uuidv4
    },
    AuthentificationInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
