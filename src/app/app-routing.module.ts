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
import { AdminNavBarComponent } from './admin/shared/admin-nav-bar/admin-nav-bar.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CreateServicesComponent } from './admin/admin_services/create-services/create-services.component';
import { ListServicesComponent } from './admin/admin_services/list-services/list-services.component';
import { UpdateServicesComponent } from './admin/admin_services/update-services/update-services.component';
import { CreateBlogComponent } from './admin/admin_blogs/create-blog/create-blog.component';
import { ListBlogComponent } from './admin/admin_blogs/list-blog/list-blog.component';
import { UpdateBlogComponent } from './admin/admin_blogs/update-blog/update-blog.component';
import { CreateAdminComponent } from './admin/admin_admins/create-admin/create-admin.component';
import { ListAdminComponent } from './admin/admin_admins/list-admin/list-admin.component';
import { UpdateAdminComponent } from './admin/admin_admins/update-admin/update-admin.component';
import { SingleBlogComponent } from './main/single-blog/single-blog.component';
import { AdminSingleBlogComponent } from './admin/admin_blogs/admin-single-blog/admin-single-blog.component';
import { LoginComponent } from './admin/login/login.component';

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
  { path: 'single_blog/:id', component: SingleBlogComponent },
  // Admin Route
  { path: "admin", component: AdminHomeComponent },
  { path: "admin/home", component: AdminHomeComponent },
  // Services
  { path: "create_services", component: CreateServicesComponent },
  { path: "list_services", component: ListServicesComponent },
  { path: "update_services/:id", component: UpdateServicesComponent },
  // Blogs
  { path: "create_blog", component: CreateBlogComponent },
  { path: "list_blog", component: ListBlogComponent },
  { path: "update_blog/:id", component: UpdateBlogComponent },
  { path: "admin_single_blog/:id", component: AdminSingleBlogComponent },
  // Users
  { path: "create_admin", component: CreateAdminComponent },
  { path: "list_admin", component: ListAdminComponent },
  { path: "update_admin", component: UpdateAdminComponent },
  { path: "login", component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
