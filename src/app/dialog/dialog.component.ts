import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShareService } from './../share.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
    roleList = ['admin', 'user', 'web-master'];
    postForm!: FormGroup;
    actionBtn: string = 'Save';
    constructor(
        private formBuilder: FormBuilder,
        private service: ShareService,
        @Inject(MAT_DIALOG_DATA) public editData: any,
        private dialogRef: MatDialogRef<DialogComponent>
    ) {}

    ngOnInit(): void {
        this.postForm = this.formBuilder.group({
            title: ['', Validators.required],
            category: ['', Validators.required],
            time: ['', Validators.required],
            role: ['', Validators.required],
            salary: ['', Validators.required],
            description: ['', Validators.required],
        });

        if (this.editData) {
            this.actionBtn = 'Update';
            this.postForm.controls['title'].setValue(this.editData.title);
        }
    }

    addProduct() {
        if (!this.editData) {
            if (this.postForm.valid) {
                this.service.addEmployer(this.postForm.value).subscribe({
                    next: (res) => {
                        alert('Product added successfully');
                        this.dialogRef.close('save');
                    },
                    error: () => {
                        alert('Error while adding the product');
                    },
                });
            }
        } else {
            this.service
                .updateEmployer(this.postForm.value, this.editData.id)
                .subscribe({
                    next: (res) => {
                        alert('Product updated successfully');
                        this.postForm.reset();
                        this.dialogRef.close('update');
                    },
                    error: () => {
                        alert(0);
                    },
                });
        }
    }
}
