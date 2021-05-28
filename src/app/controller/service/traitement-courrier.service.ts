import {Injectable} from '@angular/core';
import {TraitementCourrier} from '../model/traitement-courrier.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Courrier} from '../model/courrier.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraitementCourrierService {

  private _url = environment.baseUrl + 'traitement-courrier/';
  private _items: Array<TraitementCourrier>;
  private _selected: TraitementCourrier;
  private _selectes: Array<TraitementCourrier>;

  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;


  constructor(private http: HttpClient) {
  }


  public findAll(): Observable<Array<TraitementCourrier>> {
    return this.http.get<Array<TraitementCourrier>>(this._url);
  }


  public save(): Observable<TraitementCourrier> {
    return this.http.post<TraitementCourrier>(this._url, this.selected);
  }


  public edit(): Observable<TraitementCourrier> {
    return this.http.put<TraitementCourrier>(this._url, this.selected);
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

  get items(): Array<TraitementCourrier> {
    return this._items;
  }

  set items(value: Array<TraitementCourrier>) {
    this._items = value;
  }

  get selected(): TraitementCourrier {
    if (this._selected == null ) {
      this._selected = new TraitementCourrier();
    }
    return this._selected;
  }

  set selected(value: TraitementCourrier) {
    this._selected = value;
  }

  get selectes(): Array<TraitementCourrier> {
    return this._selectes;
  }

  set selectes(value: Array<TraitementCourrier>) {
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
