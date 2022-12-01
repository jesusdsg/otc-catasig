import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

/**
 * Stablish the main routes in the next array
 */
const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        {
          path: '',
          redirectTo: 'pages',
          pathMatch: 'full'
        },
        {
          path: 'pages',
          loadChildren: () => import('../pages/pages.module').then( m => m.PagesModule),
          //canActivate: [AuthGuard]
        },
        {
          path: 'search',
          loadChildren: () => import('../pages/search/search.module').then( m => m.SearchModule),
          //canActivate: [AuthGuard]
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
