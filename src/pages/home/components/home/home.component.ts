import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  banners = [
    {
      name: 'service1',
      src: '../../../assets/home-slider/imagecampana.svg',
      route: '',
    },
    {
      name: 'service2',
      src: '../../../assets/home-slider/banner2.svg',
      route: '/pages/taxes/predial',
    },
    {
      name: 'service3',
      src: '../../../assets/home-slider/banner3.svg',
      route: '/pages/taxes/predial',
    },
  ];
  buttons = [
    { text: 'Agenda a un click', icon: 'pi pi-calendar-plus', route: '' },
    { text: 'Tienda Catasig', icon: 'pi pi-shopping-cart',  route: '' },
    { text: 'Catasig en línea', icon: 'pi pi-globe',  route: '' },
    { text: 'Ir a Catasig', icon: 'pi pi-external-link',  route: '' },
    { text: 'Observatorio Catasig', icon: 'pi pi-search',  route: '/pages/catasig/otc-catasig' },
  ];
  pqrs = [
    { name: 'PQRS', src: '../../../assets/home-pqrs/pqrs.svg', link: '' },
    { name: 'Trámite', src: '../../../assets/home-pqrs/tramite.svg', link: '' },
    {
      name: 'Guía de servicios',
      src: '../../../assets/home-pqrs/guia.svg',
      link: '',
    },
  ];
  cards = [
    { title: 'Portafolio de servicios', icon: 'pi pi-briefcase' },
    { title: 'Preguntas frecuentes', icon: 'pi pi-comments' },
    { title: 'Memorias de censo inmobiliario', icon: 'pi pi-home' },
    { title: 'Sedes y horarios', icon: 'pi pi-building' },
  ];
}
