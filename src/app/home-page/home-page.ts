import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Header } from '../header/header';

@Component({
  selector: 'app-home-page',
  imports: [MatSlideToggleModule, Header],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
