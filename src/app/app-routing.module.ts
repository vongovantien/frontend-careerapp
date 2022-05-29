import { EmployerComponent } from './employer/employer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleEmpComponent } from './employer/single-emp/single-emp.component';

const routes: Routes = [
    { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
    { path: 'employers', component: EmployerComponent },
    { path: 'employers/:id', component: SingleEmpComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
