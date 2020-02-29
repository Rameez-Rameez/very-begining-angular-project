import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Header1Component } from './header/header1/header1.component';
import { Header2Component } from './header/header2/header2.component';
import { Footer1Component } from './footer/footer1/footer1.component';
import { Footer2Component } from './footer/footer2/footer2.component';
import { RoutingGuard } from './routing.guard';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { DeractivesComponent } from './deractives/deractives.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ComponentnestingComponent } from './componentnesting/componentnesting.component';
import { Componentnesting1Component } from './componentnesting/componentnesting1/componentnesting1.component';
import { Componentnesting2Component } from './componentnesting/componentnesting2/componentnesting2.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
 {
   path:'header',
   component:HeaderComponent,
   canActivate:[RoutingGuard], 
   children:[
    {
      path:'header1',
      component:Header1Component
    },{
      path:'header2',
      component:Header2Component
    }
  ]
 },{
   path:'footer',
   component:FooterComponent,
   children:[
     {
       path:'footer1',
       component:Footer1Component
     },{
       path:'footer2',
       component:Footer2Component
     }
   ]
 },{
   path:'eventbinding',
   component:EventbindingComponent
 },{
   path:'pipes',
   component:PipesComponent
 },{
   path:'customPipes',
   component:CustomPipesComponent
 },{
   path:'deractives',
   component:DeractivesComponent
 },{
   path:'propertyBinding',
   component:PropertyBindingComponent
 },{
   path:'componentnesting',
   component:ComponentnestingComponent,
   children:[
     {
       path:'componentnesting1',
       component:Componentnesting1Component,
     },{
       path:'componentnesting2',
       component:Componentnesting2Component,
     }
   ]
 },{
  path:'template-driven',
  component:TemplateDrivenComponent
},{
  path:'reactive-form',
  component:ReactiveFormComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
