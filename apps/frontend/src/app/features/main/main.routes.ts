import { Routes } from '@angular/router'
import { DashboardsComponent } from './dashboards/dashboards.component'

export const routes: Routes = [
    { path: '', component: DashboardsComponent, data: { breadcrumb: 'dashboards' } },
    {
        path: 'customer/:id',
        component: DashboardsComponent,
        data: { breadcrumb: 'customer' },
        children: [
            { path: 'orders', component: DashboardsComponent, data: { breadcrumb: 'orders' } },            
        ]
    },
]