import {Injectable} from '@angular/core';
import {ConsigneCourrier} from '../model/consigne-courrier.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsigneCourrierService {

  private _url = environment.baseUrl + 'consigne-courrier/';
  private _items: Array<ConsigneCourrier>;
  private _selected: ConsigneCourrier;
  private _selectes: Array<ConsigneCourrier>;

  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;


  constructor(private http: HttpClient) {
  }


  public findAll(): Observable<Array<ConsigneCourrier>> {
    return this.http.get<Array<ConsigneCourrier>>(this._url);
  }


  public save(): Observable<ConsigneCourrier> {
    return this.http.post<ConsigneCourrier>(this._url, this.selected);
  }


  public edit(): Observable<ConsigneCourrier> {
    return this.http.put<ConsigneCourrier>(this._url, this.selected);
  }


  public deleteByReference(): Observable<number> {
    return this.http.delete<number>(this._url + 'reference/' + this.selected.ref);
  }




  public deleteMultipleByReference(): Observable<number> {
    return this.http.post<number>(this._url + 'delete-multiple-by-reference' , this.selectes);
  }


  public findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }



  public deleteIndexById(id: number) {
    this.items.splice(this.findIndexById(id), 1);
  }



  public deleteMultipleIndexById() {
    for (const item of this.selectes){
      this.deleteIndexById(item.id);
    }
  }


  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get items(): Array<ConsigneCourrier> {
    return this._items;
  }

  set items(value: Array<ConsigneCourrier>) {
    this._items = value;
  }

  get selected(): ConsigneCourrier {
    return this._selected;
  }

  set selected(value: ConsigneCourrier) {
    this._selected = value;
  }

  get selectes(): Array<ConsigneCourrier> {
    return this._selectes;
  }

  set selectes(value: Array<ConsigneCourrier>) {
    this._selectes = value;
  }

  get createDialog(): boolean {
    return this._createDialog;
  }

  set createDialog(value: boolean) {
    this._createDialog = value;
  }

  get editDialog(): boolean {
    return this._editDialog;
  }

  set editDialog(value: boolean) {
    this._editDialog = value;
  }

  get viewDialog(): boolean {
    return this._viewDialog;
  }

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

}
