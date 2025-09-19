import { Component, signal } from '@angular/core';
import { HomePage } from './home-page/home-page';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-root',
  imports: [HomePage,MatSidenavModule,
    // BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('Trinexa');
}
