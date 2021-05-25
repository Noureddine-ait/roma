import {Dossier} from './dossier.model';

export class SousDossier {
  public id: number;
  public libelle: string;
  public start: Date;
  public fin: Date;
  public dossier: Dossier;
}
