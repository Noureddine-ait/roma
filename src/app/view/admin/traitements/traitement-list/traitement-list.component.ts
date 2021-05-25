import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {TraitementCourrierService} from '../../../../controller/service/traitement-courrier.service';
import {TraitementCourrier} from '../../../../controller/model/traitement-courrier.model';


@Component({
  selector: 'app-traitement-list',
  templateUrl: './traitement-list.component.html',
  styleUrls: ['./traitement-list.component.css']
})
export class TraitementListComponent implements OnInit {
  cols: any[];
  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: TraitementCourrierService ) { }

  ngOnInit(): void {
    this.initCol();
    this.service.findAll().subscribe(data => this.items = data);
  }


  private initCol() {
    this.cols = [
      {field: 'id' , header: 'Id' },
      {field: 'courrier' , header: 'Courrier' },
      {field: 'libelle' , header: 'Libelle' },
      {field: 'dateTraitement' , header: 'DateTraitement' },
      {field: 'responsable' , header: 'Responsable' },
      {field: 'entiteAdmin' , header: 'EntiteAdmin' }
    ];
  }

  public delete(selected: TraitementCourrier){
    this.selected = selected;
    this.confirmationService.confirm ({
      message: 'Are you sure ' + selected.ref + '?',
      header: 'confirm' ,
      icon: 'pi pi-exclamation-triangle' ,
      accept: () => {
        this.service.deleteByReference().subscribe( data => {
          this.items = this.items.filter( val => val.id !== this.selected.id);
          this.selected = new  TraitementCourrier();
          this.messageService.add({
            severity: 'success',
            summary: 'successful',
            detail: 'suppression avec succes',
            life: 3000
          });
        });
      }
    });
  }


  public deleteMultiple() {
    this.confirmationService.confirm( {
      message: 'Are you sure you want to delete all selected  ?',
      header: 'confirm' ,
      icon: 'pi pi-exclamation-triangle' ,
      accept: () => {
        this.service.deleteMultipleByReference().subscribe( data => {
          this.service.deleteMultipleIndexById();
          this.selectes = null;
          this.messageService.add({
            severity: 'success',
            summary: 'successful',
            detail: 'suppression avec succes ',
            life: 3000
          });
        });
      }
    });
  }




  public openCreate() {
    this.selected = new TraitementCourrier();
    this.submitted = false ;
    this.createDialog  = true;
  }


  public edit(traitementCourrier: TraitementCourrier) {
    this.selected = {...traitementCourrier};
    this.editDialog  = true;
  }


  public view(traitementCourrier: TraitementCourrier) {
    this.selected = {...traitementCourrier};
    this.editDialog  = true;
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
