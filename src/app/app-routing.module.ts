import { EmployerComponent } from './employer/employer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleEmpComponent } from './employer/single-emp/single-emp.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
    { path: '', redirectTo: '/dash-board', pathMatch: 'full' },
    {
        path: 'dash-board',
        component: DashboardComponent,
        children: [
            {
                path: 'categories',
                component: CategoryComponent,
            },
            {
                path: 'product',
                component: ProductComponent,
            },
        ],
    },
    { path: 'employers', component: EmployerComponent },
    { path: 'employers/:id', component: SingleEmpComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
