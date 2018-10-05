import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

// @kosmo
import { ProgressTimerModule } from '@kosmo/progress-timer';
import { ButtonModule } from '@kosmo/button';
import { TabsModule } from '@kosmo/tabs';
import { CheckboxModule } from '@kosmo/checkbox';
import { ExpansionTabsModule } from '@kosmo/expansion-tabs';

// demos
import { ProgressBarDemoComponent } from './components/progress-bar-demo/progress-bar-demo.component';
import { ButtonDemoComponent } from './components/button-demo/button-demo.component';
import { TabsDemoComponent } from './components/tabs-demo/tabs-demo.component';
import { CheckboxDemoComponent } from './components/checkbox-demo/checkbox-demo.component';

@NgModule({
    declarations: [
        AppComponent,
        ProgressBarDemoComponent,
        ButtonDemoComponent,
        TabsDemoComponent,
        CheckboxDemoComponent,
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        ProgressTimerModule,
        ButtonModule,
        TabsModule,
        ExpansionTabsModule,
        CheckboxModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
