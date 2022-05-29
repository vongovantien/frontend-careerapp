import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployerComponent } from './employer/employer.component';
import { ShowEmpComponent } from './employer/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employer/add-edit-emp/add-edit-emp.component';
import { ShareService } from './share.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleEmpComponent } from './employer/single-emp/single-emp.component';
@NgModule({
    declarations: [
        AppComponent,
        EmployerComponent,
        ShowEmpComponent,
        AddEditEmpComponent,
        SingleEmpComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [ShareService],
    bootstrap: [AppComponent],
})
export class AppModule {}
