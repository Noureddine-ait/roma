import {Courrier} from './courrier.model';
import {User} from './user.model';
import {EntiteAdmin} from './entite-admin.model';

export class TraitementCourrier {
  public id: number;
  public courrier =  new Courrier();
  public ref: string;
  public libelle: string;
  public dateTraitement: Date;
  public responsable =  new User();
  public entiteAdmin =  new EntiteAdmin();
}
