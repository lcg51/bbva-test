import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getStorage(key: string) {
    return JSON.parse(sessionStorage.getItem(key));
  }

  public setStorage(key: string, data: any) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  public removeStorage(key: string) {
    sessionStorage.removeItem(key);
  }
}
