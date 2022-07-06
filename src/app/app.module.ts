import { NgModule } from '@angular/core';
// Dynamic form
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// Dynamic form
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [AppComponent, DynamicFormComponent, DynamicFormQuestionComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
