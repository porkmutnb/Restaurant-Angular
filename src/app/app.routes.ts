import { Routes } from '@angular/router';
import { AuthGuardService } from './service/auth-guard.service';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'menu',
        loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule),
        canActivate: [AuthGuardService]
    },
    {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
        canActivate: [AuthGuardService]
    },
    {
        path: 'serveTable',
        loadChildren: () => import('./serve-table/serve-table.module').then(m => m.ServeTableModule),
        canActivate: [AuthGuardService]
    },
    { path: '**', redirectTo: 'menu' }
];
