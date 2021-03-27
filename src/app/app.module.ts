import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AnimeWindowComponent } from './component/anime-window/anime-window.component';
import { NgxSplideModule } from 'ngx-splide';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatingModule } from 'ng-starrating';
import { SafePipe } from './safe.pipe';
import { SearchComponent } from './pages/search/search.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    AnimeWindowComponent,
    NavbarComponent,
    SafePipe,
    SearchComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSplideModule,
    IvyCarouselModule,
    FontAwesomeModule,
    RatingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
