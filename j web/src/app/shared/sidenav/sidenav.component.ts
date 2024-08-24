import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormsModule } from "@angular/forms"

@Component({
  selector: 'app-sidenav',
  standalone: true,
  // imports: [],
  imports: [MatSidenavModule, MatCheckboxModule, FormsModule, MatButtonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  // showFiller = false;

  events: string[] = [];
  opened: boolean = false;


}
