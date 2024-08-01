import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isOpen = true;
  showText = true;
  activeRoute: string | null = null;
  menuItems = [
    { icon: 'home', name: 'Home', route: '/home' },
    { icon: 'info', name: 'On Boarding', route: '/on-boarding' },
    { icon: 'smart_toy', name: 'CPA Bot', route: '/cpa-bot' },
    { icon: 'upload_file', name: 'From Firm', route: '/from-firm' },
    { icon: 'upload_file', name: 'To Firm', route: '/to-firm' },
    { icon: 'contact_mail', name: 'From Data Viewer', route: '/from-data-viewer' },
    { icon: 'person', name: 'My Profile', route: '/profile' },
    { icon: 'group', name: 'Users', route: '/users' },
    { icon: 'support', name: 'Support', route: '/support' },
  ];

  constructor(private readonly router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.activeRoute = this.router.url;
      });
  }
  // toggleSidebar() {
  //   this.isOpen = !this.isOpen;
  // }

  toggleText() {
    this.showText = !this.showText;
  }

  trackByFn(index: number, item: any): number {
    return index; // or item.id if your items have unique ids
  }

  onNavItemClick = (item: any) => {
    this.router.navigate([item.route]);
    // Additional logic if needed
  }
}