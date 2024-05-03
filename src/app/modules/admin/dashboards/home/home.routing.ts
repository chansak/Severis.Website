import { Route } from '@angular/router';
import { LandingHomeComponent } from '@module/admin/dashboards/home/home.component';
import { LandingHomeResolver } from 'app/modules/admin/dashboards/home/home.resolvers';
export const landingHomeRoutes: Route[] = [
    {
        path     : '',
        component: LandingHomeComponent,
        resolve  : {
            data: LandingHomeResolver
        }
    }
];
