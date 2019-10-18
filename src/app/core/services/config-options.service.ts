import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private storageKey = 'ConfigOptions';

  constructor(private localStorage: LocalStorageService) { }

  setOptions(options: object): void {
    const currentOptions = this.localStorage.getItem(this.storageKey, {});
    const newOptions = Object.assign(currentOptions, options);
    this.localStorage.setItem(this.storageKey, newOptions);
  }

  getOptions(): object {
    return this.localStorage.getItem(this.storageKey, {});
  }
}
