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
  showText = true;
  activeRoute: string | null = null;
  menuCategories = [
    {
      name: 'Client Portal',
      isOpen: false,
      items: [
        { icon: 'home', name: 'Home', route: '/home' },
        { icon: 'info', name: 'On Boarding', route: '/on-boarding' },
        { icon: 'download_file', name: 'From CPA', route: '/from-cpa' },
        { icon: 'upload_file', name: 'To CPA', route: '/to-cpa' },
        { icon: 'person', name: 'My Profile', route: '/profile' },
        { icon: 'support', name: 'Help', route: '/help' },
      ]
    },
    {
      name: 'CPA Portal',
      isOpen: false,
      items: [
        { icon: 'home', name: 'Home', route: '/home' },
        { icon: 'download_file', name: 'From Client', route: '/from-client' },
        { icon: 'upload_file', name: 'To Client', route: '/to-client' },
        { icon: 'smart_toy', name: 'CPA Bot', route: '/cpa-bot' },
        { icon: 'smart_toy', name: 'Content Admin', route: '/content-admin' },
        { icon: 'group', name: 'User-Admin', route: '/user-admin' },
        { icon: 'support', name: 'Help', route: '/help' }
      ]
    },
    // {
    //   name: 'User Management',
    //   isOpen: false,
    //   items: [
    //     { icon: 'person', name: 'My Profile', route: '/profile' },
    //     { icon: 'group', name: 'Users', route: '/users' }
    //   ]
    // },
    // {
    //   name: 'Support',
    //   isOpen: false,
    //   items: [
    //     { icon: 'support', name: 'Support', route: '/support' }
    //   ]
    // }
  ];

  constructor(private readonly router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.activeRoute = this.router.url;
      });
  }

  toggleText() {
    this.showText = !this.showText;
  }

  trackByFn(index: number, item: any): number {
    return index;
  }

  onNavItemClick(item: any) {
    this.router.navigate([item.route]);
  }

  isCategoryActive(category: any): boolean {
    return category.items.some((item: any) => this.activeRoute?.includes(item.route));
  }
}
