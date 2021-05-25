import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {CourrierService} from '../../../../controller/service/courrier.service';
import {Courrier} from '../../../../controller/model/courrier.model';


@Component({
  selector: 'app-courrier-edit',
  templateUrl: './courrier-edit.component.html',
  styleUrls: ['./courrier-edit.component.css']
})
export class CourrierEditComponent implements OnInit {

  constructor(private messageService: MessageService, private service: CourrierService) { }

  ngOnInit(): void {
  }

  public edit() {
    this.submitted = true;
    if (this.selected.ref.trim()) {
      if (this.selected.id) {
        this.items[this.service.findIndexById(this.selected.id)] = this.selected;
        this.service.edit().subscribe(data => {
          this.selected = data;
          this.messageService.add({
            severity: 'success',
            summary: 'successful',
            detail: 'Mise a jour avec succes ',
            life: 3000
          });
        });
        this.editDialog = false;
        this.selected = new Courrier();
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


  get items(): Array<Courrier>{
    return this.service.items;
  }

  set items(value: Array<Courrier>)  {
    this.service.items = value;
  }


  get selectes(): Array<Courrier>{
    return this.service.selectes;
  }

  set selectes(value: Array<Courrier>)  {
    this.service.selectes = value;
  }
  get selected(): Courrier {
    return this.service.selected;
  }


  set selected(value: Courrier) {
    this.service.selected = value;
  }

}
