import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './main/hero/hero.component';
import { AboutComponent } from './main/about/about.component';
import { BlogComponent } from './main/blog/blog.component';
import { ContactComponent } from './main/contact/contact.component';
import { FeaturesComponent } from './main/features/features.component';
import { PricingComponent } from './main/pricing/pricing.component';
import { ServicesComponent } from './main/services/services.component';
import { StateComponent } from './main/state/state.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HeroComponent },
  { path: "", component: HeroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'state', component: StateComponent },
  { path: 'blogs', component: BlogComponent },


  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
