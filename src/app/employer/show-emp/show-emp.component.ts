import { Employer } from './../../models/employer/employer.model.';
import { ShareService } from './../../share.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
    selector: 'app-show-emp',
    templateUrl: './show-emp.component.html',
    styleUrls: ['./show-emp.component.scss'],
})
export class ShowEmpComponent implements OnInit, AfterViewInit {
    constructor(
        private service: ShareService,
        private paginator: MatPaginator
    ) {}
    EmployerList: any = [];
    ActiveModal: boolean = false;
    modalTitle: string = '';
    emp: any;
    ngOnInit(): void {
        this.fetchEmployerList();
    }

    displayedColumns: string[] = [
        'name',
        'address',
        'category',
        'location',
        'contact_name',
        'contact_email',
        'info_employer',
    ];
    dataSource = new MatTableDataSource<Employer>(this.EmployerList);

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    addClick() {
        this.emp = {
            id: 0,
            name: '',
            address: '',
            category: '',
            location: '',
            contact_name: '',
            contact_email: '',
            info_employer: '',
            logo: '',
            images: [],
            tags: [],
        };
        this.modalTitle = 'Add Employer';
        this.ActiveModal = true;
    }

    editClick(item: any) {
        this.emp = item;
        this.modalTitle = 'Edit Employer';
        this.ActiveModal = true;
    }
    deleteClick(item: any) {
        if (confirm('Are you sure??')) {
            this.service.deleteEmployer(item).subscribe((data) => {
                alert(data.toString());
                this.fetchEmployerList();
            });
        }
    }
    closeClick() {
        this.ActiveModal = false;
        this.fetchEmployerList();
    }
    fetchEmployerList() {
        this.service.getEmployerList().subscribe((data) => {
            this.EmployerList = data;
        });
    }
}
