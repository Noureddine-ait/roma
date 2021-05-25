import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {ConsigneCourrierService} from '../../../../controller/service/consigne-courrier.service';
import {ConsigneCourrier} from '../../../../controller/model/consigne-courrier.model';

@Component({
  selector: 'app-consigne-create',
  templateUrl: './consigne-create.component.html',
  styleUrls: ['./consigne-create.component.css']
})
export class ConsigneCreateComponent implements OnInit {

  constructor(private messageService: MessageService, private service: ConsigneCourrierService) { }

  ngOnInit(): void {
  }

  public hideCreateDialog() {
    this.createDialog  = false ;
    this.submitted = false ;
  }


  public save() {
    this.submitted = true;
    if(this.selected.ref.trim()) {
      this.service.save().subscribe(data => {
        this.items.push({...data});
        this.messageService.add({
          severity: 'success',
          summary: 'successful',
          detail: 'ConsigneCourrier Created',
          life: 3000
        });
      });
        this.createDialog  = false;
        this.selected = new ConsigneCourrier();
      }
    }










  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }

  get viewDialog(): boolean {
    return this.viewDialog;
  }
  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }


  get items(): Array<ConsigneCourrier>{
    return this.service.items;
  }

  set items(value: Array<ConsigneCourrier>)  {
    this.service.items = value;
  }


  get selectes(): Array<ConsigneCourrier>{
    return this.service.selectes;
  }

  set selectes(value: Array<ConsigneCourrier>)  {
    this.service.selectes = value;
  }
  get selected(): ConsigneCourrier {
    return this.service.selected;
  }


  set selected(value: ConsigneCourrier) {
    this.service.selected = value;
  }

}
