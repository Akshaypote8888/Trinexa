import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from "@angular/material/sidenav";
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-header',
  imports: [MatSidenavModule, MatCheckboxModule, FormsModule, MatButtonModule, MatToolbarModule, MatButtonModule, MatIconModule, FlexLayoutModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
  
})
export class Header {
  events: string[] = [];
  opened: boolean = false;

}
