/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboards.home',
        title: 'Home',
        subtitle: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/dashboards/home',
    },
    {
        id      : 'app',
        title   : 'Application Modules',
        subtitle: 'OE Budget Sytem',
        type    : 'group',
        icon    : 'mat_outline:apps',
        children: [
            {
                id   : 'app.vehicleprod',
                title: 'Estimate Vehicle Production',
                type : 'collapsable',
                icon : 'mat_outline:directions_car_filled',
                children:[
                    {
                        id        : 'app.vehicleprod.search',
                        title     : 'Search',
                        type      : 'basic',
                        icon      : "heroicons_outline:document-search",
                        link      : '/app/vehicleprod/search',
                        exactMatch: true
                    },
                    {
                        id   : 'app.vehicleprod.upload',
                        title: 'Upload File',
                        type : 'basic',
                        icon : 'heroicons_outline:upload',
                        link : '/app/vehicleprod/upload'
                    },
                    // {
                    //     id   : 'app.vehicleprod.checking',
                    //     title: 'Status checking',
                    //     type : 'basic',
                    //     icon: 'heroicons_outline:clipboard-list',
                    //     link : '/app/vehicleprod/checking'
                    // },
                ]
            },
            {
                id   : 'app.tiredemand',
                title: 'Tire Demand',
                type : 'collapsable',
                icon : 'mat_solid:album',
                link : '/app/tiredemand',
                children:[
                    {
                        id   : 'app.tiredemand.search',
                        title: 'Upload File',
                        type : 'basic',
                        icon : 'heroicons_outline:search',
                        link : '/app/tiredemand/search'
                    },
                ]
            },
            {
                id   : 'app.saledemand',
                title: 'Sales Demand',
                type : 'collapsable',
                icon : 'mat_solid:attach_money',
                link : '/app/saledemand',
                children:[
                    {
                        id        : 'app.saledemand.home',
                        title     : 'Search',
                        type      : 'basic',
                        icon      : "heroicons_outline:document-search",
                        link      : '/app/saledemand',
                        exactMatch: true
                    },
                    {
                        id   : 'app.saledemand.upload',
                        title: 'Upload File',
                        type : 'basic',
                        icon : 'heroicons_outline:upload',
                        link : '/app/saledemand/upload'
                    },
                    {
                        id   : 'app.saledemand.search',
                        title: 'Status checking',
                        type : 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link : '/app/saledemand/search'
                    },
                ]
            },
        ]
    },
    {
        id  : 'divider-1',
        type: 'divider'
    },
    {
        id      : 'app.report',
        title   : 'Report',
        subtitle: 'Reports & Charts',
        type    : 'group',
        icon    : 'mat_outline:bar_chart',
        children: []
    },
    {
        id  : 'divider-1',
        type: 'divider'
    },
    {
        id      : 'setting',
        title   : 'Application',
        subtitle: 'Settings',
        type    : 'group',
        icon    : 'heroicons_outline:menu',
        children: [
            {
                id      : 'setting.master',
                title   : 'Master Data',
                icon    : 'heroicons_outline:database',
                type    : 'collapsable',
                children: [
                    {
                        id      : 'setting.master.vehicle',
                        title   : 'Vehicle',
                        type    : 'collapsable',
                        children: [
                            {
                                id      : 'setting.master.vehicle.brand',
                                title   : 'Brand',
                                type    : 'basic',
                                link : '/setting/master/vehicle/brand'
                            },
                            {
                                id      : 'setting.master.vehicle.model',
                                title   : 'Model',
                                type    : 'basic',
                                link    : '/setting/master/vehicle/model'
                            }
                        ]
                    },
                    {
                        id      : 'setting.master.tire',
                        title   : 'Tire',
                        type    : 'collapsable',
                        children: [
                            {
                                id      : 'setting.master.tire.band',
                                title   : 'AAA',
                                type    : 'basic',
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        tooltip : 'Dashboards',
        type    : 'aside',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'Apps',
        tooltip : 'Apps',
        type    : 'aside',
        icon    : 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'pages',
        title   : 'Pages',
        tooltip : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'UI',
        tooltip : 'UI',
        type    : 'aside',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation',
        tooltip : 'Navigation',
        type    : 'aside',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'DASHBOARDS',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'APPS',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id   : 'others',
        title: 'OTHERS',
        type : 'group'
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'User Interface',
        type    : 'aside',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation Features',
        type    : 'aside',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboards.home',
        title: 'Home',
        subtitle: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/dashboards/home',
    },
    {
        id      : 'app',
        title   : 'Application Modules',
        subtitle: 'OE Budget Sytem',
        type    : 'group',
        icon    : 'mat_outline:apps',
        children: [
            {
                id   : 'app.vehicleprod',
                title: 'Estimate Vehicle Production',
                type : 'collapsable',
                icon : 'mat_outline:directions_car_filled',
                children:[
                    {
                        id        : 'app.vehicleprod.search',
                        title     : 'Search',
                        type      : 'basic',
                        icon      : "heroicons_outline:document-search",
                        link      : '/app/vehicleprod/search',
                        exactMatch: true
                    },
                    {
                        id   : 'app.vehicleprod.upload',
                        title: 'Upload File',
                        type : 'basic',
                        icon : 'heroicons_outline:upload',
                        link : '/app/vehicleprod/upload'
                    },
                ]
            },
            {
                id   : 'app.tiredemand',
                title: 'Tire Demand',
                type : 'collapsable',
                icon : 'mat_solid:album',
                link : '/app/tiredemand',
                children:[
                    {
                        id   : 'app.tiredemand.search',
                        title: 'Upload File',
                        type : 'basic',
                        icon : 'heroicons_outline:upload',
                        link : '/app/tiredemand/search'
                    },
                ]
            },
            {
                id   : 'app.saledemand',
                title: 'Sales Demand',
                type : 'collapsable',
                icon : 'mat_solid:attach_money',
                link : '/app/saledemand',
                children:[
                    {
                        id        : 'app.saledemand.home',
                        title     : 'Search',
                        type      : 'basic',
                        icon      : "heroicons_outline:document-search",
                        link      : '/app/saledemand',
                        exactMatch: true
                    },
                    {
                        id   : 'app.saledemand.upload',
                        title: 'Upload File',
                        type : 'basic',
                        icon : 'heroicons_outline:upload',
                        link : '/app/saledemand/upload'
                    },
                    {
                        id   : 'app.saledemand.search',
                        title: 'Status checking',
                        type : 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link : '/app/saledemand/search'
                    },
                ]
            },
        ]
    },
    {
        id  : 'divider-1',
        type: 'divider'
    },
    {
        id      : 'app.report',
        title   : 'Report',
        subtitle: 'Reports & Charts',
        type    : 'group',
        icon    : 'mat_outline:bar_chart',
        children: []
    },
    {
        id  : 'divider-1',
        type: 'divider'
    },
    {
        id      : 'setting',
        title   : 'Application',
        subtitle: 'Settings',
        type    : 'group',
        icon    : 'heroicons_outline:menu',
        children: [
            {
                id      : 'setting.master',
                title   : 'Master Data',
                icon    : 'heroicons_outline:database',
                type    : 'collapsable',
                children: [
                    {
                        id      : 'setting.master.vehicle',
                        title   : 'Vehicle',
                        type    : 'collapsable',
                        children: [
                            {
                                id      : 'setting.master.vehicle.brand',
                                title   : 'Brand',
                                type    : 'basic',
                                link : '/setting/master/vehicle/brand'
                            },
                            {
                                id      : 'setting.master.vehicle.model',
                                title   : 'Model',
                                type    : 'basic',
                                link    : '/setting/master/vehicle/model'
                            }
                        ]
                    },
                    {
                        id      : 'setting.master.tire',
                        title   : 'Tire',
                        type    : 'collapsable',
                        children: [
                            {
                                id      : 'setting.master.tire.band',
                                title   : 'AAA',
                                type    : 'basic',
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
