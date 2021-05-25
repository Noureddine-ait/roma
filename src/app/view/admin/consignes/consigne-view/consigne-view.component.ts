import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {ConsigneCourrierService} from '../../../../controller/service/consigne-courrier.service';
import {ConsigneCourrier} from '../../../../controller/model/consigne-courrier.model';

@Component({
  selector: 'app-consigne-view',
  templateUrl: './consigne-view.component.html',
  styleUrls: ['./consigne-view.component.css']
})
export class ConsigneViewComponent implements OnInit {

  constructor(private messageService: MessageService, private service: ConsigneCourrierService) { }

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
  get selected(): ConsigneCourrier {
    return this.service.selected;
  }
  set selected(value: ConsigneCourrier) {
    this.service.selected = value;
  }
}
