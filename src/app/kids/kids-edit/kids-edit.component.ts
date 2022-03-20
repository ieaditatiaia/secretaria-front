import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { InstitutionsService } from 'src/app/institutions/institutions.service';
import { Kid } from 'src/app/core/models';
import { KidsService } from '../kids.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-kids-edit',
  templateUrl: './kids-edit.component.html'
})
export class KidsEditComponent implements OnInit {

  kid: Kid = new Kid();
  locales: any[] = [];

  genders = [
    {name: "Feminino", code: "F"},
    {name: "Masculino", code: "M"}
  ];

  certificate = [
    {name: "EMITIDO", code: "EMITIDO"},
    {name: "PENDENTE", code: "PENDENTE"}
  ];

  constructor(
    private router: Router,
    private ks: KidsService,
    private ms: MessageService,
    private is: InstitutionsService,
    private es: ErrorHandlerService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.loadLocales();

    if(id) {
      this.loadKid(id);
    }
  }

  get edition() {
    return Boolean(this.kid.id);
  }

  loadKid(id: string) {
    this.ks.load(id)
      .then((response:any) => {
        this.kid = response;
        this.loadLocalesEdit();
      })
  }

  loadLocales() {
    return this.is.listAll()
    .then(locales => {
      this.locales = locales.map((l:any) => ({name: l.ecclesiasticalName, code: l.id}))
    }).catch(error => this.es.handle(error));
  }

  loadLocalesEdit() {
    return this.is.listAll()
    .then(locales => {
      this.locales = locales.map((l:any) => ({name: l.ecclesiasticalName, code: l.ecclesiasticalName}))
    }).catch(error => this.es.handle(error));
  }

  save(form: NgForm) {
    if(this.edition) {
      this.ks.edit(this.kid)
        .catch(error => this.es.handle(error));
        this.ms.add({ severity: 'success', detail: 'Cadastro atualizado com sucesso!' })

    } else if(!this.edition) {
      this.ks.save(this.kid)
        .catch(error => this.es.handle(error));
      this.ms.add({ severity: 'success', detail: 'Cadastro realizado com sucesso!' })
    }
    this.cancel(form);
  }

  cancel(form: NgForm) {
    form.reset();
    this.router.navigate(['kids']);
  }

}
