import { Component } from '@angular/core';
import { AuthenticationService } from './core/services/authentication.service';
import { AppSettingsService } from '../app/core/app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Car shop';

  constructor(public authService: AuthenticationService, settingsService: AppSettingsService) {
    settingsService.loadSettings();
  }
}
