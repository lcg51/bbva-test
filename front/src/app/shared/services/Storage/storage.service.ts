import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {}

  /**
   * Returns the value of the key of the session storage.
   *
   *
   * @param key - The key of the storage setted on the browser
   * @returns The value of the key in the session storage
   */
  public getStorage(key: string) {
    return JSON.parse(sessionStorage.getItem(key));
  }

  /**
   * Sets the sum of two numbers.
   *
   *
   * @param key - The key from the sessionstorage to create
   * @param data- An object with the data to set in the storage
   * @returns The sum of `x` and `y`
   */
  public setStorage(key: string, data: object) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  public setStorageString(key: string, data: string) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  /**
   * Removes the key from the storage.
   *
   *
   * @param key - The key of the sessionstorage to remove
   */
  public removeStorage(key: string) {
    sessionStorage.removeItem(key);
  }
}
