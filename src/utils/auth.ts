export default class AuthController {
  private storage: Storage;
  constructor(storage: Storage) {
    this.storage = storage;
  }

  getToken() {
    return this.storage.getItem('token');
  }

  setToken(token: string) {
    return this.storage.setItem('token', token);
  }

  removeToken() {
    this.storage.removeItem('token');
  }
}
