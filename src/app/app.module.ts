//Modules
import { NgModule } from '@angular/core';
import { Title, BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard.component';

//Custom Modules
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './shared/routing.module';
import { MaterialModule } from './shared/material.module';

//Services
import { GlobalService } from './global.service';

// import 'hammerjs';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent
	],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		FormsModule,
		HttpModule,
		CommonModule,
		SharedModule,
		RoutingModule,
		MaterialModule
	],
	providers: [
		Title,
		[GlobalService]
	],
	bootstrap: [AppComponent]
})
export class AppModule {

	constructor() {
	}
}
