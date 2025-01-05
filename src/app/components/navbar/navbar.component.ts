import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
  imports: [Menubar, CommonModule],
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-home',
              command: () => {
                this.router.navigate(['/home']);
              }
          },
          {
              label: 'EndPointConsumption',
              icon: 'pi pi-link',
              command: () => {
                  this.router.navigate(['/end-point-consumption']);
              }
          },
      ];
  }
}
