import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  items = [
    {
      label: 'Inicio',
      routerLink: '/pages/home',
      queryParams: { recent: 'true' },
    },
    { label: 'Transparencia y acceso a la información pública' },
    { label: 'Atención y servicios a la ciudadanía' },
    {
      label: 'Normatividad',
      items: [
        { label: 'Normas que nos rigen', routerLink: '' },
        { label: 'Decretos', routerLink: '' },
        { label: 'Resoluciones', routerLink: '' },
      ],
    },
    {
      label: 'Catasig',
      items: [
        {
          label: 'Quienes somos',
          routerLink: '/pages/catasig',
        },
        {
          label: 'Únete a nosotros',
          routerLink: '/pages/catasig/join-us',
        },
        {
          label: 'Observatorio técnico Catastral',
          routerLink: '/pages/catasig/otc-catasig',
        },
        {
          label: 'Adopción MIPG',
          url: 'http://catasig.gov.co/RES002.pdf',
        },
        {
          label: 'Acto administrativo',
          url: 'http://catasig.gov.co/acto.pdf',
        },
        {
          label: 'Comité control interno',
          url: 'http://catasig.gov.co/RES003.pdf',
        },
        {
          label: 'Informe control interno',
          url: 'http://catasig.gov.co/informe.pdf',
        },
        {
          label: 'Manual contratación',
          url: 'http://catasig.gov.co/manualcontratacion.pdf',
        },
      ],
    },
    /*
    {
        label: ' ',
        items: [{
                label: 'New', 
                icon: 'pi pi-fw pi-plus',
                items: [
                    {label: 'Project'},
                    {label: 'Other'},
                ]
            },
            {label: 'Open'},
            {label: 'Quit'}
        ]
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {label: 'Delete', icon: 'pi pi-fw pi-trash'},
            {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
        ]
    }*/
  ];
}
