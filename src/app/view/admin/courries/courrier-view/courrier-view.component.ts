import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {Courrier} from '../../../../controller/model/courrier.model';
import {CourrierService} from '../../../../controller/service/courrier.service';


@Component({
  selector: 'app-courrier-view',
  templateUrl: './courrier-view.component.html',
  styleUrls: ['./courrier-view.component.css']
})
export class CourrierViewComponent implements OnInit {

  constructor(private messageService: MessageService, private service: CourrierService) { }

  ngOnInit(): void {
  }


  public hideViewDialog() {
    this.viewDialog  = false ;
  }




  get viewDialog(): boolean {
    return this.viewDialog;
  }
  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }
  get selected(): Courrier {
    return this.service.selected;
  }
  set selected(value: Courrier) {
    this.service.selected = value;
  }

}
