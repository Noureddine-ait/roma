import {User} from './user.model';
import {CategorieEntiteAdmin} from './categorie-entite-admin.model';

export class EntiteAdmin {
  public id: number;
  public libelle: string;
  public code: string;
  public responsable: User;
  public categorieEntiteAdmin: CategorieEntiteAdmin;
  public entiteAdminSuperieur: EntiteAdmin;
}
