import { Component } from '@angular/core';
import packageJson from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cd-paper-gitlabflow';
  version = packageJson.version;
}
