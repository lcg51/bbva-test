import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  public setStorage(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
