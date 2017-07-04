import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SearchComponent } from './components/search/search.component';
import { HttpModule } from '@angular/http';
import { SpotifyService } from './services/spotify.service';
import { AuthService } from './services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SpotifyService, AuthService]
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    console.log('App started');

  }
}
