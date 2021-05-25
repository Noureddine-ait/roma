import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-courries',
  templateUrl: './courries.component.html',
  styleUrls: ['./courries.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class CourriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
