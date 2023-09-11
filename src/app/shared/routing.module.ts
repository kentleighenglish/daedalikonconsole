import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ConstellationsModule } from '../constellations/constellations.module';
import { SymbolsModule } from '../symbols/symbols.module';
import { SitesModule } from '../sites/sites.module';

import { DashboardComponent } from '../pages/dashboard.component';

const routes: Routes = [
	{ path: '',   component: DashboardComponent },
	{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
	imports: [
		ConstellationsModule,
		SymbolsModule,
		SitesModule,
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class RoutingModule {}
