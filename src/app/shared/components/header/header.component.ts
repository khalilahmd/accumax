import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

interface MenuItem {
  text?: string;
  action?: () => void;
  icon?: string;
  submenu?: MenuItem[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatSidenav,
    MatListModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav
  username = 'John';
  isDropdownOpen = false;

  menuItems: MenuItem[] = [
    {
      text: 'Change Password',
      action: () => this.changePassword()
    },
    {
      text: 'Update Your Profile',
      action: () => this.changePassword()
    },  
    {
      text: 'Device Recognition',
      action: () => this.changePassword()
    },
    {
      text: 'New User Tour',
      action: () => this.changePassword()
    },   
    {
      text: 'What\'s New Tour',
      action: () => this.changePassword()
    },
    {
      text: 'Help',
      action: () => this.changePassword()
    },
    {
      text: 'About',
      action: () => this.changePassword()
    },
    {
      text: 'Logout',
      action: () => this.logout(),
      icon: 'logout'
    },
    {
      text: 'More Options',
      submenu: [
        {
          text: 'Option 1',
          action: () => this.option1()
        },
        {
          text: 'Option 2',
          action: () => this.option2()
        }
      ]
    }
  ];

  constructor(private router: Router) {}

  toggleSidebar() {
      this.sidenav.toggle();
  }

  logout = () => {
    this.router.navigate(['/login'])
  }

  action1 = () => {
    alert('action1')
  }

  action2 = () => {
    alert('action2')
  }

  action3 = () => {
    alert('action3')
  }

  changePassword = () => {
    console.log('Change Password');
  }

  option1 = () => {
    console.log('Option 1');
  }

  option2 = () => {
    console.log('Option 2');
  }
}
