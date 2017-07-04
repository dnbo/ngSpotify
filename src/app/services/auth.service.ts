import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LocalStorage, SessionStorage } from 'ngx-webstorage';

@Injectable()
export class AuthService {
  private clientId: string = '5f8d4d0902604d6681b5fe86c92efddf';
  private redirect_uri: string = 'http://localhost:4200/auth/?';
  private authUrl = `https://accounts.spotify.com/authorize/?client_id=${this.clientId}&response_type=token&redirect_uri=${encodeURIComponent(this.redirect_uri)}`;

  constructor(private http: Http) { }

  public authenticate() {
    window.location.href = this.authUrl;
  }

}
