import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-edit-emp',
    templateUrl: './add-edit-emp.component.html',
    styleUrls: ['./add-edit-emp.component.scss'],
})
export class AddEditEmpComponent implements OnInit {
    constructor() {}
    @Input() emp: any;
    name: string = '';
    address: string = '';
    category: string = '';
    location: string = '';
    contact_name: string = '';
    contact_email: string = '';
    info_employer: string = '';
    logo: string = '';
    images: Array<string> = [];
    tags: Array<string> = [];
    EmployerId: string = '';
    EmployerName: string = '';
    ngOnInit(): void {
        this.EmployerId = this.emp.EmployerId;
        this.EmployerName = this.emp.EmployerName;
    }
}
