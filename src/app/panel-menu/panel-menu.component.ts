import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-panel-menu',
  templateUrl: './panel-menu.component.html',
  styleUrls: ['./panel-menu.component.scss'],
})
export class PanelMenuComponent implements OnInit {
  items!: MenuItem[];
  focus: boolean = false;
  menuItems!: MenuItem[];
  menuItems$!: Observable<MenuItem[]>;

  constructor(private primengConfig: PrimeNGConfig, private router: Router) {}

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.focus = true;
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark',
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video',
              },
            ],
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link',
          },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left',
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right',
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify',
          },
        ],
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print',
                  },
                ],
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List',
              },
            ],
          },
        ],
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
    ];

    const menuItems = [
      {
        label: 'Home',
        icon: 'fas fa-home',
        command: (e: any) => this.triggerRouteChange(e, ['/landing']),
        // routerLink: ['/landing'],
      },
      {
        label: 'Settings',
        icon: 'fa fa-cog',
        items: [
          {
            label: 'Category Mapping Setup',
            styleClass: 'settings-link',
            command: (e: any) =>
              this.triggerRouteChange(e, ['/admin/category-mapping']),
            // routerLink: ['/admin/category-mapping'],
          },
          {
            label: 'Default Report Parameters',
            styleClass: 'settings-link',
            command: (e: any) =>
              this.triggerRouteChange(e, ['/admin/default-report-parameters']),
            // routerLink: ['/admin/default-report-parameters'],
          },
        ],
      },
      {
        label: 'Favorite Reports',
        icon: 'fa fa-star',
        items: [
          {
            label: 'View All Reports',
            icon: 'fa fa-search',
            styleClass: 'all-reports',
            command: (e: any) => this.triggerRouteChange(e, ['/all-reports']),
            // routerLink: ['/all-reports'],
          },
        ],
      },
      {
        label: 'Create New Report',
        icon: 'fa fa-plus',
        command: (e: any) => this.triggerRouteChange(e, ['/report-builder']),
        // routerLink: ['/report-builder'],
      },
      {
        label: 'My Reports',
        icon: 'fa fa-file-alt',
        items: [
          {
            label: 'View All Reports',
            icon: 'fa fa-search',
            styleClass: 'all-reports',
            command: (e: any) => this.triggerRouteChange(e, ['/all-reports']),
            // routerLink: ['/all-reports'],
          },
        ],
      },
      {
        label: 'Shared Reports',
        icon: 'fa fa-file-download',
        items: [
          {
            label: 'View All Reports',
            icon: 'fa fa-search',
            styleClass: 'all-reports',
            command: (e: any) => this.triggerRouteChange(e, ['/all-reports']),
            // routerLink: ['/all-reports'],
          },
        ],
      },
      {
        label: 'Standard Reports',
        icon: 'fa fa-folder',
        items: [
          {
            label: 'CashDownTitle',
            command: (e: any) =>
              this.triggerRouteChange(e, ['/reports', 1457, 1]),
            // routerLink: ['/reports', 1457, 1],
            styleClass: 'report-link',
          },
          {
            label: 'All Data by Month',
            command: (e: any) =>
              this.triggerRouteChange(e, ['/reports', 449, 1]),
            // routerLink: ['/reports', 449, 1],
            styleClass: 'report-link',
          },
          {
            label: 'All Data by Dealership',
            command: (e: any) =>
              this.triggerRouteChange(e, ['/reports', 450, 1]),
            // routerLink: ['/reports', 450, 1],
            styleClass: 'report-link',
          },
          {
            label: 'Dealership Composite Revi...',
            command: (e: any) => this.triggerRouteChange(e, ['/reports', 8, 1]),
            // routerLink: ['/reports', 8, 1],
            styleClass: 'report-link',
          },
          {
            label: 'Finance Report By Departm...',
            command: (e: any) => this.triggerRouteChange(e, ['/reports', 2, 1]),
            // routerLink: ['/reports', 2, 1],
            styleClass: 'report-link',
          },
          {
            label: 'View All Reports',
            command: (e: any) => this.triggerRouteChange(e, ['/all-reports']),
            // routerLink: ['/all-reports'],
            visible: true,
            icon: 'fa fa-search',
            styleClass: 'all-reports',
          },
        ],
      },
      {
        label: 'Scheduled Reports',
        icon: 'fas fa-calendar-alt',
        command: (e: any) => this.triggerRouteChange(e, ['/scheduled-reports']),
        // routerLink: ['/scheduled-reports'],
      },
      {
        label: 'Sent Emails',
        icon: 'fas fa-paper-plane',
        command: (e: any) => this.triggerRouteChange(e, ['/sent-reports']),
        // routerLink: ['/sent-reports'],
      },
      {
        label: 'Menu Dashboards',
        icon: 'fas fa-external-link-alt',
        url: 'http://localhost/SPA//#/reports/dealerDashboard',
        target: 'menu_maximtrak',
      },
    ];

    this.menuItems$ = of(menuItems);
    this.menuItems$.subscribe({ next: (mItems) => (this.menuItems = mItems) });
  }

  triggerRouteChange(e: any, routerLink: any[]) {
    console.log('attempting to navigate to:', routerLink);
    // Navigate to dummy route just to test navigation
    this.router.navigate(['/navigation-test']);
  }
}
