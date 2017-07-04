import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LocalStorage, SessionStorage } from 'ngx-webstorage';
import { Config } from '../Config';

@Injectable()
export class AuthService {
  private clientId: string;
  private redirect_uri: string = 'http://localhost:4200/auth/?';
  private authUrl = `https://accounts.spotify.com/authorize/?client_id=${this.config.clientId}&response_type=token&redirect_uri=${encodeURIComponent(this.redirect_uri)}&scope=user-top-read`;

  constructor(private http: Http, private config: Config) { }

  public authenticate() {
    window.location.href = this.authUrl;
  }

}
