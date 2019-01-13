import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-token-management',
  templateUrl: './token-management.component.html',
  styleUrls: ['./token-management.component.scss']
})
export class TokenManagementComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
    // this.authService.renewTokens();
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

}
