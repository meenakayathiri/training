import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobiledescriptionComponent } from './mobiledescription/mobiledescription.component';
import { MobileimageComponent } from './mobileimage/mobileimage.component';
import { MoviedescriptionComponent } from './moviedescription/moviedescription.component';
import { MovieimageComponent } from './movieimage/movieimage.component';


const routes: Routes = [
  
     {  
       path: '',  
       component: LoginComponent  
    },
    {  
      path: 'home',  
      component: HomeComponent  
   },
    {  
      path: 'movieimage',  
      component: MovieimageComponent  
   },
   {  
    path: 'moviedescription/:id',  
    component: MoviedescriptionComponent  
 },
 {  
  path: 'mobileimage',  
  component: MobileimageComponent  
},
{  
path: 'mobiledescription/:id',  
component: MobiledescriptionComponent  
}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
