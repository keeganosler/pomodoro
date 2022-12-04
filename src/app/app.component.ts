import { Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { COLORS, FONTS } from './app.contants';
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
    this.themeService.onUpdateColor(COLORS[1].className);
    this.themeService.onUpdateFont(FONTS[0].className);
    this.themeService.onUpdateLightMode(false);
  }

  onOpenSettings() {
    this.dialog.open(SettingsComponent, {
      width: '600px',
    });
  }
}
