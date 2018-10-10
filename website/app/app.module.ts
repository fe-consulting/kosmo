import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [AppComponent, HomeComponent],
	imports: [BrowserAnimationsModule, SharedModule, AppRoutingModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
