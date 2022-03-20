import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private ms: MessageService) { }

  handle(errorResponse: any) {
    let msg: string = "";

    if(typeof errorResponse === 'string') {
      msg = errorResponse;
    } else {
      msg = "Erro ao processar serviço remoto. Tente novamente."
    }

    this.ms.add({ severity: 'error', detail: `${msg}` })
  }
}
