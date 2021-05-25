import {EntiteAdmin} from './entite-admin.model';
import {User} from './user.model';
import {Courrier} from './courrier.model';

export class ConsigneCourrier {
  public id: number;
  public courrier: Courrier;
  public ref: string;
  public libelle: string;
  public dateConsigne: Date;
  public responsable: User;
  public entiteAdmin: EntiteAdmin;
}
