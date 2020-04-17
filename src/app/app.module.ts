import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './Components/child/child.component';
import { ParentComponent } from './Components/parent/parent.component';
import { FormsModule } from '@angular/forms';
import { ChildcompComponent } from './Demo/childcomp/childcomp.component';
import { ParentcompComponent } from './Demo/parentcomp/parentcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    ChildcompComponent,
    ParentcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
