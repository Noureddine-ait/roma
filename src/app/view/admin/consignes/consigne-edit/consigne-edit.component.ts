import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {ConsigneCourrierService} from '../../../../controller/service/consigne-courrier.service';
import {ConsigneCourrier} from '../../../../controller/model/consigne-courrier.model';

@Component({
  selector: 'app-consigne-edit',
  templateUrl: './consigne-edit.component.html',
  styleUrls: ['./consigne-edit.component.css']
})
export class ConsigneEditComponent implements OnInit {

  constructor(private messageService: MessageService, private service: ConsigneCourrierService) { }

  ngOnInit(): void {
  }

  public edit() {
    this.submitted = true;
    if(this.selected.ref.trim()) {
      if(this.selected.id){
        this.items[this.service.findIndexById(this.selected.id)] = this.selected;
        this.service.edit().subscribe(data => {
          this.selected = data;
          this.messageService.add({
            severity: 'success',
            summary: 'successful',
            detail: 'ConsigneCourrier Updated',
            life: 3000
          });
        });
        this.editDialog  = false;
        this.selected = new ConsigneCourrier();
      }
    }
  }


  public hideEditDialog() {
      this.editDialog  = false ;

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
