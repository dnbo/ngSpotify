import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;
  private authToken: any;

  constructor(private http: Http, private authService: AuthService, private sessionStorageService: SessionStorageService) { }

  searchMusic(str: string, type = 'artist') {
    this.authToken = this.sessionStorageService.retrieve('authToken');
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type;

    const headers = new Headers();
    console.log(this.authToken);
    headers.append('Authorization', 'Bearer ' + this.authToken.token);

    const options = new RequestOptions({ headers: headers });

    return this.http.get(this.searchUrl, options)
      .map(res => res.json());
  }

  getArtist(artistId: string) {
    this.authToken = this.sessionStorageService.retrieve('authToken');
    this.artistUrl = `https://api.spotify.com/v1/artists/${artistId}`;

    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.authToken.token);

    const options = new RequestOptions({ headers: headers });

    return this.http.get(this.artistUrl, options)
      .map(res => res.json());
  }


  getAlbums(artistId: string) {
    this.authToken = this.sessionStorageService.retrieve('authToken');
    this.albumsUrl = `https://api.spotify.com/v1/artists/${artistId}/albums`;

    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.authToken.token);

    const options = new RequestOptions({ headers: headers });

    return this.http.get(this.albumsUrl, options)
      .map(res => res.json());
  }


  getAlbum(albumId: string) {
    this.authToken = this.sessionStorageService.retrieve('authToken');
    this.albumUrl = `https://api.spotify.com/v1/albums/${albumId}`;

    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.authToken.token);

    const options = new RequestOptions({ headers: headers });

    return this.http.get(this.albumUrl, options)
      .map(res => res.json());
  }
}

