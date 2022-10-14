import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { SettingsComponent } from './components/settings/settings.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  faGear = faGear;
  title = 'pomodoro';

  constructor(public dialog: MatDialog, public themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.onUpdateColor('red');
    this.themeService.onUpdateFont('roboto');
    this.themeService.onUpdateLightMode(true);
  }

  onOpenSettings() {
    this.dialog.open(SettingsComponent, {
      width: '600px',
    });
  }
}
