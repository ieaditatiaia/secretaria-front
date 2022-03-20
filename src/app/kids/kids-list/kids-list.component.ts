import { Component, OnInit, ViewChild} from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Kid } from 'src/app/core/models';
import { KidFilter, KidsService } from '../kids.service';

@Component({
  selector: 'app-kids-list',
  templateUrl: './kids-list.component.html'
})
export class KidsListComponent implements OnInit {

  kids: Kid[] = [];
  filter: KidFilter = new KidFilter();
  totalRegisters: number = 0;
  @ViewChild('table') grid: any;

  constructor(
    private ks: KidsService,
    private ms: MessageService,
    private cs: ConfirmationService,
    private es: ErrorHandlerService) { }

    ngOnInit() {
      this.search();
    }

    search(page = 0) {

    this.filter.page = page;

    this.ks.search(this.filter)
    .then(result => {
      this.totalRegisters = result.total
      this.kids = result.kids
    })
    .catch(error => this.es.handle(error));
  }

  confirmDelete(id: string): void {
    this.cs.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
          this.delete(id);
      }
    });
  }

  delete(id: string) {
    this.ks.delete(id)
      .then(() => {
        if (this.grid.first === 0) {
          this.search();
        } else {
          this.grid.reset();
        }
        this.ms.add({ severity: 'success', detail: 'Cadastro excluído com sucesso!' })
      })
      .catch(error => this.es.handle(error));
  }

  onChangePage(event: LazyLoadEvent) {
    const page = event!.first! / event!.rows!;
    this.search(page);
  }

  certificate(id: string) {
    this.ks.certificate(id)
      .then(report => {
        const url = window.URL.createObjectURL(report);
        window.open(url);
        this.search();
      })
  }


}
