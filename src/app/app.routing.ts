import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { IdeasComponent } from './ideas/ideas.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SplashPageComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'ideas',
    component: IdeasComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
