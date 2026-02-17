import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { FeaturesComponent } from './pages/features/features.component';
import { BlogsComponent } from './pages/blogs/blogs.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'templates', component: TemplatesComponent },
  {
  path: 'customize/:type',
  loadComponent: () => import('./pages/customize-template/customize-template.component')
      .then(m => m.CustomizeTemplateComponent)
    }

];
