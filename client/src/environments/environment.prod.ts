export class environment  {
  static production: false;
  static get baseUrlServer(): string
  {
    return process.env.NG_APP_GITPOD_WORKSPACE_URL.replace("https://","https://8080-")
  } 
};
