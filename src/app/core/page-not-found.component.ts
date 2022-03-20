import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="container">
      <h2 class="text-center">Página não encontrada!</h2>
      <p-image class="text-center" src="assets/img/page-not-found.jpg" alt="page-not-found" width="400"></p-image>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
