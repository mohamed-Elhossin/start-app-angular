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
import { AdminNavBarComponent } from './admin/shared/admin-nav-bar/admin-nav-bar.component';
import { ListBlogComponent } from './admin/admin_blogs/list-blog/list-blog.component';
import { UpdateBlogComponent } from './admin/admin_blogs/update-blog/update-blog.component';
import { CreateServicesComponent } from './admin/admin_services/create-services/create-services.component';
import { ListServicesComponent } from './admin/admin_services/list-services/list-services.component';
import { UpdateServicesComponent } from './admin/admin_services/update-services/update-services.component';
import { CreateAdminComponent } from './admin/admin_admins/create-admin/create-admin.component';
import { ListAdminComponent } from './admin/admin_admins/list-admin/list-admin.component';
import { UpdateAdminComponent } from './admin/admin_admins/update-admin/update-admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CreateBlogComponent } from './admin/admin_blogs/create-blog/create-blog.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import { SingleBlogComponent } from './main/single-blog/single-blog.component';
import { AdminSingleBlogComponent } from './admin/admin_blogs/admin-single-blog/admin-single-blog.component';
import { LoginComponent } from './admin/login/login.component';
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
    AdminNavBarComponent,
    CreateBlogComponent,
    ListBlogComponent,
    UpdateBlogComponent,
    CreateServicesComponent,
    ListServicesComponent,
    UpdateServicesComponent,
    CreateAdminComponent,
    ListAdminComponent,
    UpdateAdminComponent,
    AdminHomeComponent,
    SingleBlogComponent,
    AdminSingleBlogComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
