import { Route } from '@angular/router';
import { AuthGuard } from '@core/auth/guards/auth.guard';
import { NoAuthGuard } from '@core/auth/guards/noAuth.guard';
import { LayoutComponent } from '@layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/dashboards/project'
    {path: '', pathMatch : 'full', redirectTo: 'dashboards/home'},

    // Redirect signed in user to the '/dashboards/project'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'dashboards/home'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('@module/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            {path: 'forgot-password', loadChildren: () => import('@module/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'reset-password', loadChildren: () => import('@module/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('@module/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'sign-up', loadChildren: () => import('@module/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}
        ]
    },

    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

    // Landing routes
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/admin/dashboards/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Admin routes
    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [

            // Dashboards
            {path: 'dashboards', children: [
                {path: 'home', loadChildren: () => import('@module/admin/dashboards/home/home.module').then(m => m.LandingHomeModule)},
            ]},
            
            {path: 'app', children: [
                {path: 'floor', children: [
                    {
                        path: 'search', loadChildren: () => import('app/modules/admin/app/vehicleprod/search/search.module').then(m => m.SearchingModule)},
                ]},
                // {path: 'vehicleprod', children: [
                //     {
                //         path: 'checking/:id', 
                //         loadChildren: () => import('app/modules/admin/app/vehicleprod/checking/checking.module').then(m => m.CheckingModule),
                //     },
                //     {
                //         path: 'search', loadChildren: () => import('app/modules/admin/app/vehicleprod/search/search.module').then(m => m.SearchingModule)},
                //     {
                //         path: 'upload', 
                //         loadChildren: () => import('app/modules/admin/app/vehicleprod/upload/upload.module').then(m => m.UploadModule)
                //     }
                // ]},
                // {
                //     path: 'tiredemand', children: [
                //     {
                //         path: 'search', 
                //         loadChildren: () => import('@module/admin/app/tiredemand/search/search.module').then(m => m.TireDemandSearchModule)
                //     },
                //     {
                //         path: 'view/:id', 
                //         loadChildren: () => import('@module/admin/app/tiredemand/view/view.module').then(m => m.TireDemandViewModule)
                //     }
                // ]},
            ]},

            // Setting
            {path: 'setting', children: [
                {
                    path: 'master', children:[
                        {path: 'vehicle', loadChildren: () => import('@module/admin/setting/master/vehicle/vehicle.module').then(m => m.VehicleModule)},
                    ]
                }]
            },

            // 404 & Catch all
            {path: '404-not-found', pathMatch: 'full', loadChildren: () => import('@module/admin/pages/error/error-404/error-404.module').then(m => m.Error404Module)},
            {path: '**', redirectTo: '404-not-found'}
        ]
    }
];
