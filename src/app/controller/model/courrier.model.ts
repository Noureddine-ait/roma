import {TypeCourrier} from './type-courrier.model';
import {SousDossier} from './sous-dossier.model';
import {SousTheme} from './sous-theme.model';
import {CategorieCourrier} from './categorie-courrier.model';
import {Expediteur} from './expediteur.model';
import {TypeExpediteur} from './type-expediteur.model';
import {EntiteAdmin} from './entite-admin.model';
import {TraitementCourrier} from './traitement-courrier.model';
import {ConsigneCourrier} from './consigne-courrier.model';

export class Courrier {
  public id: number;
  public typeCourrier: TypeCourrier;
  public coordinateur: EntiteAdmin;
  public sousDossier: SousDossier;
  public ref: string;
  public annee: string;
  public indice: string;
  public numOrder: string;
  public dateCourrier: Date;
  public dateBureauOrdre: Date;
  public objet: string;
  public sousTheme: SousTheme;
  public categorieCourrier: CategorieCourrier;
  public expediteur: Expediteur;
  public typeExpediteur: TypeExpediteur;
  public traitements = new Array<TraitementCourrier>();
  public consignes = new Array<ConsigneCourrier>();

}
