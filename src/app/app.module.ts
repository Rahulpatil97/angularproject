import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { SigninComponent } from './signin/signin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LanguagesComponent } from './languages/languages.component';

const Router:Routes =[
  {path:'features', component:FeaturesComponent},
  {path:'pricing', component:PricingComponent},
  {path:'signin', component:SigninComponent},
  {path:'languages', component:LanguagesComponent},
  {path:'**', component:PagenotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturesComponent,
    PricingComponent,
    SigninComponent,
    PagenotfoundComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
