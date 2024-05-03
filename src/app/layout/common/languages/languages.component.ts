import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { take } from 'rxjs';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';

@Component({
    selector       : 'languages',
    templateUrl    : './languages.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'languages'
})
export class LanguagesComponent implements OnInit, OnDestroy
{
    availableLangs: AvailableLangs;
    activeLang: string;
    flagCodes: any;

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseNavigationService: FuseNavigationService,
        private _translocoService: TranslocoService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the available languages from transloco
        this.availableLangs = this._translocoService.getAvailableLangs();

        // Subscribe to language changes
        this._translocoService.langChanges$.subscribe((activeLang) => {

            // Get the active lang
            this.activeLang = activeLang;

            // Update the navigation
            this._updateNavigation(activeLang);
        });

        // Set the country iso codes for languages for flags
        this.flagCodes = {
            'en': 'us',
            'tr': 'tr',
            'th':'th'
        };
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Set the active lang
     *
     * @param lang
     */
    setActiveLang(lang: string): void
    {
        // Set the active lang
        this._translocoService.setActiveLang(lang);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Update the navigation
     *
     * @param lang
     * @private
     */
    private _updateNavigation(lang: string): void
    {
        // For the demonstration purposes, we will only update the Dashboard names
        // from the navigation but you can do a full swap and change the entire
        // navigation data.
        //
        // You can import the data from a file or request it from your backend,
        // it's up to you.

        // Get the component -> navigation data -> item
        const navComponent = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>('mainNavigation');

        // Return if the navigation component does not exist
        if ( !navComponent )
        {
            return null;
        }

        // Get the flat navigation data
        const navigation = navComponent.navigation;

        const projectDashboardItem = this._fuseNavigationService.getItem('dashboards.project', navigation);
        if ( projectDashboardItem )
        {
            this._translocoService.selectTranslate('Project').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    projectDashboardItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
        const vehicleProdDashboardItem = this._fuseNavigationService.getItem('app.vehicleprod', navigation);
        if ( vehicleProdDashboardItem )
        {
            this._translocoService.selectTranslate('VehicleProd').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    vehicleProdDashboardItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
        const tireDemandDashboardItem = this._fuseNavigationService.getItem('app.tiredemand', navigation);
        if ( tireDemandDashboardItem )
        {
            this._translocoService.selectTranslate('TireDemand').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    tireDemandDashboardItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
        const salesDemandDashboardItem = this._fuseNavigationService.getItem('app.saledemand', navigation);
        if ( salesDemandDashboardItem )
        {
            this._translocoService.selectTranslate('SalesDemand').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    salesDemandDashboardItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
        const homeDashboardItem = this._fuseNavigationService.getItem('dashboards.home', navigation);
        if ( homeDashboardItem )
        {
            this._translocoService.selectTranslate('Home').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    homeDashboardItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }

    }
}
