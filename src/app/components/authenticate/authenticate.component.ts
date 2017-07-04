import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
// import { QueryString } from 'query-string';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})

export class AuthenticateComponent implements OnInit {
  rootUrl: string = 'http://localhost:4200';

  constructor(private activatedRoute: ActivatedRoute, private sessionStorageService: SessionStorageService) { }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe((fragment: string) => {
      console.log('My hash fragment is here => ', fragment);
      const parsedFragment: any = this.parseFragment(fragment);
      const token = { 'token': parsedFragment.access_token, 'expires': Date.now() + 3600000 };
      this.sessionStorageService.store('authToken', token);
    });
    // this.activatedRoute.queryParams.subscribe((params: Params) => {
    //   console.log(params);
    // });
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   console.log(params);
    //   const userId = params['access_token'];
    //   console.log(userId);
    // });
  }


  private parseFragment(fragment: string) {
    const hash2Obj = fragment
      .split('&')
      .map(el => el.split('='))
      .reduce((pre, cur) => { pre[cur[0]] = cur[1]; return pre; }, {});

    return hash2Obj;
  }
  // private setToken() {
  //   // const parsedUrl = this.queryString.parse(window.location.hash);
  //   const expires = Date.now() + 3600000;
  //   this.sessionStorageService.store('authToken', { token: parsedUrl.access_token, expires: parsedUrl.expires_in });
  //   window.location.href = this.rootUrl;
  // }

}
