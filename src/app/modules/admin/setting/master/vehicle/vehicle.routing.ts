import { Route } from '@angular/router';
import {BrandComponent} from '@module/admin/setting/master/vehicle/brand/brand.component';
import {ModelComponent} from '@module/admin/setting/master/vehicle/model/model.component';

export const vehicleRoutes: Route[] = [
    {
        path     : '',
        component: BrandComponent,
        resolve  : {

        }
    },
    {
        path     : 'brand',
        component: BrandComponent,
        resolve  : {

        }
    },
    {
        path     : 'model',
        component: ModelComponent,
        resolve  : {

        }
    },
];
