import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../core/services/local-storage.service';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  private url = 'http://localhost:4200/assets/app-settings.json';
  private storageKey = 'language';
  private defaultSettings = { language: 'EN'  };

  constructor(private http: HttpClient, private storage: LocalStorageService) { }

  loadSettings(): void {

    const savedSettings = this.storage.getItem(this.storageKey, null);

    if (!savedSettings) {
      this.http.get(this.url).pipe(
        retry(2),
        catchError(this.handleError.bind(this))
      ).subscribe((settings) => this.setSettings(settings));
    }
  }

  private handleError() {
    this.setSettings(this.defaultSettings);
    return throwError('Settings were not found; defaults are set.');
  }

  private setSettings(settings) {
    this.storage.setItem(this.storageKey, settings.language);
  }
}
