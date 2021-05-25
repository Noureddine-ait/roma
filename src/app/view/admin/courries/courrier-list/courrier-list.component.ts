import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CourrierService} from '../../../../controller/service/courrier.service';
import {Courrier} from '../../../../controller/model/courrier.model';


@Component({
  selector: 'app-courrier-list',
  templateUrl: './courrier-list.component.html',
  styleUrls: ['./courrier-list.component.css']
})
export class CourrierListComponent implements OnInit {
   cols: any[];
  // tslint:disable-next-line:max-line-length
   constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: CourrierService) { }
  ngOnInit(): void {
    this.initCol();
    this.service.findAll().subscribe(data => this.items = data);
  }
  private initCol() {
    this.cols = [
      {field: 'id' , header: 'Id' },
      {field: 'typeCourrier' , header: 'TypeCourrier' },
      {field: 'coordinateur' , header: 'Coordinateur' },
      {field: 'sousDossier' , header: 'SousDossier' },
      {field: 'ref' , header: 'Reference' },
      {field: 'annee' , header: 'Annee' },
      {field: 'indice' , header: 'Indice' },
      {field: 'numOrder' , header: 'NumOrder' },
      {field: 'dateCourrier' , header: 'DateCourrier' },
      {field: 'dateBureauOrdre' , header: 'DateBureauOrdre' },
      {field: 'objet' , header: 'Objet' },
      {field: 'sousTheme' , header: 'SousTheme' },
      {field: 'categorieCourrier' , header: 'CategorieCourrier' },
      {field: 'expediteur' , header: 'Expediteur' },
      {field: 'typeExpediteur' , header: 'TypeExpediteur' }
    ];
  }
  public delete(selected: Courrier){
    this.selected = selected;
    this.confirmationService.confirm ({
      message: 'Are you sure ' + selected.ref + '?',
      header: 'confirm' ,
      icon: 'pi pi-exclamation-triangle' ,
      accept: () => {
        this.service.deleteByReference().subscribe( data => {
          this.items = this.items.filter( val => val.id !== this.selected.id);
          this.selected = new  Courrier();
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
      message: 'Are you sure you want to delete all selected courriers ?',
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
    this.selected = new Courrier();
    this.submitted = false ;
    this.createDialog  = true;
  }



  public edit(courrier: Courrier) {
    this.selected = {...courrier};
    this.editDialog = true;
  }
  public view(courrier: Courrier) {
    this.selected = {...courrier};
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
