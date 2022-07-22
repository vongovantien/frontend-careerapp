import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowEmpComponent } from './employer/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employer/add-edit-emp/add-edit-emp.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleEmpComponent } from './employer/single-emp/single-emp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './shared/dialog/dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSortModule } from '@angular/material/sort';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/pages/home/home.component';
import { AboutusComponent } from './home/pages/aboutus/aboutus.component';
import { ContactusComponent } from './home/pages/contactus/contactus.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppEffects } from './effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers';
import { ChildComponent } from './components/child/child.component';
@NgModule({
    declarations: [
        AppComponent,
        ShowEmpComponent,
        AddEditEmpComponent,
        SingleEmpComponent,
        DialogComponent,
        DashboardComponent,
        AdminComponent,
        HomeComponent,
        AboutusComponent,
        ContactusComponent,
        CategoryComponent,
        ProductComponent,
        ChildComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatTableModule,
        MatSortModule,
        EffectsModule.forRoot(AppEffects),
        // Instrumentation must be imported after importing StoreModule (config is optional)
        StoreDevtoolsModule.instrument({
          maxAge: 25, // Retains last 25 states
          logOnly: environment.production, // Restrict extension to log-only mode
          autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        }),
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
