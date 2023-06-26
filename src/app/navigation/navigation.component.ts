import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  items!: MenuItem[];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/home'],
      },
      {
        label: 'Components',
        icon: 'pi pi-fw pi-box',
        items: [
          {
            label: 'Panel Menu',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/components/panel-menu'],
          },
        ],
      },
      {
        label: 'Navigation Test',
        icon: 'pi pi-fw pi-arrow-circle-right',
        routerLink: ['/navigation-test'],
      },
    ];
  }
}
