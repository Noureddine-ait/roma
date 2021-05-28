import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ConsigneCourrierService} from '../../../../controller/service/consigne-courrier.service';
import {ConsigneCourrier} from '../../../../controller/model/consigne-courrier.model';
import {CourrierService} from "../../../../controller/service/courrier.service";

@Component({
    selector: 'app-consigne-list',
    templateUrl: './consigne-list.component.html',
    styleUrls: ['./consigne-list.component.css']
})
export class ConsigneListComponent implements OnInit {
    cols: any[];
    // tslint:disable-next-line:max-line-length
    constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ConsigneCourrierService) { }


    ngOnInit(): void {
        this.initCol();
        this.service.findAll().subscribe(data => this.items = data);
    }


    private initCol() {
        this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'courrier', header: 'Courrier'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'dateConsigne', header: 'DateConsigne'},
            {field: 'responsable', header: 'Responsable'},
            {field: 'entiteAdmin', header: 'EntiteAdmin'}
        ];
    }


    public delete(selected: ConsigneCourrier) {
        this.selected = selected;
        this.confirmationService.confirm({
            message: 'Are you sure ' + selected.ref + '?',
            header: 'confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteByReference().subscribe(data => {
                    this.items = this.items.filter(val => val.id !== this.selected.id);
                    this.selected = new ConsigneCourrier();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'successful',
                        detail: 'suppression avec succes',
                        life: 3000
                    });
                });
            }
        });
    }


    public deleteMultiple() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete all selected courriers ?',
            header: 'confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteMultipleByReference().subscribe(data => {
                    this.service.deleteMultipleIndexById();
                    this.selectes = null;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'successful',
                        detail: 'suppression avec succes ',
                        life: 3000
                    });
                });
            }
        });
    }


    public openCreate() {
        this.selected = new ConsigneCourrier();
        this.submitted = false;
        this.createDialog = true;
    }


    public edit(consigneCourrier: ConsigneCourrier) {
        this.selected = {...consigneCourrier};
        this.editDialog = true;
    }


    public view(consigneCourrier: ConsigneCourrier) {
        this.selected = {...consigneCourrier};
        this.editDialog = true;
    }


    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get viewDialog(): boolean {
        return this.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    set submitted(value: boolean) {
        this.service.submitted = value;
    }


    get items(): Array<ConsigneCourrier> {
        return this.service.items;
    }

    set items(value: Array<ConsigneCourrier>) {
        this.service.items = value;
    }


    get selectes(): Array<ConsigneCourrier> {
        return this.service.selectes;
    }

    set selectes(value: Array<ConsigneCourrier>) {
        this.service.selectes = value;
    }

    get selected(): ConsigneCourrier {
        return this.service.selected;
    }


    set selected(value: ConsigneCourrier) {
        this.service.selected = value;
    }


}
