interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'JPweZP1u1sA9EkyPNFYqxpMFcXp1N3qa',
  domain: 'blax.auth0.com',
  callbackURL: 'http://localhost:4200/callback',
  apiUrl: 'https://api.myside.com'
};
