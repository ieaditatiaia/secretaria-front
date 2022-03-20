import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  items!: MenuItem[];

  ngOnInit(): void{
    this.items = [
      {
        label: 'Agenda',
        icon: 'pi pi-calendar',
        routerLink: '/',
      },
      {
        label: 'Membresia',
        icon: 'pi pi-shield',
        items: [
          {
            label: 'Cadastro',
            icon: 'pi pi-users',
          },
          {
            label: 'Credenciais',
            icon: 'pi pi-id-card',
          },
          {
            label: 'Carta de Mudança',
            icon: 'pi pi-envelope',
          },
          {
            separator:true
          },
          {
            label: 'Apresentação de Criança',
            icon: 'pi pi-book',
            routerLink: '/kids',
          }
        ]
      },
      {
        label: 'Liderança',
        icon: 'pi pi-sitemap',
        items: [
          {
            label: 'Congregações',
            icon: 'pi pi-home',
            routerLink: '/institutions'
          },
        ]
      },
      {
        label: 'Ministério',
        icon: 'pi pi-twitter',
        items: [
          {
            label: 'Frequência',
            icon: 'pi pi-check-square',
          },
          {
            label: 'Registro de Ata',
            icon: 'pi pi-inbox',
          },
          {
            label: 'Expedientes',
            icon: 'pi pi-paperclip',
          },
        ]
      },
      {
        label: 'Configurações',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Cargos',
            icon: 'pi pi-at',
          },
          {
            label: 'Fatos',
            icon: 'pi pi-bookmark',
          },
        ]
      },
    ]
  }

}

