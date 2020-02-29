import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Header1Component } from './header/header1/header1.component';
import { Header2Component } from './header/header2/header2.component';
import { Footer1Component } from './footer/footer1/footer1.component';
import { Footer2Component } from './footer/footer2/footer2.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { DeractivesComponent } from './deractives/deractives.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { CpuppercasePipe } from './cpuppercase.pipe';
import { CplowercasePipe } from './custom-pipes/cplowercase.pipe';
import { CustomDirective } from './deractives/custom.directive';
import { ComponentnestingComponent } from './componentnesting/componentnesting.component';
import { Componentnesting1Component } from './componentnesting/componentnesting1/componentnesting1.component';
import { Componentnesting2Component } from './componentnesting/componentnesting2/componentnesting2.component';
import {SharedModule} from './shared/shared.module';
import { TemplateDrivenComponent } from './template-driven/template-driven.component'
import { from } from 'rxjs';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Header1Component,
    Header2Component,
    Footer1Component,
    Footer2Component,
    EventbindingComponent,
    PipesComponent,
    CustomPipesComponent,
    DeractivesComponent,
    PropertyBindingComponent,
    CpuppercasePipe,
    CplowercasePipe,
    CustomDirective,
    ComponentnestingComponent,
    Componentnesting1Component,
    Componentnesting2Component,
    TemplateDrivenComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
