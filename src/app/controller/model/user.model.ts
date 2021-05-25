import {EntiteAdmin} from './entite-admin.model';
import {Role} from './role.model';

export class User {

  public id: number;
  public login: string;
  public password: string;
  public nom: string;
  public prenom: string;
  public entiteAdmin: EntiteAdmin;
  public role: Role;
}
