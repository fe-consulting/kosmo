import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

const home: Route = {
	path: '',
	component: HomeComponent,
};

export const docs: Route = {
	path: 'docs',
	loadChildren: './pages/docs/docs.module#DocsModule',
};

export const defaultPage: Route = {
	path: '**',
	redirectTo: '/',
};

const routes = [home, docs, defaultPage];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
