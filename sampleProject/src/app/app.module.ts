import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieimageComponent } from './movieimage/movieimage.component';
import { MoviedescriptionComponent } from './moviedescription/moviedescription.component';
import { MobileimageComponent } from './mobileimage/mobileimage.component';
import { MobiledescriptionComponent } from './mobiledescription/mobiledescription.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MovieimageComponent,
    MoviedescriptionComponent,
    MobileimageComponent,
    MobiledescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
