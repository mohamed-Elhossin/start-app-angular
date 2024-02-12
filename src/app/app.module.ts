import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './main/hero/hero.component';
import { AboutComponent } from './main/about/about.component';
import { StateComponent } from './main/state/state.component';

import { ServicesComponent } from './main/services/services.component';
import { FeaturesComponent } from './main/features/features.component';
import { BlogComponent } from './main/blog/blog.component';
import { PricingComponent } from './main/pricing/pricing.component';
import { ContactComponent } from './main/contact/contact.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    StateComponent,
 
    ServicesComponent,
    FeaturesComponent,
    BlogComponent,
    PricingComponent,
    ContactComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
