import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { AuthService } from '../../services/auth.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Artist } from '../../Artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SpotifyService, AuthService]
})

export class SearchComponent implements OnInit {

  searchStr: string;
  authToken: any;
  private searchRes: Artist[];

  constructor(private spotifyService: SpotifyService,
    private authService: AuthService,
    private sessionStorageService: SessionStorageService) {

  }

  searchMusic() {
    this.authToken = this.sessionStorageService.retrieve('authToken');
    if (!this.authToken || (new Date() > new Date(this.authToken.expires))) {
      this.authService.authenticate();
    }

    this.spotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        console.log(res.artists.items);
        this.searchRes = res.artists.items;
      });
  }

  ngOnInit() {
    this.authToken = this.sessionStorageService.retrieve('authToken')
    if (!this.authToken || (new Date() > new Date(this.authToken.expires))) {
      this.authService.authenticate();
    }
  }

}
