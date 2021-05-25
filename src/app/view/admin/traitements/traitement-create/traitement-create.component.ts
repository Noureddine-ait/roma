import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {TraitementCourrierService} from '../../../../controller/service/traitement-courrier.service';
import {TraitementCourrier} from '../../../../controller/model/traitement-courrier.model';

@Component({
  selector: 'app-traitement-create',
  templateUrl: './traitement-create.component.html',
  styleUrls: ['./traitement-create.component.css']
})
export class TraitementCreateComponent implements OnInit {

  constructor(private messageService: MessageService, private service: TraitementCourrierService) { }

  ngOnInit(): void {
  }



  public hideCreateDialog() {
    this.createDialog  = false ;
    this.submitted = false ;
  }

public save() {
    this.submitted = true;
    if (this.selected.ref.trim()) {
      this.service.save().subscribe(data => {
        this.items.push({...data});
        this.messageService.add({
          severity: 'success',
          summary: 'successful',
          detail: 'succes',
          life: 3000
        });
      });
      this.createDialog  = false;
      this.selected = new TraitementCourrier();
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


  get items(): Array<TraitementCourrier>{
    return this.service.items;
  }

  set items(value: Array<TraitementCourrier>)  {
    this.service.items = value;
  }


  get selectes(): Array<TraitementCourrier>{
    return this.service.selectes;
  }

  set selectes(value: Array<TraitementCourrier>)  {
    this.service.selectes = value;
  }
  get selected(): TraitementCourrier {
    return this.service.selected;
  }


  set selected(value: TraitementCourrier) {
    this.service.selected = value;
  }
}
