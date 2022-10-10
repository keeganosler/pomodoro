import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsComponent } from './components/settings/settings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pomodoro';

  constructor(public dialog: MatDialog) {}

  onOpenSettings() {
    this.dialog.open(SettingsComponent, {
      width: '600px',
    });
  }
}
