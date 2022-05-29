import { ShareService } from './../../share.service';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-show-emp',
    templateUrl: './show-emp.component.html',
    styleUrls: ['./show-emp.component.scss'],
})
export class ShowEmpComponent implements OnInit {
    constructor(private service: ShareService) {}
    EmployerList: any = [];
    ActiveModal: boolean = false;
    modalTitle: string = '';
    emp: any;
    ngOnInit(): void {
        this.fetchEmployerList();
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
