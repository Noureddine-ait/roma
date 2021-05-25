import { Component, OnInit } from '@angular/core';

import {MessageService} from 'primeng/api';
import {TraitementCourrierService} from '../../../../controller/service/traitement-courrier.service';
import {TraitementCourrier} from '../../../../controller/model/traitement-courrier.model';

@Component({
  selector: 'app-traitement-view',
  templateUrl: './traitement-view.component.html',
  styleUrls: ['./traitement-view.component.css']
})
export class TraitementViewComponent implements OnInit {

  constructor(private messageService: MessageService, private service: TraitementCourrierService) { }

  ngOnInit(): void {
  }
  public hideViewDialog() {
    this.viewDialog  = false ;
  }




  get viewDialog(): boolean {
    return this.viewDialog;
  }
  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }
  get selected(): TraitementCourrier {
    return this.service.selected;
  }
  set selected(value: TraitementCourrier) {
    this.service.selected = value;
  }

}
