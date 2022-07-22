import { Component, OnInit } from '@angular/core';
import { Employer } from '../core/models/employer.model.';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
    selector: 'app-employer',
    templateUrl: './employer.component.html',
    styleUrls: ['./employer.component.scss'],
})
export class EmployerComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
