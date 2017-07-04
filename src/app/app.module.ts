import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { appRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { HttpModule } from '@angular/http';
import { Ng2Webstorage } from 'ngx-webstorage';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    AuthenticateComponent,
    ArtistComponent,
    AlbumComponent,
    RecommendationsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    Ng2Webstorage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
