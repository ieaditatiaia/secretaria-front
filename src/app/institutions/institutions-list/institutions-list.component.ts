import { Component, OnInit } from '@angular/core';
import { InstitutionsService } from '../institutions.service';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions-list.component.html'
})
export class InstitutionsListComponent implements OnInit {

  constructor(private is: InstitutionsService) { }

  ngOnInit(): void {
  }

}
