import { ShareService } from './share.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'CareerApp';

    displayedColumns: string[] = [
        'id',
        'company_name',
        'contact_name',
        'created_date',
        'contact_email',
        'description',
        'action',
    ];
    dataSource!: MatTableDataSource<any>;
    employerList = [];
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(private dialog: MatDialog, private service: ShareService) {}
    ngOnInit(): void {
        this.getAllEmployers();
    }

    openDialog() {
        this.dialog.open(DialogComponent, {
            width: '30%',
        });
    }
    getAllEmployers() {
        this.service.getEmployerList().subscribe({
            next: (res) => {
                this.dataSource = new MatTableDataSource(res.results);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            },
            error: (err) => {
                alert('Error while fetching the Records !!');
            },
        });
    }

    editProduct(row: any) {
        this.dialog
            .open(DialogComponent, {
                width: '30%',
                data: row,
            })
            .afterClosed()
            .subscribe((val) => {
                if (val === 'update') {
                    this.getAllEmployers();
                }
            });
    }

    deleteProduct(id: number) {
        this.service.deleteEmployer(id).subscribe({
            next: (res) => {
                alert('Xoa thanh cong');
            },
            error: () => {
                alert('loi');
            },
        });
    }
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
