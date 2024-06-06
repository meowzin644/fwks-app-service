import { Routes } from '@angular/router'

const defaultRoute = 'dashboards'

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: defaultRoute },
    { path: defaultRoute, loadChildren: () => import('./features/index').then(x => x.mainRoutes) },
    { path: '**', pathMatch: 'full', redirectTo: defaultRoute },
]
