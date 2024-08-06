import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', redirectTo: 'task', pathMatch: 'full' },
    {
      path: 'task',
      loadChildren: () => import('./task/task.module').then((m) => m.TaskModule),
    },
  ] },
 
];
