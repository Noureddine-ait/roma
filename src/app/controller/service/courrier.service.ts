import {Injectable} from '@angular/core';
import {Courrier} from '../model/courrier.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CourrierService {

  private _url = environment.baseUrl + 'courrier/';
  private _items: Array<Courrier>;
  private _selected: Courrier;
  private _selectes: Array<Courrier>;

  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;


  constructor(private http: HttpClient) {
  }


  public findAll(): Observable<Array<Courrier>> {
    return this.http.get<Array<Courrier>>(this._url);
  }


  public save(): Observable<Courrier> {
    return this.http.post<Courrier>(this._url, this.selected);
  }


  public edit(): Observable<Courrier> {
    return this.http.put<Courrier>(this._url, this.selected);
  }


  public deleteByReference(): Observable<number> {
    return this.http.delete<number>(this._url + 'ref/' + this.selected.ref);
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

  get items(): Array<Courrier> {
    return this._items;
  }

  set items(value: Array<Courrier>) {
    this._items = value;
  }

  get selected(): Courrier {
    if (this._selected == null ){
      this._selected = new Courrier();
    }
    return this._selected;
  }

  set selected(value: Courrier) {
    this._selected = value;
  }

  get selectes(): Array<Courrier> {
    return this._selectes;
  }

  set selectes(value: Array<Courrier>) {
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
